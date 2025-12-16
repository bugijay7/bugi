import React from "react";
import { Link } from "react-router-dom";

import webImg from "../../assets/web.jpeg";
import customImg from "../../assets/custom.jpeg";
import ecommerceImg from "../../assets/ecommerce.jpeg";

function Solution() {
  return (
    <section className="solution-section  items-center justify-center bg-[#d9b17f] text-[#090909]  py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* ✅ Section 1: Hero Content */}
        <div className="flex flex-col items-start justify-center text-left gap-6 min-h-[40vh]">
          
          <p className="text-lg md:text-2xl text-white leading-relaxed max-w-4xl">
          Web design studio guided by creativity, innovation, and purpose.
A place to showcase your ideas, engage your audience, and transform your digital presence.
          </p>
          <Link
            to="/services"
            className=" text-[#1c1205] font-semibold underline underline-offset-8  underline-bold">
            Explore Our Services
          </Link>
        </div>

        {/* ✅ Section 2: Services Cards */}
        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="    hover:shadow-lg transition overflow-hidden">
            <img
              src={webImg}
              alt="Web Design & Development"
              className="w-full h-128 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl text-[#442b0b] font-bold mb-3">Web Design & Development</h4>
              <p className="text-gray-200 leading-relaxed">
                Clean, modern, and responsive websites that provide seamless
                experiences across all devices.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="   transition overflow-hidden">
            <img
              src={customImg}
              alt="Custom Solutions"
              className="w-full h-128 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl text-[#442b0b] font-bold mb-3">Custom Solutions</h4>
              <p className="text-gray-200 leading-relaxed">
                Scalable backend systems, APIs, and tailored solutions built to
                match your business needs.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="   transition overflow-hidden">
            <img
              src={ecommerceImg}
              alt="E-Commerce & Integrations"
              className="w-full h-128 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl text-[#442b0b] font-bold mb-3">E-Commerce & Integrations</h4>
              <p className="text-gray-200 leading-relaxed">
               E-stores/payment gateways & third-party integrations,
                 ready made for digital growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
