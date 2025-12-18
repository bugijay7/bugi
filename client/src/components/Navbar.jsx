import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const { pathname } = useLocation();

  // Pages that use LIGHT navbar
  const isLightNavbar =
    pathname === "/" ||
    pathname === "/about/process" ||
    pathname === "/work";

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (name) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const mainLinks = [
    ["Home", "/"],
    ["Works", "/work"],
    ["About", "/about"],
    ["Contacts", "/contacts"],
  ];

  const resourcesLinks = [
    ["Services", "/services"],
    ["Online Businesses", "/website"],
    ["Packages", "/pricings"],
  ];

  const aboutLinks = [
    ["About Us", "/about"],
    ["Process", "/about/process"],
    ["Getting Started", "/start"],
    ["How It Works", "/about/creative-process"],
  ];

  const clientsLinks = [
    ["For Portfolios", "/ClientForms/PortfolioForms"],
    ["For Brands", "/ClientForms/BrandForms"],
    ["For E-commerces", "/ClientForms/StoreForms"],
    ["For Cause Platforms", "/ClientForms/CauseForms"],
  ];

  const dropdownClass = (name) => `
    hidden flex-col
    rounded-lg shadow-lg
    z-50
    md:absolute md:left-0 md:top-full md:min-w-[260px]
    md:group-hover:flex
    ${activeDropdown === name ? "flex" : ""}
    ${isLightNavbar ? "bg-[#1c1205] text-[#d9b17f]" : "bg-[#d9b17f] text-[#1c1205]"}
  `;

  const navBg = isLightNavbar ? "bg-[#d9b17f]" : "bg-[#1c1205]";
  const navText = isLightNavbar ? "text-[#1c1205]" : "text-[#d9b17f]";
  const buttonBg = isLightNavbar ? "bg-[#1c1205] text-[#d9b17f]" : "bg-[#d9b17f] text-[#1c1205]";

  return (
    <nav
      className={`fixed top-5 left-1/2 z-[1000] w-[80%] -translate-x-1/2 rounded-lg px-4 py-3 flex items-center justify-between ${navBg} ${navText}`}
    >
      {/* LOGO */}
      <Link
        to="/"
        onClick={handleLinkClick}
        className="text-xl font-bold"
      >
        YOHAN LABS
      </Link>

      {/* MENU */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed top-20 left-1/2 z-[999] w-[calc(100%-40px)] max-w-[700px]
        -translate-x-1/2 flex-col gap-4 rounded-lg p-4
        md:static md:flex md:w-auto md:max-w-none md:translate-x-0
        md:flex-row md:bg-transparent md:p-0 ${navBg}`}
      >
        {/* MAIN */}
        <li className="relative group flex flex-col md:pb-2">
          <button
            onClick={() => toggleDropdown("main")}
            className="text-left text-sm font-bold"
          >
            Main
          </button>
          <ul className={dropdownClass("main")}>
            {mainLinks.map(([label, path]) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={handleLinkClick}
                  className="block rounded-md px-3 py-2 font-bold hover:opacity-80"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* RESOURCES */}
        <li className="relative group flex flex-col md:pb-2">
          <button
            onClick={() => toggleDropdown("resources")}
            className="text-left text-sm font-bold"
          >
            Resources
          </button>
          <ul className={dropdownClass("resources")}>
            {resourcesLinks.map(([label, path]) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={handleLinkClick}
                  className="block rounded-md px-3 py-2 font-bold hover:opacity-80"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* ABOUT */}
        <li className="relative group flex flex-col md:pb-2">
          <button
            onClick={() => toggleDropdown("about")}
            className="text-left text-sm font-bold"
          >
            About
          </button>
          <ul className={dropdownClass("about")}>
            {aboutLinks.map(([label, path]) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={handleLinkClick}
                  className="block rounded-md px-3 py-2 font-bold hover:opacity-80"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* CLIENTS */}
        <li className="relative group flex flex-col md:pb-2">
          <button
            onClick={() => toggleDropdown("clients")}
            className="text-left text-sm font-bold"
          >
            Clients
          </button>
          <ul className={dropdownClass("clients")}>
            {clientsLinks.map(([label, path]) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={handleLinkClick}
                  className="block rounded-md px-3 py-2 font-bold hover:opacity-80"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      {/* CTA + MOBILE TOGGLE */}
      <div className="flex items-center gap-3">
        <Link to="/start" onClick={handleLinkClick}>
          <button className={`rounded-lg px-3 py-1 text-xs font-semibold ${buttonBg}`}>
            Free Consultation
          </button>
        </Link>

        <button
          onClick={toggleMenu}
          className="text-sm md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
