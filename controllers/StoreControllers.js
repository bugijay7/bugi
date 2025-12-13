import Store from '../models/StoreModel.js';  

// Get all stores 
export const getStores = async (req, res) => {
  try {
    const stores = await Store.find();    
    res.json(stores); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  



// Get store by ID  
export const getStoreById = async (req, res) => {
  try {   
    const foundStore = await Store.findById(req.params.id);    
    if (!foundStore) {
      return res.status(404).json({ message: 'Store not found' });
    } 
    res.json(foundStore); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};  

// Create a new store 
export const createStore = async (req, res) => {
  try { 
    const newStore = new Store(req.body); 
    const savedStore = await newStore.save();    
    res.status(201).json(savedStore); 
  }   catch (error) {
    res.status(400).json({ message: error.message });
  } 
};

// Update an existing store 
export const updateStore = async (req, res) => {
  try {
    const updatedStore = await Store.findByIdAndUpdate(
      req.params.id,  
      req.body,
      { new: true }
    );    
    if (!updatedStore) {
      return res.status(404).json({ message: 'Store not found' });
    }
    res.json(updatedStore);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};  

// Delete a store 
export const deleteStore = async (req, res) => {
  try {   
    const deletedStore = await Store.findByIdAndDelete(req.params.id);    
    if (!deletedStore) {
      return res.status(404).json({ message: 'Store not found' });
    }   
    res.json({ message: 'Store deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};    

