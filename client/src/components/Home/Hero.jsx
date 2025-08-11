import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import john from '../../assets/john.jpg';

function Hero() {
 

  return (
    <div className="w-full bg-gray-200 text-black mt-20">
      {/* Top Section: Title & Image */}
      <section className="flex flex-col lg:flex-row items-center gap-10 px-6 sm:px-10 py-20 max-w-[1400px] mx-auto">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-2xl lg:text-[6rem] font-extrabold leading-none uppercase text-black">
            interactive web<br /> Solutions
          </h1>

          {/* Image */}
          <figure className="mt-6 w-full h-[200px] sm:h-[300px] lg:h-[25vh] overflow-hidden rounded-md">
            <img
              src={john}
              alt="Kibugi Maina"
              className="w-full h-full object-cover contrast-[1.1] saturate-[1.3] scale-[1.01] brightness-110"
            />
          </figure>
        </div>
      </section>

      <section className="flex flex-row items-center justify-between gap-4 sm:gap-6 px-4 sm:px-8 pb-12 max-w-[1400px] mx-auto flex-wrap sm:flex-nowrap">
        {/* Arrow Icon (Left) */}
       <div className="text-black flex-shrink-0">
  <HashLink
    smooth
    to="#some"
   onClick={(e) => {
  const target = document.querySelector('#some');
  if (!target) {
    e.preventDefault(); // prevents default jump behavior
    setTimeout(() => {
      const delayedTarget = document.querySelector('#some');
      if (delayedTarget) {
        delayedTarget.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}}
  >
     <h2 className="text-xl sm:text-2xl lg:text-[2.5rem] uppercase leading-tight text-[#090909] font-extrabold underline">
              Know <br className="hidden sm:block" /> me
            </h2>
  </HashLink>
</div>



        {/* Description (Center) */}
        <div className="flex-grow text-left sm:text-left">
          <p className="text-[10px] text-left sm:text-xs lg:text-base sm:max-w-md max-w-[100px] mx-auto uppercase text-black font-bold">
            what is interactive web solutions and <Link to="/website"><strong className='text-red-400'>why</strong></Link> you need a website.
          </p>
        </div>

        {/* Name (Right) */}
        <div className="flex-shrink-0 text-right">
          <Link to="/about">
            <h2 className="text-xl sm:text-2xl lg:text-[2.5rem] uppercase leading-tight text-[#090909] font-extrabold underline">
              what <br className="hidden sm:block" /> i do
            </h2>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hero;
