// pages/api/server.js
import clientPromise from '../../lib/mongodb';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  // 获取用户的 session
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ success: false, message: 'Unauthorized. Please login first.' });
  }

  switch (req.method) {
    case 'GET':
      // 获取数据，比如用户的特定游戏数据
      res.json({ status: 200,session:session });
      break;
      
    case 'POST':
      // 获取请求体中的新游戏数据
      res.json({ status: 200,session:session });
      break;

    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
