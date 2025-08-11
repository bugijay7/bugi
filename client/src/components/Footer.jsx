import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CreativeProcess from '../Pages/about/CreativeProcess';

function Footer() {
  const location = useLocation();
  const path = location.pathname;

  const isContactPage = path === '/contacts';
  const isAboutPage = path === '/about';
  const isServicesPage = path === '/services';
  const isCreativeProcess = path === '/about/creative-process';
  const isPricings = path === '/pricings';
  const isHome = path === '/';

  return (
    <footer
      className={`w-full bottom-0 left-0 z-50 ${
        isAboutPage || isServicesPage || isCreativeProcess || isHome || isPricings
          ? 'bg-gray-200 text-black'
          : 'bg-[#090909] text-white'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-10 flex flex-col md:flex-row justify-between items-start gap-10 font-[Montserrat] text-sm md:text-base">
        
        {/* Info Section */}
        <div className="text-left">
          <p className="font-extrabold mb-2">Kibugi Maina</p>
          <p className="font-extrabold">Interactive Developer</p>
        </div>

        {/* Social Links */}
        <div 
        className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
        isAboutPage || isServicesPage || isCreativeProcess || isHome || isPricings
          ? 'bg-gray-200 text-black'
          : 'bg-[#090909] text-white'
      }`}>
       
          {[
            { label: 'Twitter', url: 'https://twitter.com' },
            { label: 'Instagram', url: 'https://instagram.com' },
            { label: 'Github', url: 'https://github.com' }
          ].map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold hover:text-[orangered] transition-colors duration-300 ${
                isContactPage ? 'text-white' : isAboutPage || isServicesPage || isCreativeProcess || isHome || isPricings ? 'text-black' : 'text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Credits Section */}
        <div className="text-left">
          <p className="font-extrabold mb-2">Development: Kibugi Maina</p>
          <p className="font-extrabold">Design: Yohan Labs</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
