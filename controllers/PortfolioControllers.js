import bcrypt from 'bcryptjs';
import { sql } from '../config/db.js';
import jwt from 'jsonwebtoken';

export const getPortfolios = async (req, res) => {
    try {
        const portfolios = await sql`SELECT * FROM portfolios`;
        res.status(200).json(portfolios);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching portfolios' });
    }
}

export const getPortfolioById = async (req, res) => {
    try {
        const { id } = req.params;
        const portfolio = await sql`SELECT * FROM portfolios WHERE id = ${id}`;
        if (portfolio.length === 0) {
            return res.status(404).json({ message: 'Portfolio not found' });
        }
        res.status(200).json(portfolio[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching portfolio' });
    }
}


export const createPortfolios = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      profession,
      portfolioGoal,
      workTypes,
      sections,
      designPrefs,
      timeline,
      notes
    } = req.body;

    const newPortfolio = await sql`
      INSERT INTO portfolios 
      (full_name, email, phone, profession, portfolio_goal, work_types, sections, design_prefs, timeline, notes)
      VALUES (${fullName}, ${email}, ${phone}, ${profession}, ${portfolioGoal}, ${workTypes}, ${sections}, ${designPrefs}, ${timeline}, ${notes})
      RETURNING *`;

    res.status(201).json(newPortfolio[0]);
  } catch (error) {
    console.error("Error creating portfolio:", error);
    res.status(500).json({ message: 'Error creating portfolio' });
  }
};

export const updatePortfolios = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const updatedPortfolio = await sql`UPDATE portfolios SET name = ${name}, description = ${description} WHERE id = ${id} RETURNING *`;
        if (updatedPortfolio.length === 0) {
            return res.status(404).json({ message: 'Portfolio not found' });
        }
        res.status(200).json(updatedPortfolio[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error updating portfolio' });
    }
}   


export const deletePortfolios = async (req, res) => {        
    try {
        const { id } = req.params;
        const deletedPortfolio = await sql`DELETE FROM portfolios WHERE id = ${id} RETURNING *`;
        if (deletedPortfolio.length === 0) {
            return res.status(404).json({ message: 'Portfolio not found' });
        }
        res.status(200).json({ message: 'Portfolio deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting portfolio' });
    }
}   