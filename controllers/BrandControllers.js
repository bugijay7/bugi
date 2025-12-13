import Brand from '../models/BrandModel.js';

// Get all brands
export const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  

// Get brand by ID
export const getBrandsById = async (req, res) => {
  try { 
    const foundBrand = await Brand.findById(req.params.id);
    if (!foundBrand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.json(foundBrand);     
  } catch (error) { 
    res.status(500).json({ message: error.message });
  }
};  

// Create a new brand
export const createBrand = async (req, res) => {
  try {
    const newBrand = new Brand(req.body); 
    const savedBrand = await newBrand.save();  
    res.status(201).json(savedBrand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing brand
export const updateBrand = async (req, res) => {
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );  
    if (!updatedBrand) {
      return res.status(404).json({ message: 'Brand not found' });
    } 
    res.json(updatedBrand);   
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};  

// Delete a brand
export const deleteBrand = async (req, res) => {
  try { 
    const deletedBrand = await Brand.findByIdAndDelete(req.params.id);  
    if (!deletedBrand) {
      return res.status(404).json({ message: 'Brand not found' });
    }   
    res.json({ message: 'Brand deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  

