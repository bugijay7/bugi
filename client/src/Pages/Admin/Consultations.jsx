import React, { useEffect, useState } from "react";
import axios from "axios";

function Consultations() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://bugi-2.onrender.com/api/causes", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        setConsultations(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load consultations.");
      } finally {
        setLoading(false);
      }
    };

    fetchConsultations();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading consultations...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 font-semibold">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 pt-28 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Consultations
        </h1>
        <p className="text-gray-500">
          Click a message to read full details
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                {["#", "Client", "Business", "Phone", "Message", "Date"].map(
                  (head) => (
                    <th
                      key={head}
                      className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase"
                    >
                      {head}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {consultations.map((consult, index) => (
                <tr
                  key={consult._id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {consult.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {consult.email}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {consult.businessName || "—"}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {consult.phone}
                  </td>

                  <td
                    className="px-6 py-4 text-sm text-blue-600 cursor-pointer hover:underline"
                    onClick={() => setSelected(consult)}
                  >
                    View message
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(consult.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg w-full rounded-xl shadow-xl p-6 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-2">
              {selected.name}
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              {selected.email} • {selected.phone}
            </p>

            <div className="bg-gray-50 p-4 rounded-lg text-gray-700 whitespace-pre-wrap">
              {selected.description}
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Submitted on{" "}
              {new Date(selected.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Consultations;
