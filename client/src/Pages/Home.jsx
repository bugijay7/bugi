import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import heroImg from "../assets/hero11.jpg";
import webImg from "../assets/web.jpeg";
import customImg from "../assets/custom.jpeg";
import ecommerceImg from "../assets/ecommerce.jpeg";
import {
  FaCode,
  FaPaintBrush,
  FaSearch,
  FaHandshake,
  FaTools,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import shapeImg from '../assets/shape.jpeg'; 

function Home() {

  useEffect(() => {
    // Injecting Premium Fonts via Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    document.title = "Yohan Labs | Premium Web Development Nairobi";
  }, []);

  // ... (Data arrays remain same as your previous version)
  const services = [
    { number: "01", title: "Custom Website Development", text: "From personal blogs to functional business sites, we create tailor-made websites that reflect your brand and meet your goals." },
    { number: "02", title: "E-commerce & Online Shops", text: "We build online stores with secure payments, stock management, and smooth checkout to help you sell without limits." },
    { number: "03", title: "SEO & Performance Optimization", text: "Get found on Google and keep visitors engaged with fast, mobile-friendly, and search-optimized websites." },
    { number: "04", title: "Web Maintenance and Support", text: "Regular updates, backups, and technical support to keep your website secure and performing well all year round." },
  ];

  const packages = [
    { title: 'Personal Portfolios', bg: 'bg-[#d9b17b]', accent: 'text-cyan-800', features: ['🎨 Custom layout & styling', '🖼️ Project galleries', '📄 Resume/downloadable CV', '📫 Contact & socials section', '📱 Mobile-friendly design'], audience: ['Designers', 'Developers', 'Writers'], btnText: 'Build My Site', link: '/ClientForms/PortfolioForms' },
    { title: 'Online Stores', bg: 'bg-[#d9b17b]', accent: 'text-red-800', features: ['🛒 Product catalog & filters', '💳 Checkout & payment integration', '📦 Inventory management', '📈 Analytics tracking', '🤝 CRM integration'], audience: ['Retailers', 'Artisans', 'Wholesalers'], btnText: 'Get Started', link: '/ClientForms/StoreForms' },
    { title: 'Brand Portals', bg: 'bg-[#d9b17b]', accent: 'text-teal-800', features: ['🌐 Branded landing pages', '📥 Lead capture forms', '📊 Blog & SEO ready', '🧭 Clear navigation', '💬 Live chat'], audience: ['Coaches', 'Consultants', 'Agencies'], btnText: 'Inquire Now', link: '/ClientForms/BrandForms' },
    { title: 'Cause Platforms', bg: 'bg-[#d9b17b]', accent: 'text-fuchsia-800', features: ['🤝 Donation tools', '📅 Events calendar', '📰 Blog & stories', '📌 Mission showcase', '📧 Newsletter signup'], audience: ['NGOs', 'Churches', 'Charities'], btnText: 'Start My Mission', link: '/ClientForms/CauseForms' },
  ];

  return (
    <div className="bg-[#d9b17f] text-[#090909] selection:bg-black selection:text-[#d9b17f]" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Hero Section */}
      <section
        className="w-full min-h-screen bg-cover bg-center flex flex-col justify-end relative overflow-hidden"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20 to-transparent"></div>
        <div className="flex flex-col items-end text-right gap-4 w-11/12 md:w-10/12 mx-auto pb-20 relative z-10">
          <h3 className="text-6xl md:text-[10rem] font-black text-white leading-none tracking-tighter" style={{ fontFamily: '"Playfair Display", serif' }}>
            YOHAN<br/>LABS
          </h3>
          <p className="text-sm md:text-xl text-white/80 font-light leading-relaxed max-w-xl border-r-2 border-[#ffe4c4] pr-6 uppercase tracking-widest">
            Unlocking digital potential through precision engineering and intentional design.
          </p>
          <div className="flex gap-0 mt-8">
            <Link to="/pricings">
              <button className="px-12 py-6 text-xs font-bold bg-[#ffe4c4] text-black hover:bg-white transition-all tracking-[0.4em] uppercase">
                Get Started
              </button>
            </Link>
            <Link to="/services">
              <button className="px-12 py-6 text-xs font-bold border border-[#ffe4c4] text-[#ffe4c4] backdrop-blur-md hover:bg-[#ffe4c4] hover:text-black transition-all tracking-[0.4em] uppercase">
                Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Intro */}
      <section className="py-40 px-6 border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-6xl text-white leading-[1.1] max-w-5xl tracking-tight mb-20" style={{ fontFamily: '"Playfair Display", serif' }}>
            A boutique studio <span className="italic text-[#1c1205]">elevating</span> digital standards through creativity and code.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {[webImg, customImg, ecommerceImg].map((img, i) => (
              <div key={i} className="group relative overflow-hidden bg-white">
                <img src={img} alt="Gallery" className="w-full h-[600px] object-cover  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs tracking-[0.5em] uppercase font-bold">View Detail</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered Services - Grid Style */}
      <section className="py-32 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {services.map((service, index) => (
            <div key={index} className="bg-[#d9b17f] p-12 flex flex-col gap-8 group hover:bg-black transition-all duration-500">
              <span className="text-5xl font-black text-black/10 group-hover:text-white/10 transition-colors" style={{ fontFamily: '"Playfair Display", serif' }}>{service.number}</span>
              <h3 className="text-lg font-bold text-[#1c1205] group-hover:text-white uppercase tracking-widest">{service.title}</h3>
              <p className="text-gray-900 group-hover:text-gray-400 text-sm font-light leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing - Minimalist Table Feel */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-5xl md:text-9xl font-black text-[#263627] tracking-tighter uppercase leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>
              Investment
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] font-bold text-black border-b-2 border-black pb-2">All-inclusive digital solutions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-white/30 backdrop-blur-xl p-10 flex flex-col hover:bg-white/80 transition-all duration-500">
                <h3 className={`text-2xl font-black mb-10 ${pkg.accent} uppercase tracking-tighter border-b border-black/5 pb-4`} style={{ fontFamily: '"Playfair Display", serif' }}>
                  {pkg.title}
                </h3>
                
                <ul className="flex flex-col gap-5 mb-16 flex-grow">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-[11px] font-bold text-black/70 uppercase tracking-widest flex items-center gap-3">
                      <span className="w-1 h-1 bg-black"></span> {feat}
                    </li>
                  ))}
                </ul>

                <Link to={pkg.link}>
                  <button className="w-full py-6 font-bold text-white bg-black hover:bg-gray-800 transition-all uppercase tracking-[0.3em] text-[10px]">
                    {pkg.btnText}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-[#263627] py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#d9b17f] text-xs font-bold tracking-[0.6em] uppercase mb-8 block">Collaborations</span>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-16 tracking-tighter leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>
            Transforming <br/> the vision into <br/> <span className="italic text-[#d9b17f]">reality.</span>
          </h2>
          <a href="/start" className="inline-block bg-red-600 hover:bg-white hover:text-red-600 text-white font-black py-8 px-20 transition-all tracking-[0.5em] uppercase text-xs">
            Start a Project
          </a>
        </div>
      </section>

    </div>
  );
}

export default Home;