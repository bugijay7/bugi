import express from 'express';
import { getCauses, getCauseById, createCause, updateCause, deleteCause } from '../controllers/CauseControllers.js';
const router = express.Router();

router.get('/', getCauses);
router.get('/:id', getCauseById);
router.post('/', createCause);
router.put('/:id', updateCause);
router.delete('/:id', deleteCause);

export default router;