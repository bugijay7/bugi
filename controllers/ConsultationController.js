import Consultationmodel from "../models/Consultationmodel.js";


// Get all consultations
export const getConsultations = async (req, res) => {
  try { 
    const consultations = await Consultationmodel.find();   
    res.json(consultations); 
  } catch (error) {   
    res.status(500).json({ message: error.message });
  }   
};  

// Get consultation by ID
export const getConsultationById = async (req, res) => {
  try {   
    const foundConsultation = await Consultationmodel.findById(req.params.id);    
    if (!foundConsultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    } 
    res.json(foundConsultation); 
  }     catch (error) {
    res.status(500).json({ message: error.message });
  } 
};  

// Create a new consultation
export const createConsultation = async (req, res) => {
  try {
    const newConsultation = new Consultationmodel(req.body);  
    const savedConsultation = await newConsultation.save();    
    res.status(201).json(savedConsultation); 
  }   catch (error) {
    res.status(400).json({ message: error.message });
  } 
};


// Update an existing consultation
export const updateConsultation = async (req, res) => {
  try {   
    const updatedConsultation = await Consultationmodel.findByIdAndUpdate(
      req.params.id,
      req.body, 
      { new: true }
    );  
    if (!updatedConsultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }   
    res.json(updatedConsultation);  
  } catch (error) {
    res.status(400).json({ message: error.message });
  }   
};  

// Delete a consultation    
export const deleteConsultation = async (req, res) => {
  try {   
    const deletedConsultation = await Consultationmodel.findByIdAndDelete(req.params.id); 
    if (!deletedConsultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }   
    res.json({ message: 'Consultation deleted successfully' }); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};  


