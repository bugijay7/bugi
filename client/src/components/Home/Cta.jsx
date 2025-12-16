import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Cta() {
  return (
    <div className="flex flex-col justify-around items-center md:min-h-[40vh] w-full px-6 sm:px-10 py-10 bg-[#263627] text-white text-center ">
      <h2 className="text-xl md:text-4xl font-bold md-0.5 md:mb-1">
        Let’s Build Something Great Together
      </h2>
      <p className="text-xs s
      md:text-lg text-gray-300 max-w-2xl mb-0.5 md:mb-1 py-2">
        Ready to turn your ideas into reality? Whether it's a portfolio, business website, or creative concept—I'm here to help you bring it to life.
      </p>
      <a href="/start" 
        className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white text-xs md:text-sm font-semibold py-3 px-6 rounded-full transition-all duration-300 mt-2">
        Start a Project <FaArrowRight />
      </a>
    </div>
  );
}

export default Cta;
