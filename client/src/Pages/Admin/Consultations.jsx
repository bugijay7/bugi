import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bgImage from '../../assets/form.jpeg';

function Consultations() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const res = await axios.get('https://bugi-2.onrender.com/api/consultations', {
          withCredentials: true, // keep this if you need cookies; remove otherwise
        });
        setConsultations(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load consultation requests.');
      } finally {
        setLoading(false);
      }
    };

    fetchConsultations();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading consultation requests...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 font-semibold">
        {error}
      </div>
    );

  return (
    <div
      className="min-h-screen bg-cover bg-center pt-28 px-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Consultation Requests</h1>
        <p className="text-gray-600 mt-2">View all submitted consultation forms from clients</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {consultations.map((c) => (
          <div
            key={c._id}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col"
          >
            <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{c.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{c.businessName}</p>

              <div className="text-sm text-gray-600 mb-4 space-y-1">
                <p>
                  <span className="font-semibold">Email:</span> {c.email}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {c.phone}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700 mb-4 h-24 overflow-y-auto">
                {c.description || 'No description provided.'}
              </div>

              <p className="text-xs text-gray-400 mt-auto">
                Submitted on {new Date(c.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Consultations;
