import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaPaintBrush, FaSearch, FaArrowRight, FaHandshake, FaTools } from 'react-icons/fa';
import heroImg from '../../assets/web-expert.jpeg';

function Highlights() {
  return (
    <div className="bg-gray-200 text-black mt-20" id="some">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-36">

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar Image */}
          <aside className="w-full lg:w-1/3 flex-shrink-0">
            <img
              src={heroImg}
              alt="Web Developer Kibugi"
              className="w-full object-cover rounded-xl shadow-lg"
            />
          </aside>

          {/* Main Content */}
          <section className="w-full lg:w-2/3 flex flex-col gap-8">

            {/* Intro */}
            <div>
              <h2 className="text-4xl sm:text-4xl font-bold uppercase mb-4">
                👋Hello  I’m Kibugi A Website Developer
              </h2>
              <p className="text-base sm:text-lg text-black">
                I help <strong className='text-teal-600 underline'>people</strong>, <strong className='text-teal-600 underline'> brands</strong> and <strong className='text-teal-600 underline'>startups</strong> grow online by building websites
                 that not only look good but perform well—combining <strong className='text-red-800'>clean design</strong>, 
                 <strong className='text-green-800'> solid development</strong> and <strong className='text-amber-700'>smart SEO</strong>.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {/* Web Design */}
              <div className="bg-gray-100 rounded-lg p-4 shadow hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <FaPaintBrush className="text-2xl text-indigo-600" />
                  <h3 className="text-lg font-semibold">Creative Web Design</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Clean, responsive, and user-focused interfaces. Design systems, accessibility, and mobile-first thinking.
                </p>
              </div>

              {/* Web Development */}
              <div className="bg-gray-100 rounded-lg p-4 shadow hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <FaCode className="text-2xl text-green-600" />
                  <h3 className="text-lg font-semibold">Web Development</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Modern frameworks like React, Next.js, and Vite to bring your site to life — fast, dynamic, and scalable for growth.
                </p>
              </div>

              {/* SEO */}
              <div className="bg-gray-100 rounded-lg p-4 shadow hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <FaSearch className="text-2xl text-yellow-500" />
                  <h3 className="text-lg font-semibold">SEO & Performance</h3>
                </div>
                <p className="text-sm text-gray-700">
                  I optimize for search engines and speed — from clean semantic markup to core web vitals and metadata.
                </p>
              </div>

              {/* Maintenance */}
              <div className="bg-gray-100 rounded-lg p-4 shadow hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <FaTools className="text-2xl text-pink-500" />
                  <h3 className="text-lg font-semibold">Site Maintenance</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Ongoing updates, backups, and security checks to keep your site running smoothly and safely at all times.
                </p>
              </div>

              {/* Analytics */}
              <div className="bg-gray-100 rounded-lg p-4 shadow hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <FaSearch className="text-2xl text-blue-500" />
                  <h3 className="text-lg font-semibold">Analytics & Tracking</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Integration with Google Analytics and other tools to track visitor behavior and improve site performance.
                </p>
              </div>

              {/* Consultation */}
              <div className="bg-gray-100 rounded-lg p-4 shadow hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <FaHandshake className="text-2xl text-red-500" />
                  <h3 className="text-lg font-semibold">1-on-1 Consultation</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Let’s talk strategy. I’ll help you make informed choices about your online presence and digital goals.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4">
              <Link
                to="/about/creative-process"
                className="inline-flex items-center gap-2 text-sm sm:text-base text-indigo-700 font-semibold underline hover:text-black transition"
              >
                Learn more about my process <FaArrowRight className="mt-[2px]" />
              </Link>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
