import React, { useEffect, useState } from "react";
import axios from "axios";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://bugi-2.onrender.com/api/portfolios", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        setProjects(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load portfolio submissions.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);


  if (loading)
    return <p className="text-center text-gray-600">Loading portfolio...</p>;
  if (error)
    return <p className="text-center text-red-500 font-semibold">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 pt-36 min-h-[100vh]">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Portfolios
      </h2>

      {projects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.full_name}
              </h3>
              <p className="text-gray-700 mb-1">
                <strong>Email:</strong> {project.email}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Phone:</strong> {project.phone}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Profession:</strong> {project.profession}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Goal:</strong> {project.portfolio_goal}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Work Types:</strong> {project.work_types}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Sections:</strong> {project.sections}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Design Preferences:</strong> {project.design_prefs}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Timeline:</strong> {project.timeline}
              </p>
              <p className="text-gray-700">
                <strong>Notes:</strong> {project.notes}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No portfolios available.
        </p>
      )}
    </div>
  );
}

export default Portfolio;
