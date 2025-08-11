import { sql } from '../config/db.js';

// Get all brands
export const getBrands = async (req, res) => {
  try {
    const brands = await sql`SELECT * FROM brands ORDER BY id DESC`;
    res.status(200).json(brands);
  } catch (error) {
    console.error('Error fetching brands:', error);
    res.status(500).json({ message: 'Error fetching brands' });
  }
};

// Get single brand by ID
export const getBrandsById = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await sql`SELECT * FROM brands WHERE id = ${id}`;
    if (brand.length === 0) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.status(200).json(brand[0]);
  } catch (error) {
    console.error('Error fetching brand:', error);
    res.status(500).json({ message: 'Error fetching brand' });
  }
};

// Create a new brand
export const createBrand = async (req, res) => {
  try {
    const {
      fullName,
      brandName,
      email,
      phone,
      brandDescription,
      targetAudience,
      websiteGoal,
      siteSections,
      brandAssets,
      styleInspiration,
      features,
      timeline,
      notes
    } = req.body;

    const result = await sql`
      INSERT INTO brands (
        full_name,
        brand_name,
        email,
        phone,
        brand_description,
        target_audience,
        website_goal,
        site_sections,
        brand_assets,
        style_inspiration,
        features,
        timeline,
        notes
      ) VALUES (
        ${fullName},
        ${brandName},
        ${email},
        ${phone},
        ${brandDescription},
        ${targetAudience},
        ${websiteGoal},
        ${siteSections},
        ${brandAssets},
        ${styleInspiration},
        ${features}, -- assume array or text
        ${timeline},
        ${notes}
      ) RETURNING *
    `;

    res.status(201).json(result[0]);
  } catch (error) {
    console.error('Error creating brand:', error);
    res.status(500).json({ message: 'Error creating brand' });
  }
};

// Update an existing brand
export const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      fullName,
      brandName,
      email,
      phone,
      brandDescription,
      targetAudience,
      websiteGoal,
      siteSections,
      brandAssets,
      styleInspiration,
      features,
      timeline,
      notes
    } = req.body;

    const updated = await sql`
      UPDATE brands SET
        full_name = ${fullName},
        brand_name = ${brandName},
        email = ${email},
        phone = ${phone},
        brand_description = ${brandDescription},
        target_audience = ${targetAudience},
        website_goal = ${websiteGoal},
        site_sections = ${siteSections},
        brand_assets = ${brandAssets},
        style_inspiration = ${styleInspiration},
        features = ${features},
        timeline = ${timeline},
        notes = ${notes}
      WHERE id = ${id}
      RETURNING *
    `;

    if (updated.length === 0) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    res.status(200).json(updated[0]);
  } catch (error) {
    console.error('Error updating brand:', error);
    res.status(500).json({ message: 'Error updating brand' });
  }
};

// Delete a brand
export const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await sql`DELETE FROM brands WHERE id = ${id} RETURNING *`;
    if (deleted.length === 0) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.status(200).json({ message: 'Brand deleted successfully' });
  } catch (error) {
    console.error('Error deleting brand:', error);
    res.status(500).json({ message: 'Error deleting brand' });
  }
};
