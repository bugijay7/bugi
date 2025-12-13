import cause from '../models/CauseModel.js';

// Get all causes 
export const getCauses = async (req, res) => {
  try {
    const causes = await cause.find();  
    res.json(causes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};

// Get cause by ID  
export const getCauseById = async (req, res) => {
  try {
    const foundCause = await cause.findById(req.params.id);   
    if (!foundCause) {
      return res.status(404).json({ message: 'Cause not found' });
    }
    res.json(foundCause);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new cause 
export const createCause = async (req, res) => {
  try {
    const newCause = new cause(req.body); 
    const savedCause = await newCause.save();  
    res.status(201).json(savedCause);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};  
// Update an existing cause 
export const updateCause = async (req, res) => {
  try {
    const updatedCause = await cause.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );  
    if (!updatedCause) {
      return res.status(404).json({ message: 'Cause not found' });
    } 
    res.json(updatedCause); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};    

// Delete a cause 
export const deleteCause = async (req, res) => {
  try { 
    const deletedCause = await cause.findByIdAndDelete(req.params.id);  
    if (!deletedCause) {
      return res.status(404).json({ message: 'Cause not found' });
    }   
    res.json({ message: 'Cause deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};    


