import express from 'express';
import { getPortfolio, getPortfolioById, createPortfolio, updatePortfolio, deletePortfolio } from '../controllers/PortfolioControllers.js';
import { authenticateToken } from '../middlewares/auth.js';
const router = express.Router();

router.get('/', getPortfolio);
router.get('/:id', getPortfolioById);
router.post('/', authenticateToken, createPortfolio);
router.put('/:id', authenticateToken, updatePortfolio);
router.delete('/:id', authenticateToken, deletePortfolio);  

export default router;