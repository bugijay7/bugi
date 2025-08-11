// test-db.js
import { sql } from '../config/test-db.js';

const testConnection = async () => {
  try {
    const result = await sql`SELECT NOW()`;
    console.log('Connected successfully:', result);
  } catch (err) {
    console.error('Connection failed:', err);
  }
};

testConnection();
