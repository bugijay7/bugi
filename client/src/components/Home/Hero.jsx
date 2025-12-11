import React from "react";
import { Link } from "react-router-dom";
import "../../styles/hero.css";

function Hero() {
  return (
    <section className="hero-container"> 
      
      
     

      {/* Content */}
      <section className="hero-content">
        <div className="hero-text">
         

          <p>
            modern  web 
            <br />
             rethought."
          </p>

         
        </div>

        {/* ✅ Section 1: Hero Content */}
                <div className="w-full flex flex-col items-end justify-end text-right gap-6 pt-[360px]">
                  <h3 className="text-4xl md:text-8xl font-extrabold text-[#f9f7f3]">
                    Yohan Labs
                  </h3>
                  <p className="text-sm md:text-xl text-[#fbf9f6] leading-relaxed max-w-3xl">
                    At Yohan Labs, we help businesses unlock their full potential online.
                    From modern websites that attract and convert, to scalable backend
                    systems and seamless integrations — we craft digital solutions
                    designed to grow your brand and deliver results.
                  </p>
                  <div className="hero-buttons">
            <Link to="/pricings">
              <button className="btn-primary">Get Started</button>
            </Link>

            <Link to="/services">
              <button className="btn-secondary">What We Do</button>
            </Link>
          </div>
                </div>
      </section>
    </section>
  );
}

export default Hero; 
