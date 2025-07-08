import React from 'react';
import kashio from '../../assets/kashio.png';

function AboutPreview() {
  return (
    <div className="px-4 md:px-10 py-10 md:py-[60px] text-[#111] font-montserrat max-w-[1400px] mx-auto">
      
      {/* Header Section */}
     <section className="flex flex-row justify-between items-start flex-wrap uppercase font-bold text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] mb-10 gap-4">
  <p className="flex-1 min-w-[150px] leading-tight">
    SEE LATEST <br /> PROJECTS
  </p>
  <p className="flex-1 min-w-[150px] leading-tight">
    CREATIVE <br /> DEVELOPMENT
  </p>
</section>


      {/* Project Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-[40px] md:gap-[60px]">
        
        {/* Project Text Info */}
        <div className="flex-1 min-w-[280px]">
          <p className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-extrabold uppercase mb-5 leading-tight">
            kashio <br /> bubbles
          </p>
          <p className="text-[1rem] md:text-[1.1rem] leading-[1.7] max-w-[600px]">
            A digital platform that shares the church's mission, events, sermons, and ways for people to connect, worship, and grow in faith.
          </p>
        </div>

        {/* Project Image */}
        <div className="flex-1 min-w-[280px] w-full max-w-[550px]">
          <img
            src={kashio}
            alt="Kashio Bubbles Preview"
            className="w-full rounded-[16px] object-cover shadow-[0_12px_32px_rgba(0,0,0,0.2)] hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
          />
        </div>

      </section>
    </div>
  );
}

export default AboutPreview;
