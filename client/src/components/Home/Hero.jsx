import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero11.jpg";

function Hero() {
  return (
    <section
      className="w-full min-h-[88vh] md:min-h-screen bg-cover bg-center flex flex-col justify-end"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Hero Content */}
      <div className="flex flex-col items-end text-right gap-4
                      w-11/12 md:w-9/12 mx-auto
                      pb-6 md:pb-10">
        
        <h3 className="text-4xl md:text-8xl font-extrabold text-[#f9f7f3]">
          Yohan Labs
        </h3>

        <p className="text-xs md:text-xl text-[#fbf9f6] leading-relaxed max-w-4xl">
          At Yohan Labs, we help businesses unlock their full potential online.
          From modern websites that attract and convert, to scalable backend
          systems and seamless integrations — we craft digital solutions
          designed to grow your brand and deliver results.
        </p>

        <div className="flex gap-3 pt-3">
          <Link to="/pricings">
            <button className="px-3 py-2 text-xs md:text-base font-semibold rounded
                               border border-[#1c1205] bg-[#ffe4c4]
                               text-black hover:bg-[#fcd9b0] transition">
              Get Started
            </button>
          </Link>

          <Link to="/services">
            <button className="px-3 py-2 text-xs md:text-base font-semibold rounded
                               border border-[#1c1205] bg-[#ffe4c4]
                               text-black hover:bg-[#fcd9b0] transition">
              What We Do
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
