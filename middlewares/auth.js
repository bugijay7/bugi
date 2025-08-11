import jwt from 'jsonwebtoken';
import { sql } from '../config/db.js'; 

export const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    try {
      const user = await sql`SELECT * FROM users WHERE id = ${decoded.id}`;
      if (user.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      req.user = user[0];
      next();
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
}

   