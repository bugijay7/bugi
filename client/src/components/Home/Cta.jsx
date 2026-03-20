import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Cta() {
  return (
    <section className="px-6 py-24 bg-[#0d2b35] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto border border-white/10 p-8 md:p-20 relative">
        
        {/* Background Decorative Element - Architectural Line */}
        <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-[#c9886b] to-transparent hidden md:block" />

        <div className="max-w-3xl relative z-10">
          <span className="text-[#c9886b] text-[10px] font-black uppercase tracking-[0.6em] mb-8 block">
            Next Steps
          </span>
          
          <h2 
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8" 
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Let’s Build <br /> 
            Something <span className="text-[#c9886b] italic font-normal">Great</span> Together
          </h2>

          <p className="text-lg font-light text-white/70 max-w-xl leading-relaxed mb-12">
            Ready to turn your ideas into reality? Whether it's a portfolio, 
            business website, or creative concept—I'm here to help you bring it to life.
          </p>

          <Link 
            to="/start" 
            className="group inline-flex items-center gap-6 bg-white text-[#0d2b35] px-10 py-6 text-xs font-black uppercase tracking-[0.3em] transition-all hover:bg-[#c9886b] hover:text-white"
          >
            Start a Project 
            <FaArrowRight className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        {/* Subtle Brand Stamp */}
        <div className="absolute bottom-8 right-8 text-[8px] uppercase tracking-widest opacity-20 hidden md:block">
          Yohan Labs Studios &copy; 2024 <br /> Nairobi, Kenya
        </div>
      </div>
    </section>
  );
}

export default Cta;