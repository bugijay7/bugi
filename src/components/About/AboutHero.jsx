import React from 'react';
import kibugi from '../../assets/maina.jpeg';

function AboutHero() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="text-left w-full max-w-[1400px] flex flex-col items-start justify-around gap-10">
        {/* Title */}
        <p className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-extrabold leading-none uppercase">
          PASSIONATE <br /> CREATIVE <br /> DEVELOPER
        </p>

        {/* Image */}
        <img
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-[800px] h-auto rounded-[10px] shadow-md"
          src={kibugi}
          alt="Kibugi Maina"
        />

        {/* Location Text */}
        <p className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold leading-none uppercase">
          BASED IN <br /> NAIROBI
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
