import React from 'react';
import maina from '../../assets/kibugi.jpg';
import '../../styles/about/abouthighlight.css';

function AboutHighlight() {
  return (
    <div className="about-highlight">
      <div className="about-highlight-container">
        
        {/* Left Section */}
        <section className="about-highlight-left">
          <p className="about-highlight-left-text">
            A continuous exploration <br /> fueled by a curious mind <br /> 
            <span className='left-text-highlight'>Kibugi Maina</span>
          </p>
        </section>
        
        {/* Right Section */}
        <section className="about-highlight-right">
          <p className="about-highlight-right-text">
  I'm a full-stack developer with experience creating scalable products and user-focused web applications using the MERN and PERN stacks. 
  I've collaborated with individuals, startups, and small to mid-sized businesses to deliver solutions tailored to their unique needs.
  <br /><br />
  Each project is an opportunity to strengthen my expertise in backend architecture and frontend design—while exploring ideas that connect technology,
  design, and problem-solving across fields like mathematics, physics, and the arts.
</p>

          <img
            className="about-highlight-img"
            src={maina}
            alt="Kibugi"
          />
        </section>
      </div>
    </div>
  );
}

export default AboutHighlight;
