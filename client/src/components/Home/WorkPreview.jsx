import React from 'react';
import earth from '../../assets/earth.jpeg';
import portfolio from '../../assets/portfolio.JPG';

function WorkPreview() {
  return (
    <div className="w-full min-h-[70vh] bg-gray-200 text-black">
      {/* Optional Section Title */}
      <section className="px-6 sm:px-10 py-5 text-2xl font-bold text-gray-800 font md:text-3xl max-w-[1400px] mx-auto">
        {/* Title (optional, currently empty) */}
      </section>

      {/* === Section 1 === */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 px-6 sm:px-10 py-12 sm:py-[60px] my-[40px] max-w-[1400px] mx-auto">
        {/* Text Content */}
        <div className="w-full lg:flex-1">
          <p className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-black text-black mb-4 leading-tight uppercase font">
            Forked <br /> up
          </p>
          <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed max-w-[600px] font">
            An online hub that showcases the menu, ambiance, location, and services, allowing customers to explore, book, and connect with the dining experience.
          </p>
        </div>

        {/* Image */}
        <div className="w-full max-w-[550px] transition-transform duration-300 hover:scale-[1.02]">
          <img
            src={earth}
            alt="Forked Up"
            className="w-full h-auto rounded-xl object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      </section>

      {/* === Section 2 === */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 px-6 sm:px-10 py-12 sm:py-[60px] my-[40px] max-w-[1400px] mx-auto">
        {/* Text Content */}
        <div className="w-full lg:flex-1">
          <p className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-black text-black mb-4 leading-tight uppercase font">
            Personal <br /> blog
          </p>
          <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed max-w-[600px] font">
            A personal hub that highlights your work, skills, personality, and services—making it easy for clients to explore your projects, get to know you, and reach out with confidence.
          </p>
        </div>

        {/* Image */}
        <div className="w-full max-w-[550px] transition-transform duration-300 hover:scale-[1.02]">
          <img
            src={portfolio}
            alt="reuben portfolio"
            className="w-full h-auto rounded-xl object-cover shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      </section>
    </div>
  );
}

export default WorkPreview;
