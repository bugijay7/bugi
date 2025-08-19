import express from 'express';
import { getStores, getStoreById, createStore, updateStore, deleteStore } from '../controllers/StoreControllers.js';
import { authenticateToken } from '../middlewares/auth.js';
const router = express.Router();

router.get('/', getStores);
router.get('/:id', getStoreById);
router.post('/',  createStore);
router.put('/:id', authenticateToken, updateStore);
router.delete('/:id', authenticateToken, deleteStore);

export default router;