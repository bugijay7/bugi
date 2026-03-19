import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import heroImg from "../assets/hero11.jpg";
import webImg from "../assets/web.jpeg";
import customImg from "../assets/custom.jpeg";
import ecommerceImg from "../assets/ecommerce.jpeg";

function Home() {

  useEffect(() => {
  // Fonts
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  // Title
  document.title = "Yohan Labs | Web Design Nairobi Kenya | Custom Websites & SEO Services";

  // Meta Description
  const meta = document.createElement('meta');
  meta.name = "description";
  meta.content = "Yohan Labs is a Nairobi-based web design and development studio specializing in custom websites, ecommerce stores, SEO optimization, and modern digital solutions in Kenya.";
  document.head.appendChild(meta);

  // ✅ STRUCTURED DATA (ADD THIS HERE)
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.innerHTML = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Yohan Labs",
    "image": "https://yohanlabs.online/logo.png",
    "url": "https://www.facebook.com/profile.php?id=61577628123447",
    "telephone": "+254702443418",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "areaServed": "Kenya",
    "sameAs": [
      "https://www.instagram.com/yohanlabske/",
      "https://www.facebook.com/"
    ],
    "description": "Yohan Labs is a Nairobi-based web design and development agency offering custom websites, ecommerce solutions, and SEO services."
  });

  document.head.appendChild(script);

}, []);

    // ✅ SEO TITLE (VERY IMPORTANT)
    document.title = "Yohan Labs | Web Design Nairobi Kenya | Custom Websites & SEO Services";

    // ✅ META DESCRIPTION
    const meta = document.createElement('meta');
    meta.name = "description";
    meta.content = "Yohan Labs is a Nairobi-based web design and development studio specializing in custom websites, ecommerce stores, SEO optimization, and modern digital solutions in Kenya.";
    document.head.appendChild(meta);

  }, []);

  const services = [
    { number: "01", title: "Custom Website Development in Kenya", text: "We build professional, responsive websites for businesses, brands, and individuals in Nairobi and across Kenya, tailored to your goals." },
    { number: "02", title: "E-commerce Website Development", text: "Launch powerful online stores with secure payments, product management, and optimized checkout experiences to grow your business online." },
    { number: "03", title: "SEO & Google Ranking Optimization", text: "Rank higher on Google with fast-loading, mobile-friendly, and search-optimized websites designed to increase visibility and traffic." },
    { number: "04", title: "Website Maintenance & Support", text: "Keep your website secure, updated, and performing at its best with ongoing support, backups, and technical maintenance." },
  ];

  const packages = [
    { title: 'Portfolio Websites', features: ['Custom portfolio design', 'Project showcase', 'CV download', 'Contact integration', 'Mobile responsive'], link: '/ClientForms/PortfolioForms', btnText: 'Build My Website' },
    { title: 'Ecommerce Stores', features: ['Online store setup', 'Secure payments', 'Product management', 'Analytics integration', 'Customer management'], link: '/ClientForms/StoreForms', btnText: 'Start Selling Online' },
    { title: 'Business Websites', features: ['Professional branding', 'Lead generation forms', 'SEO-ready blog', 'Clear navigation', 'Live chat integration'], link: '/ClientForms/BrandForms', btnText: 'Grow My Business' },
    { title: 'NGO & Organization Websites', features: ['Donation systems', 'Event management', 'Story/blog pages', 'Mission showcase', 'Email marketing tools'], link: '/ClientForms/CauseForms', btnText: 'Launch Platform' },
  ];

  return (
    <div className="bg-[#d9b17f] text-[#090909] selection:bg-black selection:text-[#d9b17f]" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* HERO */}
      <section
        className="w-full min-h-screen bg-cover bg-center flex flex-col justify-end relative overflow-hidden"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20 to-transparent"></div>

        <div className="flex flex-col items-end text-right gap-4 w-11/12 md:w-10/12 mx-auto pb-20 relative z-10">
          
          {/* ✅ H1 KEYWORD TARGET */}
          <h1 className="text-6xl md:text-[10rem] font-black text-white leading-none tracking-tighter" style={{ fontFamily: '"Playfair Display", serif' }}>
            YOHAN<br/>LABS
          </h1>

          <p className="text-sm md:text-xl text-white/80 font-light leading-relaxed max-w-xl border-r-2 border-[#ffe4c4] pr-6 uppercase tracking-widest">
            Web design, development, and SEO services in Nairobi, Kenya. We build fast, modern, and scalable websites that grow your business online.
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

      {/* INTRO */}
      <section className="py-40 px-6 border-b border-black/10">
        <div className="max-w-7xl mx-auto">

          {/* ✅ H2 WITH KEYWORDS */}
          <h2 className="text-3xl md:text-6xl text-white leading-[1.1] max-w-5xl tracking-tight mb-20" style={{ fontFamily: '"Playfair Display", serif' }}>
            A Nairobi-based web design studio delivering <span className="italic text-[#1c1205]">high-performance</span> websites, SEO, and digital solutions.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {[webImg, customImg, ecommerceImg].map((img, i) => (
              <div key={i} className="group relative overflow-hidden bg-white">
                {/* ✅ ALT TEXT FOR SEO */}
                <img 
                  src={img} 
                  alt="Web design and development projects by Yohan Labs Kenya" 
                  className="w-full h-[600px] object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {services.map((service, index) => (
            <div key={index} className="bg-[#d9b17f] p-12 flex flex-col gap-8 group hover:bg-black transition-all duration-500">
              <span className="text-5xl font-black text-black/10 group-hover:text-white/10 transition-colors" style={{ fontFamily: '"Playfair Display", serif' }}>
                {service.number}
              </span>
              <h3 className="text-lg font-bold text-[#1c1205] group-hover:text-white uppercase tracking-widest">
                {service.title}
              </h3>
              <p className="text-gray-900 group-hover:text-gray-400 text-sm font-light leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">

          {/* ✅ H2 KEYWORD */}
          <h2 className="text-5xl md:text-9xl font-black text-[#263627] tracking-tighter uppercase leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>
            Web Design Pricing Kenya
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-black/10 border border-black/10 mt-16">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-white/30 backdrop-blur-xl p-10 flex flex-col hover:bg-white/80 transition-all duration-500">
                <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter border-b border-black/5 pb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
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

      {/* CTA */}
      <section className="bg-[#263627] py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-16 tracking-tighter leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>
            Web Design & Development in Kenya <br/> <span className="italic text-[#d9b17f]">Start your project today</span>
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