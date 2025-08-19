import { sql } from '../config/db.js';
import jwt from 'jsonwebtoken';

export const getCauses = async (req, res) => {
  try {
    const causes = await sql`SELECT * FROM causes`;
    res.status(200).json(causes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching causes' });
  }
};

export const getCauseById = async (req, res) => {
  try {
    const { id } = req.params;
    const cause = await sql`SELECT * FROM causes WHERE id = ${id}`;
    if (cause.length === 0) {
      return res.status(404).json({ message: 'Cause not found' });
    }
    res.status(200).json(cause[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cause' });
  }
};

export const createCause = async (req, res) => {
  try {
    const {
      orgName,
      contactPerson,
      email,
      phone,
      mission,
      targetAudience,
      sections,
      branding,
      inspiration,
      timeline,
      extras
    } = req.body;

     const formattedSections = Array.isArray(sections)
      ? sections
      : sections.split(',').map(s => s.trim());

    const newCause = await sql`
      INSERT INTO causes (
        org_name,
        contact_person,
        email,
        phone,
        mission,
        target_audience,
        sections,
        branding,
        inspiration,
        timeline,
        extras
      ) VALUES (
        ${orgName},
        ${contactPerson},
        ${email},
        ${phone},
        ${mission},
        ${targetAudience},
        ${formattedSections},
        ${branding},
        ${inspiration},
        ${timeline},
        ${extras}
      ) RETURNING *`;

    res.status(201).json(newCause[0]);
  } catch (error) {
    console.error('Error creating cause:', error);
    res.status(500).json({ message: 'Error creating cause' });
  }
};

export const updateCause = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      orgName,
      contactPerson,
      email,
      phone,
      mission,
      targetAudience,
      sections,
      branding,
      inspiration,
      timeline,
      extras
    } = req.body;

    const updatedCause = await sql`
      UPDATE causes SET
        org_name = ${orgName},
        contact_person = ${contactPerson},
        email = ${email},
        phone = ${phone},
        mission = ${mission},
        target_audience = ${targetAudience},
        sections = ${sections.join(', ')},
        branding = ${branding},
        inspiration = ${inspiration},
        timeline = ${timeline},
        extras = ${extras}
      WHERE id = ${id}
      RETURNING *`;

    if (updatedCause.length === 0) {
      return res.status(404).json({ message: 'Cause not found' });
    }

    res.status(200).json(updatedCause[0]);
  } catch (error) {
    console.error('Error updating cause:', error);
    res.status(500).json({ message: 'Error updating cause' });
  }
};

export const deleteCause = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await sql`DELETE FROM causes WHERE id = ${id} RETURNING *`;
    if (deleted.length === 0) {
      return res.status(404).json({ message: 'Cause not found' });
    }
    res.status(200).json({ message: 'Cause deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting cause' });
  }
};
