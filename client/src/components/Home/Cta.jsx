import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Cta() {
  return (
    <div className="flex flex-col justify-around items-center min-h-[40vh] w-full px-6 sm:px-10 py-10 bg-[#090909] text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-1">
        Let’s Build Something Great Together
      </h2>
      <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-1">
        Ready to turn your ideas into reality? Whether it's a portfolio, business website, or creative concept—I'm here to help you bring it to life.
      </p>
      <a href="/start" 
        className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
        Start a Project <FaArrowRight />
      </a>
    </div>
  );
}

export default Cta;
