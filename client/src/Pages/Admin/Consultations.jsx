import React, { useEffect, useState } from "react";
import axios from "axios";

function Consultations() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/consultations");
        setConsultations(res.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConsultations();
  }, []);

  if (loading)
    return <p className="text-center text-gray-600 pt-36">Loading consultations...</p>;
  if (error)
    return (
      <p className="text-center text-red-500 font-semibold pt-36">
        Error: {error}
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 pt-36 min-h-[100vh]">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 uppercase text-center">
        All Consultations
      </h2>

      {consultations.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">#</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Business</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Description</th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map((consult, index) => (
                <tr
                  key={consult.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3 text-sm text-gray-700">{index + 1}</td>
                  <td className="p-3 text-sm text-gray-900 font-medium">{consult.name}</td>
                  <td className="p-3 text-sm text-gray-700">{consult.business_name}</td>
                  <td className="p-3 text-sm text-gray-700">{consult.email}</td>
                  <td className="p-3 text-sm text-gray-700">{consult.phone}</td>
                  <td className="p-3 text-sm text-gray-700">{consult.description}</td>
                  <td className="p-3 text-sm text-gray-500">
                    {new Date(consult.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No consultations found.</p>
      )}
    </div>
  );
}

export default Consultations;
