import express from 'express';
import  { getConsultations, getConsultationById, createConsultation, updateConsultation, deleteConsultation } from '../controllers/ConsultationController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getConsultations);
router.get('/:id', getConsultationById);
router.post('/', createConsultation);
router.put('/:id', authenticateToken, updateConsultation);
router.delete('/:id', authenticateToken, deleteConsultation);

export default router;