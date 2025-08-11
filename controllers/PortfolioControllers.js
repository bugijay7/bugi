import bcrypt from 'bcryptjs';
import { sql } from '../config/db.js';
import jwt from 'jsonwebtoken';

export const getPortfolio = async (req, res) => {
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


export const createPortfolio = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newPortfolio = await sql`INSERT INTO portfolios (name, description) VALUES (${name}, ${description}) RETURNING *`;
        res.status(201).json(newPortfolio[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error creating portfolio' });
    }
}

export const updatePortfolio = async (req, res) => {
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


export const deletePortfolio = async (req, res) => {        
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