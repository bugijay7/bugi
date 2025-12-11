import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import brandsRoutes from './routes/BrandRoutes.js';
import storesRoutes from './routes/StoresRoutes.js';
import portfoliosRoutes from './routes/PortfolioRoutes.js';
import causesRoutes from './routes/CauseRoutes.js';
import consultationRoutes from './routes/ConsultationRoutes.js';

dotenv.config();
const app = express();


app.use(cors({
    origin: 'https://bugi.vercel.app/',
    credentials: true
}));
app.use(express.json());


app.use('/api/brands', brandsRoutes );
app.use('/api/stores', storesRoutes );
app.use('/api/portfolios', portfoliosRoutes );
app.use('/api/causes', causesRoutes );
app.use('/api/consultations', consultationRoutes);




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});