import React, { useEffect, useState } from "react";
import axios from "axios";

function Stores() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  
  const storesPerPage = 4;

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://bugi-2.onrender.com/api/stores",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
        setStores(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load store submissions.");
      } finally {
        setLoading(false);
      }
    };
    fetchStores();
  }, []);

  // Filter stores based on search
  const filteredStores = stores.filter((store) =>
    store.businessName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastStore = currentPage * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = filteredStores.slice(indexOfFirstStore, indexOfLastStore);
  const totalPages = Math.ceil(filteredStores.length / storesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading store submissions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-md max-w-md">
          <div className="flex items-center mb-2">
            <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-red-800 font-semibold text-lg">Error</h3>
          </div>
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">E-Commerce Store Submissions</h1>
              <p className="text-gray-600 mt-1">Manage online store and marketplace project requests</p>
            </div>
            <div className="bg-orange-50 px-4 py-2 rounded-lg">
              <p className="text-sm text-gray-600">Total Submissions</p>
              <p className="text-2xl font-bold text-orange-600">{stores.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by business name, owner, email, or description..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Store Cards */}
        {currentStores.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {currentStores.map((store) => (
                <div
                  key={store.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{store.businessName}</h3>
                        <p className="text-orange-100 text-sm mt-1">E-Commerce Store</p>
                      </div>
                      <svg className="h-8 w-8 text-orange-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    {/* Owner Info */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2 font-semibold">Store Owner</p>
                      <p className="text-gray-900 font-semibold text-lg mb-2">{store.fullName}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <svg className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-700 break-words">{store.email}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <svg className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-gray-700">{store.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Business Description */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Business Description</p>
                      <p className="text-gray-800 leading-relaxed">{store.description}</p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200"></div>

                    {/* Store Details Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-orange-50 rounded-lg p-3">
                        <p className="text-xs text-orange-700 uppercase tracking-wide mb-1">Product Count</p>
                        <p className="text-orange-900 font-bold text-lg">{store.estimatedProducts}</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-xs text-blue-700 uppercase tracking-wide mb-1">Timeline</p>
                        <p className="text-blue-900 font-semibold">{store.timeline}</p>
                      </div>
                    </div>

                    {/* Product Assets */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Product Assets Available</p>
                      <p className="text-gray-800 text-sm">{store.productAssets}</p>
                    </div>

                    {/* Payment & Delivery */}
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex items-center mb-1">
                          <svg className="h-4 w-4 text-green-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <p className="text-xs text-green-700 uppercase tracking-wide font-semibold">Payment Methods</p>
                        </div>
                        <p className="text-gray-800 text-sm">{store.paymentMethods}</p>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex items-center mb-1">
                          <svg className="h-4 w-4 text-blue-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <p className="text-xs text-blue-700 uppercase tracking-wide font-semibold">Delivery Regions</p>
                        </div>
                        <p className="text-gray-800 text-sm">{store.deliveryRegions}</p>
                      </div>
                    </div>

                    {/* Branding & Inspiration */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Branding</p>
                        <p className="text-gray-800 text-sm">{store.branding}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Style Inspiration</p>
                        <p className="text-gray-800 text-sm">{store.styleInspiration}</p>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    {store.notes && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-3">
                        <p className="text-xs text-yellow-800 uppercase tracking-wide mb-1 font-semibold">Additional Notes</p>
                        <p className="text-gray-700 text-sm">{store.notes}</p>
                      </div>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <svg className="inline h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      E-Commerce Project
                    </div>
                    <div className="flex gap-3">
                      <button className="text-orange-600 hover:text-orange-800 font-medium text-sm">
                        View Details
                      </button>
                      <button className="text-green-600 hover:text-green-800 font-medium text-sm">
                        Contact Owner
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Showing {indexOfFirstStore + 1} to {Math.min(indexOfLastStore, filteredStores.length)} of {filteredStores.length} submissions
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        currentPage === 1
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                      }`}
                    >
                      Previous
                    </button>
                    
                    <div className="flex gap-1">
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => handlePageChange(index + 1)}
                          className={`px-4 py-2 rounded-lg font-medium transition ${
                            currentPage === index + 1
                              ? "bg-orange-600 text-white"
                              : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        currentPage === totalPages
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No submissions found</h3>
            <p className="text-gray-600">
              {searchTerm ? "Try adjusting your search terms" : "No store submissions available yet"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Stores;