// pages/api/users.js

import clientPromise from '../../lib/mongodb';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");
  const session = await getSession({ req });
  if(!session){
    res.json({ status: 500, message: 'User unfind' }).end();
  }
    
  switch (req.method) {
    case 'GET':

      const user = session.user;
      const users = await db.collection('users').find({email:user.email}).toArray();
      res.json({ status: 200, data: users });
      break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
