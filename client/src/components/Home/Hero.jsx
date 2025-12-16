import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero11.jpg"; // Make sure to import your hero image

function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex flex-col justify-end"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Hero Content */}
      <div className="flex flex-col items-end text-right gap-6 w-9/12 mx-auto pb-5 md:pb-8 lg:pb-8">
        {/* Main Heading */}
        <h3 className="text-4xl md:text-8xl font-extrabold text-[#f9f7f3]">
          Yohan Labs
        </h3>

        {/* Description */}
        <p className="text-sm md:text-xl text-[#fbf9f6] leading-relaxed max-w-4xl">
          At Yohan Labs, we help businesses unlock their full potential online.
          From modern websites that attract and convert, to scalable backend
          systems and seamless integrations — we craft digital solutions
          designed to grow your brand and deliver results.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 pt-5">
          <Link to="/pricings">
            <button className="px-3 py-2 text-sm md:text-base font-semibold rounded border border-[#1c1205] bg-[#ffe4c4] text-black hover:bg-[#fcd9b0] transition duration-300">
              Get Started
            </button>
          </Link>

          <Link to="/services">
            <button className="px-3 py-2 text-sm md:text-base font-semibold rounded border border-[#1c1205] bg-[#ffe4c4] text-black hover:bg-[#fcd9b0] transition duration-300">
              What We Do
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
