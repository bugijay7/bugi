import { sql } from '../config/db.js';


// Get all consultation submissions
export const getConsultations = async (req, res) => {
  try {
const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
    const consultations = await sql`
    
      SELECT * FROM consultations
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}`;

    res.status(200).json(consultations);
  } catch (error) {
    console.error('Error fetching consultations:', error);
    res.status(500).json({ message: 'Error fetching consultations' });
  }
};

// Get a single consultation by ID
export const getConsultationById = async (req, res) => {
  try {
    const { id } = req.params;
    const consultation = await sql`SELECT * FROM consultations WHERE id = ${id}`;
    if (consultation.length === 0) {
      return res.status(404).json({ message: 'Consultation not found' });
    }
    res.status(200).json(consultation[0]);
  } catch (error) {
    console.error('Error fetching consultation:', error);
    res.status(500).json({ message: 'Error fetching consultation' });
  }
};

// Create a new consultation entry
export const createConsultation = async (req, res) => {
  try {
    const {
      name,
      businessName,
      email,
      phone,
      description
    } = req.body;

    const newConsultation = await sql`
      INSERT INTO consultations (
        name,
        business_name,
        email,
        phone,
        description
      ) VALUES (
        ${name},
        ${businessName},
        ${email},
        ${phone},
        ${description}
      ) RETURNING *`;

    res.status(201).json(newConsultation[0]);
  } catch (error) {
    console.error('Error creating consultation:', error);
    res.status(500).json({ message: 'Error creating consultation' });
  }
};

// Update an existing consultation
export const updateConsultation = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      businessName,
      email,
      phone,
      description
    } = req.body;

    const updatedConsultation = await sql`
      UPDATE consultations SET
        name = ${name},
        business_name = ${businessName},
        email = ${email},
        phone = ${phone},
        description = ${description}
      WHERE id = ${id} RETURNING *`;

    if (updatedConsultation.length === 0) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    res.status(200).json(updatedConsultation[0]);
  } catch (error) {
    console.error('Error updating consultation:', error);
    res.status(500).json({ message: 'Error updating consultation' });
  }
};

// Delete a consultation
export const deleteConsultation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedConsultation = await sql`
      DELETE FROM consultations WHERE id = ${id} RETURNING *`;

    if (deletedConsultation.length === 0) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    res.status(200).json({ message: 'Consultation deleted successfully' });
  } catch (error) {
    console.error('Error deleting consultation:', error);
    res.status(500).json({ message: 'Error deleting consultation' });
  }
};
