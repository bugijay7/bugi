import React from "react";
import { Link } from "react-router-dom";

import webImg from "../../assets/web.jpeg";
import customImg from "../../assets/custom.jpeg";
import ecommerceImg from "../../assets/ecommerce.jpeg";

function Solution() {
  return (
    <section className="solution-section  items-center justify-center bg-gray-200 text-[#090909] mt-10 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* ✅ Section 1: Hero Content */}
        <div className="flex flex-col items-center text-center gap-6">
          <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500">
            Welcome to Yohan Labs
          </h3>
          <p className="text-lg md:text-xl text-[#090909] leading-relaxed max-w-3xl">
            At Yohan Labs, we help businesses unlock their full potential online.
            From modern websites that attract and convert, to scalable backend
            systems and seamless integrations — we craft digital solutions
            designed to grow your brand and deliver results.
          </p>
          <Link
            to="/services"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Explore Our Services
          </Link>
        </div>

        {/* ✅ Section 2: Services Cards */}
        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-gray-900 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img
              src={webImg}
              alt="Web Design & Development"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-3">Web Design & Development</h4>
              <p className="text-gray-700 leading-relaxed">
                Clean, modern, and responsive websites that provide seamless
                experiences across all devices.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-gray-900 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img
              src={customImg}
              alt="Custom Solutions"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-3">Custom Solutions</h4>
              <p className="text-gray-700 leading-relaxed">
                Scalable backend systems, APIs, and tailored solutions built to
                match your business needs.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-gray-900 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img
              src={ecommerceImg}
              alt="E-Commerce & Integrations"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-3">E-Commerce & Integrations</h4>
              <p className="text-gray-700 leading-relaxed">
                From online stores to payment gateways and third-party integrations,
                we make your business ready for digital growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
