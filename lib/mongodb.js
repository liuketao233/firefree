// lib/mongodb.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // 从环境变量中读取连接字符串
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // 在开发环境中使用全局变量防止连接池过多的问题
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 在生产环境中直接创建客户端
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
