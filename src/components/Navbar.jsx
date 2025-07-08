import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isContacts = location.pathname === '/contacts';
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 ${
        isContacts ? 'bg-black text-white' : 'bg-gray-200 text-black'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between">
        {/* Brand / Logo */}
        <h1 className="text-xl font-extrabold">
          <Link to="/" className="no-underline">
            Kibugi Maina
          </Link>
        </h1>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>

        {/* Job Info (Desktop Only) */}
        <ul className="hidden lg:flex gap-10 font-medium text-sm">
          <li className="leading-tight">
            Currently Full-Stack <br /> Developer at Yohanlabs
          </li>
          <li className="leading-tight">
            Based in Nairobi <br /> Kenya
          </li>
        </ul>

        {/* Navigation Links */}
        <div
          className={`w-full md:w-auto mt-4 md:mt-0 ${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:gap-8 font-bold text-sm`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            <li>
              <Link to="/work" onClick={() => setIsOpen(false)} className="hover:underline">
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contacts" onClick={() => setIsOpen(false)} className="hover:underline">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setIsOpen(false)} className="hover:underline">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
