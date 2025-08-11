import React from 'react';
import { Link } from 'react-router-dom';

function AboutCta() {
  return (
    <div className="px-4 md:px-10 py-10 md:py-[60px] text-[#111] font-montserrat max-w-[1400px] mx-auto">
      
      {/* Header Section */}
      <section className="flex flex-row justify-between items-start flex-wrap uppercase font-bold text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] mb-10 gap-4">
        <p className="flex-1 min-w-[150px] leading-tight">
          BUILDING <br /> GREATNESS
        </p>
        <p className="flex-1 min-w-[150px] leading-tight">
          ONE STEP <br /> AT A TIME
        </p>
      </section>

      {/* Text Section */}
      <section className="flex flex-col items-start gap-6">
        <div className="flex-1 min-w-[280px]">
          <p className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-extrabold uppercase mb-5 leading-tight">
            our web  creation journey
          </p>
          <p className="text-[1rem] md:text-[1.1rem] leading-[1.7] max-w-[700px]">
            From discovery to deployment, we guide our clients through a seamless process that turns their vision into a living, breathing website. This approach ensures clarity, creativity, and performance in every phase.
          </p>
        </div>

        <Link
          to="/about/creative-process"
          className="text-[#de5f5e] font-bold text-[1.1rem] underline hover:text-black transition-all duration-300"
        >
          Explore the Creative Process →
        </Link>
      </section>
    </div>
  );
}

export default AboutCta;
