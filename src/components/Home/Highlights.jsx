import React from 'react';
import { Link } from 'react-router-dom';

function Highlights() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start px-6 sm:px-10 pt-12 w-full max-w-[1400px] mx-auto">
      {/* Left Section (reserved for future content) */}
      <section className="hidden lg:block w-full lg:w-1/4 h-full">
        {/* Left-side content (e.g. sidebar, image, or vertical nav) can go here */}
      </section>

      {/* Right Section */}
      <section className="w-full lg:w-[70%] flex flex-col justify-start items-start gap-12">
        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-[#090909] leading-relaxed font-semibold">
          I'M PASSIONATE ABOUT BUILDING FOR THE WEB. I LOVE WORKING AT THE INTERSECTION OF 
          CREATIVITY AND CLEAN, USER-FRIENDLY INTERFACES — CRAFTING SEAMLESS AND ENGAGING DIGITAL EXPERIENCES.<br /><br />

          WHEN I'M NOT CODING OR EXPLORING NEW TOOLS AND FRAMEWORKS, YOU’LL PROBABLY FIND ME GAMING OR WATCHING FOOTBALL.<br /><br />

          OVER THE YEARS, I'VE WORKED CLOSELY WITH PRODUCT TEAMS — TAKING IDEAS FROM CONCEPT TO LAUNCH WHILE SHAPING INTUITIVE, HIGH-QUALITY SOLUTIONS.  
          MY FOCUS IS ON SOLVING REAL PRODUCT CHALLENGES AND CREATING POLISHED, USABLE WEB EXPERIENCES THAT FEEL AS GOOD AS THEY LOOK.
        </p>

        {/* Two Column Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6 w-full">
          <section className="text-sm sm:text-base font-semibold text-[#090909] max-w-full md:max-w-[40%]">
            A blend of UI design and <br /> Web development
          </section>

          <section className="text-sm sm:text-base text-[#090909] font-normal leading-relaxed max-w-full md:max-w-[60%]">
            With a foundation in design, I collaborate closely with creative teams to craft websites and microsites for both companies and individuals.  
            Over the years, I've contributed to various digital products—working alongside teams to bring ideas to life with a strong focus on detail and usability.  
            My background in UI and design implementation helps me transform complex product requirements into seamless, visually compelling experiences.

            I prioritize simplicity, clarity, and performance in everything I build.  
            Whether it's turning intricate designs into responsive, high-quality interfaces or refining user journeys for better interaction, I approach each project with focus and creativity.  
            I’m always exploring new tools and technologies that elevate what's possible on the web.  
            More than just building visuals, I care deeply about accessibility, usability, and speed—ensuring every site is inclusive, intuitive, and fast-loading.
          </section>
        </div>

        {/* Link */}
        <Link
          to="/about"
          className="text-sm sm:text-base text-[#090909] underline font-semibold transition-colors duration-300 hover:text-gray-700"
        >
          More about me and services
        </Link>
      </section>
    </div>
  );
}

export default Highlights;
