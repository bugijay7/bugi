import React, { useEffect, useState } from "react";
import axios from "axios";

function Causes() {
  const [causes, setCauses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  
  const causesPerPage = 4;

  useEffect(() => {
    const fetchCauses = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://bugi-2.onrender.com/api/causes",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
        setCauses(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load causes submissions.");
      } finally {
        setLoading(false);
      }
    };
    fetchCauses();
  }, []);

  // Filter causes based on search
  const filteredCauses = causes.filter((cause) =>
    cause.org_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cause.contact_person?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cause.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cause.mission?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCause = currentPage * causesPerPage;
  const indexOfFirstCause = indexOfLastCause - causesPerPage;
  const currentCauses = filteredCauses.slice(indexOfFirstCause, indexOfLastCause);
  const totalPages = Math.ceil(filteredCauses.length / causesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading causes submissions...</p>
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
              <h1 className="text-3xl font-bold text-gray-900 pt-30">Causes & Organizations</h1>
              <p className="text-gray-600 mt-1">Manage nonprofit and cause-based project requests</p>
            </div>
            <div className="bg-green-50 px-4 py-2 rounded-lg">
              <p className="text-sm text-gray-600">Total Submissions</p>
              <p className="text-2xl font-bold text-green-600">{causes.length}</p>
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
              placeholder="Search by organization, contact person, email, or mission..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Causes Cards */}
        {currentCauses.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {currentCauses.map((cause) => (
                <div
                  key={cause.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">{cause.org_name}</h3>
                        <p className="text-green-100 text-sm mt-1">Nonprofit Organization</p>
                      </div>
                      <svg className="h-8 w-8 text-green-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    {/* Contact Info */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2 font-semibold">Contact Person</p>
                      <p className="text-gray-900 font-semibold text-lg mb-2">{cause.contact_person}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <svg className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-700 break-words">{cause.email}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <svg className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-gray-700">{cause.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Mission Statement */}
                    <div className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-4">
                      <p className="text-xs text-green-700 uppercase tracking-wide mb-2 font-semibold">Mission Statement</p>
                      <p className="text-gray-800 leading-relaxed">{cause.mission}</p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200"></div>

                    {/* Target Audience */}
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Target Audience</p>
                      <p className="text-gray-800">{cause.target_audience}</p>
                    </div>

                    {/* Sections */}
                    {cause.sections && (
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Requested Sections</p>
                        <div className="flex flex-wrap gap-2">
                          {(Array.isArray(cause.sections) ? cause.sections : cause.sections.split(',')).map((section, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                            >
                              {section.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Additional Details */}
                    <div className="grid grid-cols-1 gap-3">
                      {cause.branding && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Branding Materials</p>
                          <p className="text-gray-800 text-sm">{cause.branding}</p>
                        </div>
                      )}

                      {cause.inspiration && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Design Inspiration</p>
                          <p className="text-gray-800 text-sm">{cause.inspiration}</p>
                        </div>
                      )}

                      {cause.timeline && (
                        <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                          <div>
                            <p className="text-xs text-blue-700 uppercase tracking-wide mb-1">Project Timeline</p>
                            <p className="text-blue-900 font-semibold">{cause.timeline}</p>
                          </div>
                          <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      )}

                      {cause.extras && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-3">
                          <p className="text-xs text-yellow-800 uppercase tracking-wide mb-1 font-semibold">Additional Notes</p>
                          <p className="text-gray-700 text-sm">{cause.extras}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <svg className="inline h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Nonprofit Project
                    </div>
                    <div className="flex gap-3">
                      <button className="text-green-600 hover:text-green-800 font-medium text-sm">
                        View Details
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        Contact Org
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
                    Showing {indexOfFirstCause + 1} to {Math.min(indexOfLastCause, filteredCauses.length)} of {filteredCauses.length} submissions
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
                              ? "bg-green-600 text-white"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No submissions found</h3>
            <p className="text-gray-600">
              {searchTerm ? "Try adjusting your search terms" : "No cause submissions available yet"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Causes;