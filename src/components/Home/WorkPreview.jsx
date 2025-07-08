import React from 'react';
import earth from '../../assets/earth.png';
import turs from '../../assets/turs.png';

function WorkPreview() {
  return (
    <div className="w-full">
      {/* Optional Section Title */}
      <section className="px-6 sm:px-10 py-5 text-2xl font-bold text-gray-500 font-[Montserrat] md:text-3xl">
        {/* Title could go here */}
      </section>

      {/* === Section 1 === */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 px-6 sm:px-10 py-12 sm:py-[60px] my-[40px] max-w-[1400px] mx-auto border-b border-[#dcdcdc]">
        {/* Text Content */}
        <div className="w-full lg:flex-1">
          <p className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-black text-[#0c0c0c] mb-4 leading-tight uppercase font-[Montserrat]">
            Forked <br /> up
          </p>
          <p className="text-base sm:text-lg text-[#555] font-medium leading-relaxed max-w-[600px] font-[Montserrat]">
            An online hub that showcases the menu, ambiance, location, and services, allowing customers to explore, book, and connect with the dining experience.
          </p>
        </div>

        {/* Image */}
        <div className="w-full max-w-[550px] transition-transform duration-300 hover:scale-[1.02]">
          <img
            src={earth}
            alt="Forked Up"
            className="w-full h-auto rounded-xl object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </section>

      {/* === Section 2 === */}
      <section className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-10 px-6 sm:px-10 py-12 sm:py-[60px] my-[40px] max-w-[1400px] mx-auto border-b border-[#dcdcdc]">
        {/* Text Content */}
        <div className="w-full lg:flex-1">
          <p className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-black text-[#0c0c0c] mb-4 leading-tight uppercase font-[Montserrat]">
            Upper Room <br /> Sanctuary
          </p>
          <p className="text-base sm:text-lg text-[#555] font-medium leading-relaxed max-w-[600px] font-[Montserrat]">
            A digital platform that shares the church's mission, events, sermons, and ways for people to connect, worship, and grow in faith.
          </p>
        </div>

        {/* Image */}
        <div className="w-full max-w-[550px] transition-transform duration-300 hover:scale-[1.02]">
          <img
            src={turs}
            alt="Upper Room Sanctuary"
            className="w-full h-auto rounded-xl object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </section>
    </div>
  );
}

export default WorkPreview;
