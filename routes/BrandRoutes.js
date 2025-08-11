import express from 'express';
import  { getBrands, getBrandsById, createBrand, updateBrand, deleteBrand } from '../controllers/BrandControllers.js';
import {  authenticateToken } from '../middlewares/auth.js';
const router = express.Router();


router.get('/', getBrands);
router.get('/:id', getBrandsById);  
router.post('/', authenticateToken, createBrand);
router.put('/:id', authenticateToken, updateBrand);
router.delete('/:id', authenticateToken, deleteBrand);

export default router;