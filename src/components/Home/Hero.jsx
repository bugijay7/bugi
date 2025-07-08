import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import john from '../../assets/john.jpg';

function Hero() {
  return (
    <div className="w-full bg-transparent">
      {/* Top Section: Title & Image */}
      <section className="flex flex-col lg:flex-row items-start gap-10 px-6 sm:px-10 py-20 max-w-[1400px] mx-auto">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-6xl lg:text-[6rem] text-[#090909] font-bold leading-none uppercase">
            Creative <br /> Developer
          </h1>

          {/* Image */}
          <figure className="mt-6 w-full h-[200px] sm:h-[300px] lg:h-[25vh] overflow-hidden">
            <img
              src={john}
              alt="Kibugi Maina"
              className="w-full h-full object-cover contrast-[1.1] saturate-[1.3] scale-[1.01]"
            />
          </figure>
        </div>
      </section>

      {/* Bottom Section: Icon, Description, Name */}
      <section className="flex flex-col md:flex-row items-start justify-between gap-10 px-6 sm:px-10 pb-20 max-w-[1400px] mx-auto">
        {/* Arrow Icon */}
        <div className="text-[#090909]">
          <FaArrowDown className="text-5xl sm:text-7xl" />
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-[#090909] max-w-md uppercase">
          Turning bold design concepts into interactive digital experiences for designers and agencies.
        </p>

        {/* Name */}
        <h2 className="text-4xl sm:text-5xl lg:text-[5rem] font-bold text-[#090909] uppercase text-right leading-tight">
          Kibugi <br /> Maina
        </h2>
      </section>
    </div>
  );
}

export default Hero;
