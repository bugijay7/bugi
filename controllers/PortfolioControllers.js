import Portfolio from "../models/PortfolioModel.js";

// Get all portfolios
export const getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();  
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  

// Get portfolio by ID
export const getPortfolioById = async (req, res) => {   
    try {
    const foundPortfolio = await Portfolio.findById(req.params.id);
    if (!foundPortfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    res.json(foundPortfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }     
};  

// Create a new portfolio
export const createPortfolios = async (req, res) => {
  try {
    const newPortfolio = new Portfolio(req.body); 
    const savedPortfolio = await newPortfolio.save();  
    res.status(201).json(savedPortfolio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Update an existing portfolio
export const updatePortfolios = async (req, res) => {
  try {
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );  
    if (!updatedPortfolio) {    
        return res.status(404).json({ message: 'Portfolio not found' });    
    } 
    res.json(updatedPortfolio);   
  } catch (error) {
    res.status(400).json({ message: error.message });
  } 
};  

// Delete a portfolio   
export const deletePortfolios = async (req, res) => {
  try { 
    const deletedPortfolio = await Portfolio.findByIdAndDelete(req.params.id);      
    if (!deletedPortfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }   
    res.json({ message: 'Portfolio deleted successfully' });    
    } catch (error) {
    res.status(500).json({ message: error.message });   
    }
};  

