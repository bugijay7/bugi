import React from 'react';
import { Link } from 'react-router-dom';

function ServicesPreview() {
  const services = [
    {
      title: 'Custom Website Development',
      text: 'From personal blogs to functional business sites, we create tailor-made websites that reflect your brand and meet your goals.',
    },
    {
      title: 'E-commerce & Online Shops',
      text: 'We build online stores with secure payments, stock management, and smooth checkout to help you sell without limits.',
    },
    {
      title: 'SEO & Performance Optimization',
      text: 'Get found on Google and keep visitors engaged with fast, mobile-friendly, and search-optimized websites.',
    },
    {
      title: 'Web Maintenance and Support',
      text: 'Regular updates, backups, and technical support to keep your website secure and performing well all year round.',
    },
  ];

  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 px-6 lg:px-12">
        
        {/* Left Box */}
        <div className="lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            A preview look at what we offer <br className="hidden sm:block" /> and how we deliver
          </h2>
          <p className="text-gray-600 mb-6">
            For a more in-depth look at the process
          </p>
          <Link 
            to="/about/creative-process" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg shadow hover:from-red-600 hover:to-pink-600 transition"
            aria-label="Start your project"
          >
            Process
          </Link>
        </div>

        {/* Right Box - Services Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center sm:text-left"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPreview;
