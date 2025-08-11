import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();
  const isAbout = location.pathname === '/about';
  const isServices = location.pathname === '/services';
  const isCreativeProcess = location.pathname === '/about/creative-process';
  const isPricings = location.pathname === '/pricings';
  const isHome = location.pathname === '/';
  const isWebsite = location.pathname === '/website';
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
     className={`w-full fixed top-0 left-0 z-50 ${
      isAbout || isServices || isCreativeProcess || isPricings || isHome || isWebsite
      ? 'bg-gray-200 text-black'
      : 'bg-[#090909] text-white'
      }`}
    >
      <nav className=" mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="no-underline hover:opacity-80">
         <h1
         className={`text-2xl sm:text-2xl lg:text-[1.5rem] font-bold leading-none uppercase ${
      isAbout || isServices || isCreativeProcess || isPricings || isHome || isWebsite
      ? 'bg-gray-200 text-black'
      : 'bg-[#090909] text-white'
      }`}>
       
            kibugi <br /> maina
          </h1>
        </Link>

        {/* Toggle Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Job Info */}
        <ul
       className={` z-50 hidden lg:flex gap-10 font-medium text-xs sm:text-sm  ${
      isAbout || isServices || isCreativeProcess || isPricings || isHome || isWebsite
      ? 'bg-gray-200 text-black'
      : 'bg-[#090909] text-white'
      }`} >
        
          <li className="leading-tight">
            Full-Stack Developer <br /> at Yohanlabs
          </li>
          <li className="leading-tight">
            Based in Nairobi <br /> Kenya
          </li>
        </ul>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex md:items-center md:static absolute top-full left-0 w-full md:w-auto
          bg-black text-white md:bg-transparent md:text-inherit
          flex-col md:flex-row gap-4 md:gap-8 py-6 md:py-0 px-6 md:px-0
          shadow-lg md:shadow-none transition-all duration-300 z-40`}
        >
          <ul className="flex flex-col md:flex-row w-full md:w-auto gap-4 md:gap-8 font-semibold text-sm md:text-base text-start md:text-end">
            {[
              ['Works', '/work'],
              ['About', '/about'],
              ['Contacts', '/contacts'],
              ['Pricings', '/pricings'],
              ['Process', '/about/creative-process'],
              ['Services', '/services'],

            ].map(([label, path]) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="hover:underline block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <Link to="/start " className="hidden md:block">
        <button className='bg-red-400 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 hidden md:block'>
          Free Consultation
        </button>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
