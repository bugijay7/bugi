import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();

  // Scroll logic for premium feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (name) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navGroups = [
    {
      id: "main",
      label: "Main",
      links: [
        ["Home", "/"],
        ["Works", "/work"],
        ["About", "/about"],
        ["Contacts", "/contacts"],
      ],
    },
    {
      id: "resources",
      label: "Resources",
      links: [
        ["Services", "/services"],
        ["Online Businesses", "/website"],
        ["Packages", "/pricings"],
      ],
    },
    {
      id: "clients",
      label: "Clients",
      links: [
        ["For Portfolios", "/ClientForms/PortfolioForms"],
        ["For Brands", "/ClientForms/BrandForms"],
        ["For E-commerces", "/ClientForms/StoreForms"],
        ["For Cause Platforms", "/ClientForms/CauseForms"],
      ],
    },
  ];

  return (
    <>
    <nav
      className={`fixed top-0 w-full z-[9999] transition-all duration-500 border-b ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-4 border-black/10 shadow-xl"
          : "bg-transparent py-8 border-white/10"
      }`}
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link
          to="/"
          onClick={handleLinkClick}
          className={`text-2xl font-black tracking-tighter transition-colors ${
            scrolled ? "text-black" : "text-white"
          }`}
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          YOHAN LABS
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10">
          {navGroups.map((group) => (
            <li key={group.id} className="relative group">
              <button
                onMouseEnter={() => setActiveDropdown(group.id)}
                className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] transition-colors ${
                  scrolled ? "text-black/70 hover:text-black" : "text-white hover:text-white"
                }`}
              >
                {group.label} <FaChevronDown className="text-[8px]" />
              </button>

              {/* DROPDOWN */}
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className={`absolute top-full left-0 mt-4 bg-white border border-black/5 min-w-[220px] shadow-2xl transition-all duration-300 ${
                  activeDropdown === group.id ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                }`}
              >
                <div className="flex flex-col">
                  {group.links.map(([label, path]) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={handleLinkClick}
                      className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-black border-b border-black/5 hover:bg-[#ffe4c4] transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE CTA */}
        <div className="flex items-center gap-6">
          <Link to="/start" onClick={handleLinkClick} className="hidden md:block">
            <button
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${
                scrolled
                  ? "bg-black text-white border-black hover:bg-white hover:text-black"
                  : "bg-white text-black border-white hover:bg-transparent hover:text-white"
              }`}
            >
              Consultation
            </button>
          </Link>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={toggleMenu}
            className={`text-2xl transition-colors lg:hidden z-[10001] ${
              isOpen ? "text-white" : scrolled ? "text-black" : "text-white"
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

    
    </nav>
      {/* MOBILE OVERLAY - Architectural Sidebar */}
      <div
        className={`fixed inset-0 bg-black transition-transform duration-700 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 10000 }}
      >
        <div className="flex flex-col h-full p-10 overflow-y-auto">
          {/* Mobile Header within Menu */}
          <div className="flex justify-between items-center mb-16 shrink-0">
            <span
              className="text-white font-black tracking-tighter text-xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              YOHAN LABS
            </span>
          </div>

          {/* Links */}
          <div className="space-y-12 pb-20">
            {navGroups.map((group) => (
              <div key={group.id} className="flex flex-col gap-5">
                <span className="text-[#ffe4c4] text-[10px] font-black uppercase tracking-[0.5em]">
                  {group.label}
                </span>
                <div className="flex flex-col gap-6 pl-4 border-l border-white/10">
                  {group.links.map(([label, path]) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={handleLinkClick}
                      className="text-white text-3xl font-bold tracking-tighter uppercase hover:text-[#de5f5e] transition-colors"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link to="/start" onClick={handleLinkClick} className="block pt-10">
              <button className="w-full py-6 bg-[#de5f5e] text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default Navbar;