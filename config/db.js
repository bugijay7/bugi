// config/db.js
import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

export const sql = postgres(process.env.DATABASE_URL, {
  ssl: 'require',
});
