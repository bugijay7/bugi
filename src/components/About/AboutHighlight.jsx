import React from 'react';
import maina from '../../assets/kibugi.jpg';

function AboutHighlight() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      <div className="text-left w-full max-w-[1400px] flex flex-col md:flex-row items-start justify-between gap-10">
        
        {/* Left Section */}
        <section className="w-full md:w-[35%]">
          <p className="text-[1.2rem] md:text-[1.3rem] leading-[1.7] font-bold max-w-[600px]">
            A continuous exploration <br /> fueled by a curious mind
          </p>
        </section>
        
        {/* Right Section */}
        <section className="w-full md:w-[60%] text-left">
          <p className="text-[1rem] md:text-[1.2rem] leading-[1.7] font-medium mb-6 max-w-[700px]">
            I'm a full-stack developer with years of experience building scalable products and user-focused web applications using the MERN and PERN stacks. 
            I've worked with individuals and cross-functional teams to deliver solutions for startups, SMEs, 
            and global companies including Wise, Google, Interswitch, and Intelia.
            <br /><br />
            Each project is a chance to deepen my understanding of both backend architecture 
            and frontend design—while learning from concepts that intersect with technology,
            design, and problem-solving across fields like mathematics, physics, and the arts.
          </p>

          <img
            className="w-full md:w-[90%] h-auto rounded-[10px] shadow-md"
            src={maina}
            alt="Kibugi"
          />
        </section>
      </div>
    </div>
  );
}

export default AboutHighlight;
