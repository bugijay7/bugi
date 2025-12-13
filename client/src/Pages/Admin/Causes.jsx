import React, { useEffect, useState } from "react";
import axios from "axios";

function Causes() {
  const [causes, setCauses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const res = await axios.get("https://bugi-2.onrender.com/api/causes");
        setCauses(res.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCauses();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500 text-lg font-medium">
        Loading causes...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 font-semibold text-lg">
        Error: {error}
      </div>
    );

  // Vibrant gradient colors for card headers
  const colors = [
    "from-red-400 to-pink-400",
    "from-green-400 to-teal-400",
    "from-blue-400 to-indigo-400",
    "from-yellow-400 to-orange-400",
    "from-purple-400 to-pink-400",
    "from-pink-300 to-red-300",
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-28 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
          Our Causes
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          Explore the organizations and missions we support
        </p>
      </div>

      {causes.length > 0 ? (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
          {causes.map((cause, index) => {
            const color = colors[index % colors.length]; // rotate colors
            return (
              <div
                key={cause.id}
                className="flex-1 min-w-[300px] bg-white rounded-2xl shadow-lg border border-gray-200 transform hover:scale-105 transition duration-300"
              >
                {/* Card Header with gradient */}
                <div
                  className={`bg-gradient-to-r ${color} rounded-t-2xl p-5 text-white`}
                >
                  <h2 className="text-2xl font-bold">{cause.org_name}</h2>
                  <p className="text-sm mt-1">
                    Contact: {cause.contact_person} ({cause.email}, {cause.phone})
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col gap-3">
                  <p>
                    <span className="font-semibold text-gray-700">Mission:</span>{" "}
                    {cause.mission}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Audience:</span>{" "}
                    {cause.target_audience}
                  </p>
                  {cause.sections && (
                    <p>
                      <span className="font-semibold text-gray-700">Sections:</span>{" "}
                      {Array.isArray(cause.sections) ? cause.sections.join(", ") : cause.sections}
                    </p>
                  )}
                  {cause.branding && (
                    <p>
                      <span className="font-semibold text-gray-700">Branding:</span>{" "}
                      {cause.branding}
                    </p>
                  )}
                  {cause.inspiration && (
                    <p>
                      <span className="font-semibold text-gray-700">Inspiration:</span>{" "}
                      {cause.inspiration}
                    </p>
                  )}
                  {cause.timeline && (
                    <p>
                      <span className="font-semibold text-gray-700">Timeline:</span>{" "}
                      {cause.timeline}
                    </p>
                  )}
                  {cause.extras && (
                    <p>
                      <span className="font-semibold text-gray-700">Extras:</span>{" "}
                      {cause.extras}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-20">
          No causes available at the moment.
        </p>
      )}
    </div>
  );
}

export default Causes;
