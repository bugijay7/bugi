import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/brands');
        setBrands(response.data);
      } catch (err) {
        console.error('Error fetching brands:', err);
        setError('Failed to load brands. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) return <p className="text-center">Loading brands...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="p-6 pt-36 min-h-[100vh]">
      <h1 className="text-3xl font-bold text-center mb-6">Brands</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{brand.brand_name}</h2>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Full Name:</span> {brand.full_name}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Email:</span> {brand.email}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Phone:</span> {brand.phone}
            </p>
            <p className="text-gray-700 mt-2">{brand.brand_description}</p>
            <div className="mt-4 text-left text-sm text-gray-500 space-y-1">
              <p><span className="font-semibold">Target Audience:</span> {brand.target_audience}</p>
              <p><span className="font-semibold">Website Goal:</span> {brand.website_goal}</p>
              <p><span className="font-semibold">Site Sections:</span> {brand.site_sections}</p>
              <p><span className="font-semibold">Brand Assets:</span> {brand.brand_assets}</p>
              <p><span className="font-semibold">Style Inspiration:</span> {brand.style_inspiration}</p>
              <p><span className="font-semibold">Features:</span> {brand.features}</p>
              <p><span className="font-semibold">Timeline:</span> {brand.timeline}</p>
              <p><span className="font-semibold">Notes:</span> {brand.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
