import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const isAbout = location.pathname === "/about";
  const isCreativeProcess = location.pathname === "/about/creative-process";
  const isPricings = location.pathname === "/pricings";
  const isHome = location.pathname === "/";
  const isWebsite = location.pathname === "/website";

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const mainLinks = [
    ["Home", "/"],
    ["Works", "/work"],
    ["About", "/about"],
    ["Contacts", "/contacts"],
  ];

  const resourcesLinks = [
    ["Services", "/services"],
    ["Getting Started", "/start"],
    ["Packages", "/pricings"],
    ["Process", "/about/process"],
    ["How It Works", "/about/creative-process"],
    ["Online Businesses", "/website"],
  ];

  const clientsLinks = [
    ["For Portfolios", "/ClientForms/PortfolioForms"],
    ["For Brands", "/ClientForms/BrandForms"],
    ["For E-commerces", "/ClientForms/StoreForms"],
    ["For Cause Platforms", "/ClientForms/CauseForms"],
  ];

  const isLightBg = isAbout || isCreativeProcess || isPricings || isHome || isWebsite;

  return (
    <header
  className={`max-w-[1400px] mx-auto fixed top-0 left-0 right-0 border-1  pt-5 z-[9999] ${
    isLightBg ? "bg-gray-200 text-black" : "bg-[#090909] text-white"
  }`}
>
      <nav className="w-full px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold leading-none">
            Yohan<strong className="text-xl">-labs</strong>
          </h1>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {/* Main Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-teal-600">Main</button>
            <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg flex flex-col p-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              {mainLinks.map(([label, path]) => (
                <li key={path} className="p-2 hover:bg-gray-100 rounded">
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Resources Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-teal-600">Resources</button>
            <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg flex flex-col p-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              {resourcesLinks.map(([label, path]) => (
                <li key={path} className="p-2 hover:bg-gray-100 rounded">
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Clients Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-teal-600">Clients</button>
            <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg flex flex-col p-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              {clientsLinks.map(([label, path]) => (
                <li key={path} className="p-2 hover:bg-gray-100 rounded">
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Call to Action */}
        <Link to="/start" className="hidden md:block">
          <button
            className={`px-4 py-2 rounded-lg font-bold shadow transition ${
              isLightBg
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-teal-500 text-white hover:bg-blue-700"
            }`}
          >
            Free Consultation
          </button>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center text-white space-y-6 z-[9999]"
          >
            <ul className="flex flex-col gap-4 text-center font-bold">
              {[...mainLinks, ...resourcesLinks, ...clientsLinks].map(
                ([label, path]) => (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-teal-400 text-lg"
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* CTA button */}
            <Link to="/start" onClick={() => setIsOpen(false)}>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                Free Consultation
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
