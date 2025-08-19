import express from 'express';
import { getCauses, getCauseById, createCause, updateCause, deleteCause } from '../controllers/CauseControllers.js';
import { authenticateToken } from '../middlewares/auth.js';
const router = express.Router();

router.get('/', getCauses);
router.get('/:id', getCauseById);
router.post('/',  createCause);
router.put('/:id', authenticateToken, updateCause);
router.delete('/:id', authenticateToken, deleteCause);

export default router;