import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cron from 'node-cron';
import axios from 'axios';
import connectDB from './config/db.js';

import brandsRoutes from './routes/BrandRoutes.js';
import storesRoutes from './routes/StoresRoutes.js';
import portfoliosRoutes from './routes/PortfolioRoutes.js';
import causesRoutes from './routes/CauseRoutes.js';
import consultationRoutes from './routes/ConsultationRoutes.js';

dotenv.config();
connectDB();

const app = express();

// ✅ FIXED CORS CONFIGURATION
app.use(cors({
  origin: [
    'https://bugi.vercel.app', 
    'https://www.yohanlabs.online', 
    'https://bugi-2.onrender.com',  // 🔧 Added "www." to match your frontend domain exactly
    'http://localhost:5173',          // For local dev (Vite)
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // ✅ Ensure OPTIONS is allowed
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],      // 🔧 Added 'Authorization' for tokens if needed
}));



// Middleware to parse JSON
app.use(express.json());

// ✅ API Routes
console.log('Brand route: /api/brands');
app.use('/api/brands', brandsRoutes);
console.log('Store route: /api/stores');
app.use('/api/stores', storesRoutes);
console.log('portfolio route: /api/portfolios');
app.use('/api/portfolios', portfoliosRoutes);
console.log('causes route: /api/causes');
app.use('/api/causes', causesRoutes);
console.log('consult route: /api/consultations');
app.use('/api/consultations', consultationRoutes);

// Ping route for cron job
app.get('/ping', (req, res) => {
  res.status(200).send('Server is awake!');
});

// Cron job to keep Render awake
cron.schedule('*/5 * * * *', async () => {
  try {
    const url = 'https://bugi-2.onrender.com/ping';
    await axios.get(url);
    console.log(`Pinged server at ${new Date().toLocaleTimeString()}`);
  } catch (error) {
    console.error('Ping failed:', error.message);
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
