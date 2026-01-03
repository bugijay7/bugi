import React from 'react';
import { FaRocket, FaTools } from 'react-icons/fa';

function PricingsBonusses() {
  return (
    <div className="bg-[#d9b17f] text-gray-800 py-24 px-6 sm:px-12 lg:px-20 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 uppercase text-[#090909] tracking-wide">
          What Every Project Includes
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-16 max-w-xl mx-auto leading-relaxed">
          These essentials are built into every package — designed to give your business the best start online and ongoing confidence afterward.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Value 1 */}
          <div className="bg-[#1c1205] rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FaRocket className="text-red-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-200">
                Pre-launch Strategy Session
              </h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              A focused consultation to align your goals, audience, and brand voice before development begins. Clear goals, better results.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-[#1c1205] rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FaTools className="text-red-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-200">
                3 Months Post-Launch Support
              </h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Continued support after launch — covering updates, small tweaks, troubleshooting, and performance checkups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingsBonusses;
