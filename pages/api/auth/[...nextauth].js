// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {

  return NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    session: {
      strategy: 'jwt',  // 使用 JWT 作为 session 管理
    },
    callbacks: {
      async signIn({ user, account, profile }) {
        console.log(user, account, profile)
        const client = await clientPromise;
        const db = client.db('sample_mflix');
        const usersCollection = db.collection('users');
  
        // 检查用户是否已存在
        const existingUser = await usersCollection.findOne({ email: user.email });
  
        if (!existingUser) {
          // 如果用户不存在，则创建新用户
          await usersCollection.insertOne({
            name: user.name,
            email: user.email,
            emailVerified: user.emailVerified || false,
            image: user.image,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            createdAt: new Date(),
            updatedAt: new Date(),
            balance:0,
          });
        } else {
          // 如果用户已存在，更新 lastLoginAt 和 updatedAt
          await usersCollection.updateOne(
            { email: user.email },
            {
              $set: {
                lastLoginAt: new Date(),
                updatedAt: new Date(),
              },
            }
          );
        }
        return true;
      },
    },
  });
}
