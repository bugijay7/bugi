import React from 'react';
import { FaRocket, FaTools } from 'react-icons/fa';

function PricingsBonusses() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-1">
          <span className="text-[#c9886b] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            The Standard
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-[#0d2b35] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            What Every <br /> <span className="text-[#c9886b] italic">Project Includes</span>
          </h2>
          <p className="text-[#0d2b35]/70 font-light leading-relaxed">
            These essentials are built into every package — designed to give your business the best start online and ongoing confidence afterward.
          </p>
        </div>

        {/* Right Column: Values Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Value 1 */}
          <div className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full border border-[#c9886b]/30 flex items-center justify-center text-[#c9886b] group-hover:bg-[#c9886b] group-hover:text-white transition-all duration-300">
                <FaRocket size={18} />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#0d2b35]">
                Pre-launch <br /> Strategy Session
              </h3>
            </div>
            <p className="text-sm text-[#0d2b35]/70 font-light leading-relaxed pl-16">
              A focused consultation to align your goals, audience, and brand voice before development begins. Clear goals, better results.
            </p>
          </div>

          {/* Value 2 */}
          <div className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full border border-[#c9886b]/30 flex items-center justify-center text-[#c9886b] group-hover:bg-[#c9886b] group-hover:text-white transition-all duration-300">
                <FaTools size={18} />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#0d2b35]">
                3 Months <br /> Post-Launch Support
              </h3>
            </div>
            <p className="text-sm text-[#0d2b35]/70 font-light leading-relaxed pl-16">
              Continued support after launch — covering updates, small tweaks, troubleshooting, and performance checkups.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PricingsBonusses;