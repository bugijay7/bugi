import React from "react";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Admin Dashboard
        </h1>

        <nav className="flex flex-col gap-4">
          <Link
            to="/admin/consultations"
            className="px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-medium shadow-sm transition"
          >
            📋 View Consultations
          </Link>
          <Link
            to="/admin/brands"
            className="px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-medium shadow-sm transition"
          >
            🏷️ Manage Brands
          </Link>
          <Link
            to="/admin/causes"
            className="px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-medium shadow-sm transition"
          >
            🌍 View Causes
          </Link>
          <Link
            to="/admin/portfolio"
            className="px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-medium shadow-sm transition"
          >
            🖼️ Manage Portfolio
          </Link>
          <Link
            to="/admin/stores"
            className="px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-medium shadow-sm transition"
          >
            🏬 View Stores
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default AdminHome;
