import express from 'express';
import { getPortfolios, getPortfolioById, createPortfolios, updatePortfolios, deletePortfolios } from '../controllers/PortfolioControllers.js';
const router = express.Router();

router.get('/', getPortfolios);
router.get('/:id', getPortfolioById);
router.post('/',  createPortfolios);
router.put('/:id', updatePortfolios);
router.delete('/:id', deletePortfolios);  

export default router;