import express from 'express';
import { getPortfolios, getPortfolioById, createPortfolios, updatePortfolios, deletePortfolios } from '../controllers/PortfolioControllers.js';
import { authenticateToken } from '../middlewares/auth.js';
const router = express.Router();

router.get('/', getPortfolios);
router.get('/:id', getPortfolioById);
router.post('/',  createPortfolios);
router.put('/:id', authenticateToken, updatePortfolios);
router.delete('/:id', authenticateToken, deletePortfolios);  

export default router;