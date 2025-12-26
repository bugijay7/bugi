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

app.use(cors({
  origin: ['https://bugi.vercel.app', 'https://yohanlabs.online'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Middleware to parse JSON
app.use(express.json());

// ✅ API Routes
app.use('/api/brands', brandsRoutes);
app.use('/api/stores', storesRoutes);
app.use('/api/portfolios', portfoliosRoutes);
app.use('/api/causes', causesRoutes);
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
