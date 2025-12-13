import React, { useEffect, useState } from "react";
import axios from "axios";

function Stores() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await axios.get("https://bugi-2.onrender.com/api/stores");
        setStores(res.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500 text-lg font-medium">
        Loading store submissions...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 font-semibold text-lg">
        Error: {error}
      </div>
    );

  // Color palette for card headers
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
          Store Form Submissions
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          All e-commerce store submissions at a glance
        </p>
      </div>

      {stores.length > 0 ? (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
          {stores.map((store, index) => {
            const color = colors[index % colors.length];
            return (
              <div
                key={store.id}
                className="flex-1 min-w-[300px] bg-white rounded-2xl shadow-lg border border-gray-200 transform hover:scale-105 transition duration-300"
              >
                {/* Card Header with gradient */}
                <div
                  className={`bg-gradient-to-r ${color} rounded-t-2xl p-5 text-white`}
                >
                  <h2 className="text-2xl font-bold">{store.businessName}</h2>
                  <p className="text-sm mt-1">
                    Owner: {store.fullName} ({store.email}, {store.phone})
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col gap-3 text-gray-700">
                  <p>
                    <span className="font-semibold text-gray-800">Description:</span>{" "}
                    {store.description}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Estimated Products:</span>{" "}
                    {store.estimatedProducts}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Product Assets:</span>{" "}
                    {store.productAssets}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Payment Methods:</span>{" "}
                    {store.paymentMethods}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Delivery Regions:</span>{" "}
                    {store.deliveryRegions}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Branding:</span>{" "}
                    {store.branding}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Style Inspiration:</span>{" "}
                    {store.styleInspiration}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Timeline:</span>{" "}
                    {store.timeline}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Notes:</span>{" "}
                    {store.notes || "—"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-20">
          No store submissions available at the moment.
        </p>
      )}
    </div>
  );
}

export default Stores;
