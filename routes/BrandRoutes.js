import express from 'express';
import  { getBrands, getBrandsById, createBrand, updateBrand, deleteBrand } from '../controllers/BrandControllers.js';
const router = express.Router();


router.get('/', getBrands);
router.get('/:id', getBrandsById);  
router.post('/', createBrand);
router.put('/:id',  updateBrand);
router.delete('/:id', deleteBrand);

export default router;