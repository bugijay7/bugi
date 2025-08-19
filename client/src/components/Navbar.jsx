import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const isAbout = location.pathname === "/about";
  const isServices = location.pathname === "/services";
  const isCreativeProcess = location.pathname === "/about/creative-process";
  const isPricings = location.pathname === "/pricings";
  const isHome = location.pathname === "/";
  const isWebsite = location.pathname === "/website";

  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpenMobile, setResourcesOpenMobile] = useState(false);
  const [clientsOpenMobile, setClientsOpenMobile] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleResourcesMobile = () =>
    setResourcesOpenMobile(!resourcesOpenMobile);
  const toggleClientsMobile = () =>
    setClientsOpenMobile(!clientsOpenMobile);

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
    ["Website", "/website"],
  ];

  const clientsLinks = [
    ["For Portfolios", "/ClientForms/PortfolioForms"],
    ["For Brands", "/ClientForms/BrandForms"],
    ["For E-commerces", "/ClientForms/StoreForms"],
    ["For Cause Platforms", "/ClientForms/CauseForms"],
  ];

  return (
    <header
      className={`w-full fixed top-0 pt-5 left-0 z-50 ${
        isAbout || isServices || isCreativeProcess || isPricings || isHome || isWebsite
          ? "bg-gray-200 text-black"
          : "bg-[#090909] text-white"
      }`}
    >

      <nav  className="w-full max-w-full overflow-x-hidden mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold uppercase leading-none">
          yohan labs
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 items-center font-bold">
            {mainLinks.map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="hover:text-teal-600">
                  {label}
                </Link>
              </li>
            ))}

            {/* Resources dropdown on hover */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-600">
                Resources
              </button>
              <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg flex flex-col p-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                {resourcesLinks.map(([label, path]) => (
                  <li key={path} className="p-2 hover:bg-gray-100 rounded">
                    <Link to={path}>{label}</Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Clients dropdown on hover */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-600">
                Clients
              </button>
              <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg flex flex-col p-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                {clientsLinks.map(([label, path]) => (
                  <li key={path} className="p-2 hover:bg-gray-100 rounded">
                    <Link to={path}>{label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        {/* Call to action */}
        <Link to="/start" className="hidden md:block" >
          <button className="px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-blue-700">
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
      className="fixed top-0 right-0 w-full h-full bg-black flex flex-col items-center justify-center text-white space-y-6 z-50"
    >
      <ul className="flex flex-col gap-4 text-center font-bold">
        {[...mainLinks, ...resourcesLinks, ...clientsLinks].map(
          ([label, path]) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className="hover:text-teal-400 text-sm"
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
