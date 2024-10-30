// pages/api/game.js

import clientPromise from '../../lib/mongodb';
import { getSession } from 'next-auth/react';
import { startSession } from 'mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");
  const session = await getSession({ req });
  
  if (!session) {
    res.status(500).json({ status: 500, message: 'User not found' });
    return;
  }

  const { email } = session.user;

  const mongoSession = client.startSession();

  try {
    await mongoSession.withTransaction(async () => {
      switch (req.method) {
        case 'GET':
          const { choice, amount, gametype } = req.query;
          if (!choice || !amount || !gametype) {
            res.status(400).json({ status: 400, message: 'Missing required parameters' });
            return;
          }

          // Fetch user data
          const user = await db.collection('users').findOne({ email }, { session: mongoSession });
          if (!user) {
            res.status(404).json({ status: 404, message: 'User not found' });
            return;
          }

          // Update user balance
          const newBalance = user.balance - parseFloat(amount);
          if (newBalance < 0) {
            res.status(400).json({ status: 400, message: 'Insufficient balance' });
            return;
          }

          await db.collection('users').updateOne(
            { email },
            { $set: { balance: newBalance } },
            { session: mongoSession }
          );

          // Create game record
          const gameRecord = {
            email,
            choice,
            amount: parseFloat(amount),
            gametype,
            status: 'pending',
            createdAt: new Date(),
          };
          const gameResult = await db.collection('games').insertOne(gameRecord, { session: mongoSession });

          // Create transaction record
          const transactionRecord = {
            email,
            type: 'debit',
            amount: parseFloat(amount),
            previousBalance: user.balance,
            newBalance: newBalance,
            description: `Game participation: ${gametype}`,
            createdAt: new Date(),
          };
          await db.collection('transactions').insertOne(transactionRecord, { session: mongoSession });

          // Determine if the game is won (example logic)
          const isWin = Math.random() > 0.5; // 50% chance to win (example)
          const prizeAmount = isWin ? parseFloat(amount) * 1.9804 : 0;
          const updatedBalance = isWin ? newBalance + prizeAmount : newBalance;

          // Update user balance if won
          if (isWin) {
            await db.collection('users').updateOne(
              { email },
              { $set: { balance: updatedBalance } },
              { session: mongoSession }
            );
          }

          // Update game record to reflect win/loss and prize
          const updatedGameRecord = await db.collection('games').findOneAndUpdate(
            { _id: gameResult.insertedId },
            { $set: { status: isWin ? 'won' : 'lost', prize: prizeAmount } },
            { returnDocument: 'after', session: mongoSession }
          );

          // Create winning transaction record if won
          if (isWin) {
            const winningTransactionRecord = {
              email,
              type: 'credit',
              amount: prizeAmount,
              previousBalance: newBalance,
              newBalance: updatedBalance,
              description: `Game win: ${gametype}`,
              createdAt: new Date(),
            };
            await db.collection('transactions').insertOne(winningTransactionRecord, { session: mongoSession });
          }

          // Return the full game record including win status and prize amount
          const fullGameRecord = await db.collection('games').findOne({ _id: gameResult.insertedId }, { session: mongoSession });
          res.status(200).json({ status: 200, game: fullGameRecord });
          break;
        default:
          res.status(405).end(); // Method Not Allowed
          break;
      }
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Transaction failed', error: error.message });
  } finally {
    mongoSession.endSession();
  }
}
