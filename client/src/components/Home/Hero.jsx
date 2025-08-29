import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../../assets/hero-video.mp4";

function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <section className="relative z-10 flex items-center justify-evenly min-h-screen px-4 sm:px-6 text-center text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-orange-500">Interactive</span> Web Solutions
            for local challenges
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
            "Your website should be your most reliable team member{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            always ready,{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            always working."
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
            <Link to="/pricings">
              <button className="px-6 py-3 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition">
                Get Started
              </button>
            </Link>
            <Link to="/services">
              <button className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition">
                 What We Do
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
