import { sql } from '../config/db.js';

// Get all store submissions
export const getStores = async (req, res) => {
  try {
    const stores = await sql`SELECT * FROM stores`;
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stores' });
  }
};

// Get a single store by ID
export const getStoreById = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await sql`SELECT * FROM stores WHERE id = ${id}`;
    if (store.length === 0) {
      return res.status(404).json({ message: 'Store not found' });
    }
    res.status(200).json(store[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching store' });
  }
};

// Create a new store form entry
export const createStore = async (req, res) => {
  try {
    const {
      fullName,
      businessName,
      email,
      phone,
      description,
      estimatedProducts,
      productAssets,
      paymentMethods,
      deliveryRegions,
      branding,
      styleInspiration,
      timeline,
      notes
    } = req.body;

    const newStore = await sql`
      INSERT INTO stores (
        full_name,
        business_name,
        email,
        phone,
        description,
        estimated_products,
        product_assets,
        payment_methods,
        delivery_regions,
        branding,
        style_inspiration,
        timeline,
        notes
      ) VALUES (
        ${fullName},
        ${businessName},
        ${email},
        ${phone},
        ${description},
        ${estimatedProducts},
        ${productAssets},
        ${paymentMethods},
        ${deliveryRegions},
        ${branding},
        ${styleInspiration},
        ${timeline},
        ${notes}
      ) RETURNING *;
    `;

    res.status(201).json(newStore[0]);
  } catch (error) {
    console.error('Error creating store:', error);
    res.status(500).json({ message: 'Error creating store' });
  }
};

// Update a store submission
export const updateStore = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      fullName,
      businessName,
      email,
      phone,
      description,
      estimatedProducts,
      productAssets,
      paymentMethods,
      deliveryRegions,
      branding,
      styleInspiration,
      timeline,
      notes
    } = req.body;

    const updatedStore = await sql`
      UPDATE stores SET
        full_name = ${fullName},
        business_name = ${businessName},
        email = ${email},
        phone = ${phone},
        description = ${description},
        estimated_products = ${estimatedProducts},
        product_assets = ${productAssets},
        payment_methods = ${paymentMethods},
        delivery_regions = ${deliveryRegions},
        branding = ${branding},
        style_inspiration = ${styleInspiration},
        timeline = ${timeline},
        notes = ${notes}
      WHERE id = ${id}
      RETURNING *;
    `;

    if (updatedStore.length === 0) {
      return res.status(404).json({ message: 'Store not found' });
    }

    res.status(200).json(updatedStore[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating store' });
  }
};

// Delete a store entry
export const deleteStore = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStore = await sql`DELETE FROM stores WHERE id = ${id} RETURNING *`;
    if (deletedStore.length === 0) {
      return res.status(404).json({ message: 'Store not found' });
    }
    res.status(200).json({ message: 'Store deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting store' });
  }
};
