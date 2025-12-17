import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  // Close dropdown and mobile menu when link is clicked
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

  return (
    <nav className="navbar-container">
      <Link to="/" className="logo" onClick={handleLinkClick}>
        YOHAN LABS
      </Link>

      {isOpen && (
        <ul className="desktop-menu open">
          <li className="dropdown">
            <button
              type="button"
              className="dropdown-toggle"
              onClick={() => toggleDropdown("main")}
            >
              Main
            </button>
            <ul className={`dropdown-menu ${activeDropdown === "main" ? "show" : ""}`}>
              {mainLinks.map(([label, path]) => (
                <li key={path}>
                  <Link to={path} onClick={handleLinkClick}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="dropdown">
            <button
              type="button"
              className="dropdown-toggle"
              onClick={() => toggleDropdown("resources")}
            >
              Resources
            </button>
            <ul className={`dropdown-menu ${activeDropdown === "resources" ? "show" : ""}`}>
              {resourcesLinks.map(([label, path]) => (
                <li key={path}>
                  <Link to={path} onClick={handleLinkClick}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="dropdown">
            <button
              type="button"
              className="dropdown-toggle"
              onClick={() => toggleDropdown("about")}
            >
              About
            </button>
            <ul className={`dropdown-menu ${activeDropdown === "about" ? "show" : ""}`}>
              {aboutLinks.map(([label, path]) => (
                <li key={path}>
                  <Link to={path} onClick={handleLinkClick}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="dropdown">
            <button
              type="button"
              className="dropdown-toggle"
              onClick={() => toggleDropdown("clients")}
            >
              Clients
            </button>
            <ul className={`dropdown-menu ${activeDropdown === "clients" ? "show" : ""}`}>
              {clientsLinks.map(([label, path]) => (
                <li key={path}>
                  <Link to={path} onClick={handleLinkClick}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      )}

      <section className="cta-dropdown">
        <Link to="/start" className="cta-desktop" onClick={handleLinkClick}>
          <button className="cta-btn">Free Consultation</button>
        </Link>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </section>
    </nav>
  );
}

export default Navbar;
