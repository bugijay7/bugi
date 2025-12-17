import React, { useEffect, useState } from "react";
import axios from "axios";

function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://bugi-2.onrender.com/api/brands", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        setBrands(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load brand submissions.");
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading brand submissions...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 font-semibold">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 pt-28 px-4 sm:px-8 lg:px-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Brand Submissions</h1>
        <p className="text-gray-600 mt-2">
          Review all brand form submissions from clients
        </p>
      </div>

      {/* Grid of Brand Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Accent bar */}
            <div className="h-1 bg-gradient-to-r from-red-500 to-pink-500"></div>

            <div className="p-6 flex flex-col flex-grow">
              {/* Brand Header */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-red-500 transition">
                {brand.brandName}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{brand.fullName}</p>

              {/* Contact Info */}
              <div className="text-sm text-gray-600 mb-4 space-y-1">
                <p>
                  <span className="font-semibold">Email:</span> {brand.email}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {brand.phone}
                </p>
              </div>

              {/* Description */}
              <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700 mb-4 h-24 overflow-y-auto">
                {brand.brandDescription || "No description provided."}
              </div>

              {/* Details */}
              <div className="text-gray-700 text-sm space-y-2 mb-4">
                <p>
                  <span className="font-semibold">Target Audience:</span>{" "}
                  {brand.targetAudience}
                </p>
                <p>
                  <span className="font-semibold">Website Goal:</span>{" "}
                  {brand.websiteGoal}
                </p>
                <p>
                  <span className="font-semibold">Sections:</span>{" "}
                  {brand.siteSections}
                </p>
                <p>
                  <span className="font-semibold">Assets:</span>{" "}
                  {brand.brandAssets}
                </p>
                <p>
                  <span className="font-semibold">Style Inspiration:</span>{" "}
                  {brand.styleInspiration}
                </p>
              </div>

              {/* Features Tags */}
              <div className="mb-4">
                <span className="font-semibold text-sm block mb-2">
                  Requested Features
                </span>
                <div className="flex flex-wrap gap-2">
                  {brand.features?.length > 0 ? (
                    brand.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-400">
                      No features selected
                    </span>
                  )}
                </div>
              </div>

              {/* Notes */}
              <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700 mb-4 flex-grow">
                <span className="font-semibold block mb-1">Notes</span>
                {brand.notes || "No extra notes"}
              </div>

              {/* Submission Date */}
              <p className="text-xs text-gray-400 mt-auto">
                Submitted on {new Date(brand.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
