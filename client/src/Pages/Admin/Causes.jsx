import React, { useEffect, useState } from "react";
import axios from "axios";

function Causes() {
  const [causes, setCauses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/causes");
        setCauses(res.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCauses();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading causes...</p>;
  if (error) return <p className="text-center text-red-500 font-semibold">Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 pt-36 min-h-[100vh]">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Causes</h2>

      {causes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{cause.org_name}</h3>
              <p className="text-gray-700 mb-2">
                <strong>Contact:</strong> {cause.contact_person} ({cause.email}, {cause.phone})
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Mission:</strong> {cause.mission}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Audience:</strong> {cause.target_audience}
              </p>
              {cause.sections && (
                <p className="text-gray-700 mb-2">
                  <strong>Sections:</strong> {Array.isArray(cause.sections) ? cause.sections.join(", ") : cause.sections}
                </p>
              )}
              {cause.branding && (
                <p className="text-gray-700 mb-2">
                  <strong>Branding:</strong> {cause.branding}
                </p>
              )}
              {cause.inspiration && (
                <p className="text-gray-700 mb-2">
                  <strong>Inspiration:</strong> {cause.inspiration}
                </p>
              )}
              {cause.timeline && (
                <p className="text-gray-700 mb-2">
                  <strong>Timeline:</strong> {cause.timeline}
                </p>
              )}
              {cause.extras && (
                <p className="text-gray-700">
                  <strong>Extras:</strong> {cause.extras}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No causes available at the moment.</p>
      )}
    </div>
  );
}

export default Causes;
