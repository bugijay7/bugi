import React from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaPaintBrush,
  FaSearch,
  FaHandshake,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

function Highlights() {
  const problems = [
    {
      title: "Outdated or Unprofessional Website",
      text: "Clean, modern, mobile-friendly designs that instantly build trust and credibility.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Slow or Unresponsive Experience",
      text: "Fast, scalable development that works smoothly across all devices.",
      icon: <FaCode />,
    },
    {
      title: "Hard to Find on Google",
      text: "SEO-focused builds and performance tuning to improve visibility and rankings.",
      icon: <FaSearch />,
    },
    {
      title: "Frequent Website Issues",
      text: "Ongoing maintenance, backups, and security for long-term stability.",
      icon: <FaTools />,
    },
    {
      title: "No Insight Into What Works",
      text: "Analytics integration with data-driven improvements for smarter growth.",
      icon: <FaSearch />,
    },
    {
      title: "Unclear Digital Strategy",
      text: "1-on-1 consultations with clear guidance from idea to launch.",
      icon: <FaHandshake />,
    },
  ];

  return (
    <section className="bg-[#d9b17f] py-24">
      <div className="max-w-[1200px] mx-auto px-6 w-full">

        {/* Content */}
        <div className="flex flex-col gap-20">

          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {problems.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-teal-700">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="text-sm md:text-xl font-bold text-[#2a3b2b]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-900 text-xs md:text-sm leading-relaxed max-w-md">
                  {item.text}
                </p>

                <div className="border-t border-gray-700 w-16"></div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-start">
            <Link
              to="/start"
              className="inline-flex items-center gap-3 px-8 py-4
                         bg-indigo-600 text-white text-xs md:text-sm
                         font-semibold rounded-lg shadow-md
                         hover:bg-indigo-700 transition duration-300"
            >
              Let’s Solve Your Website Problems <FaArrowRight />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Highlights;
