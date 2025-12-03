import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Stores() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await axios.get('https://bugi-2.onrender.com/api/stores'); // ✅ Axios request
        setStores(res.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading stores...</p>;
  if (error) return <p className="text-center text-red-500 font-semibold">Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto pt-36 min-h-[100vh]">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Stores</h2>

      {stores.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <div
              key={store.id}
              className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{store.name}</h3>
              <p className="text-gray-700">{store.location}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No stores available at the moment.</p>
      )}
    </div>
  );
}

export default Stores;
