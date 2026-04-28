import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import heroImg from "../assets/hero11.jpg";
import webImg from "../assets/web.jpeg";
import customImg from "../assets/custom.jpeg";
import ecommerceImg from "../assets/ecommerce.jpeg"

function Home() {

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    document.title = "Yohan Labs | Websites That Bring You Customers";

    const meta = document.createElement('meta');
    meta.name = "description";
    meta.content = "We build modern websites in Kenya that help businesses get customers, sell online, and grow with SEO-driven digital solutions.";
    document.head.appendChild(meta);

  }, []);

  const services = [
    { number: "01", title: "Websites That Generate Leads", text: "We build high-converting websites designed to turn visitors into real customers for your business." },
    { number: "02", title: "Ecommerce Stores That Sell", text: "Launch an online store with seamless payments and optimized checkout to increase your sales." },
    { number: "03", title: "SEO That Brings You Clients", text: "Get found on Google and attract the right audience actively searching for your services." },
    { number: "04", title: "Done-For-You Maintenance", text: "We handle updates, security, and performance so your website runs smoothly at all times." },
  ];

  const packages = [
    { title: 'Portfolio Websites', features: ['Perfect for personal brands', 'Project showcase', 'CV download', 'Contact integration', 'Mobile responsive'], link: '/ClientForms/PortfolioForms', btnText: 'Build My Website' },
    { title: 'Ecommerce Stores', features: ['Perfect for selling products online', 'Secure payments', 'Product management', 'Analytics integration', 'Customer management'], link: '/ClientForms/StoreForms', btnText: 'Start Selling Online' },
    { title: 'Business Websites', features: ['Perfect for small businesses', 'Lead generation forms', 'SEO-ready blog', 'Clear navigation', 'Mobile optimized'], link: '/ClientForms/BrandForms', btnText: 'Grow My Business' },
    { title: 'NGO & Organization Websites', features: ['Perfect for NGOs & churches', 'Donation systems', 'Event management', 'Story/blog pages', 'Email tools'], link: '/ClientForms/CauseForms', btnText: 'Launch Platform' },
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
          
          <h1 className="text-[2rem] sm:text-[6rem] font-black text-white leading-none tracking-tighter" style={{ fontFamily: '"Playfair Display", serif' }}>
            WE BUILD WEBSITES<br/>THAT BRING YOU CLIENTS
          </h1>

          <p className="text-xs md:text-2xl text-white/80 font-light leading-relaxed max-w-xl border-r-2 border-[#ffe4c4] pr-6 uppercase tracking-widest">
            Nairobi-based web design studio helping businesses grow online with fast, modern, and SEO-optimized websites.
          </p>

          <div className="flex gap-0 mt-8">
            <Link to="/start">
              <button className="px-12 py-6 text-xs font-bold bg-[#ffe4c4] text-black hover:bg-white transition-all tracking-[0.4em] uppercase">
                Get Your Website
              </button>
            </Link>
            <a href="https://wa.me/254702443418">
              <button className="px-12 py-6 text-xs font-bold border border-[#ffe4c4] text-[#ffe4c4] backdrop-blur-md hover:bg-[#ffe4c4] hover:text-black transition-all tracking-[0.4em] uppercase">
                Connect On Whatsapp
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-40 px-6 ">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-6xl text-white leading-[1.1] max-w-5xl tracking-tight mb-20" style={{ fontFamily: '"Playfair Display", serif' }}>
            We create <span className="italic text-[#1c1205]">high-performance</span> websites that help businesses in Kenya attract customers, build trust, and grow online.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {[webImg, customImg, ecommerceImg].map((img, i) => (
              <div key={i} className="group relative overflow-hidden bg-white">
                <img 
                  src={img} 
                  alt="Web design projects" 
                  className="w-full h-[600px] object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 ">
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

      {/* TRUST  */}
      <section className="py-40 px-6 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase leading-none mb-10" style={{ fontFamily: '"Playfair Display", serif' }}>
              Why Businesses <br/><span className="italic text-gray-400">Choose Us</span>
            </h2>
            <div className="w-20 h-1 bg-black mb-10"></div>
          </div>
          
          <div className="flex flex-col gap-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-black/80">
              We focus on <span className="font-bold text-black">results</span> — not just design. Every website we build is crafted to help you attract customers and grow your business.
            </p>
            <p className="text-sm uppercase tracking-[0.2em] font-bold text-gray-500 border-l-4 border-[#d9b17f] pl-6">
              Fast delivery, clean design, and performance-driven development tailored for the Kenyan market.
            </p>
            <p className="text-3xl font-black tracking-tighter" style={{ fontFamily: '"Playfair Display", serif' }}>
              Simple. Effective. Built to grow.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl md:text-9xl font-black text-[#263627] tracking-tighter uppercase leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>
            Choose Your Website
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
            Ready to Get More Customers Online?<br/> <span className="italic text-[#d9b17f]">Let’s build your website today</span>
          </h2>
          <Link to="/start" className="inline-block bg-red-600 hover:bg-white hover:text-red-600 text-white font-black py-8 px-20 transition-all tracking-[0.5em] uppercase text-xs">
            Start a Project
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;