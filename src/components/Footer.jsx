import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contacts';

  return (
    <footer className={`${isContactPage ? 'bg-black text-white' : 'bg-transparent text-[#111]'} w-full`}>
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-10 flex flex-col md:flex-row justify-between items-start gap-10 font-[Montserrat] text-sm md:text-base">
        
        {/* Info Section */}
        <div className="text-left">
          <p className="font-extrabold mb-2">Kibugi Maina</p>
          <p className="font-extrabold">Creative Developer</p>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
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
              className={`font-semibold hover:text-[orangered] transition-colors duration-300 ${isContactPage ? 'text-white' : 'text-[#111]'}`}
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
