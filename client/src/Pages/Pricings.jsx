import React, { useEffect } from 'react';
import PricingsBonusses from '../components/Pricings/PricingsBonusses';
import { Link } from 'react-router-dom';

function Pricings() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = "Investment & Packages | Yohan Labs Nairobi";
  }, []);

  const packages = [
    {
      title: 'Personal Portfolios',
      price: 'Ksh 15,000',
      features: ['Custom layout & styling', 'Project galleries', 'Resume/downloadable CV', 'Contact & socials section', 'Mobile-friendly design'],
      audience: ['Designers', 'Developers', 'Writers', 'Photographers'],
      btnText: 'Build My Site',
      link: '/ClientForms/PortfolioForms',
    },
    {
      title: 'Online Stores',
      price: 'Ksh 55,000',
      features: ['Product catalog & filters', 'Checkout & payment integration', 'Inventory management', 'Analytics tracking', 'CRM integration'],
      audience: ['Retailers', 'Artisans', 'Restaurants', 'Digital sellers'],
      btnText: 'Get Started',
      link: '/ClientForms/StoreForms',
      featured: true, // This will make the card stand out
    },
    {
      title: 'Brand Portals',
      price: 'Ksh 35,000',
      features: ['Branded landing pages', 'Lead capture forms', 'Blog & SEO ready', 'Clear navigation', 'Live chat integration'],
      audience: ['Coaches', 'Consultants', 'Agencies', 'Small businesses'],
      btnText: 'Inquire Now',
      link: '/ClientForms/BrandForms',
    },
    {
      title: 'Cause Platforms',
      price: 'Ksh 40,000',
      features: ['Donation & fundraising', 'Events calendar', 'Blog & stories', 'Mission & team showcase', 'Newsletter signup'],
      audience: ['NGOs', 'Churches', 'Youth orgs', 'Charities'],
      btnText: 'Start My Mission',
      link: '/ClientForms/CauseForms',
    },
  ];

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#c9886b] text-xs font-black tracking-[0.5em] uppercase mb-6 block">Investment Tiers</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
            Transparent <br /> <span className="text-[#c9886b] italic">Pricing</span>
          </h1>
          <p className="text-lg font-light text-[#0d2b35]/70 max-w-2xl mx-auto leading-relaxed">
            Pick the right solution for your project. All plans include responsive design, basic SEO, and optimized performance. 
            <span className="block mt-4 font-bold text-[#0d2b35]">Custom add-ons available.</span>
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                pkg.featured ? 'bg-[#0d2b35] text-white shadow-2xl scale-105 z-10' : 'bg-white text-[#0d2b35] border border-[#0d2b35]/5'
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#c9886b] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{pkg.title}</h3>
                <div className="text-3xl font-light text-[#c9886b]" style={{ fontFamily: '"Playfair Display", serif' }}>
                  <span className="text-sm align-top mr-1">From</span>
                  {pkg.price.split(' ')[1]} {pkg.price.split(' ')[2]}
                </div>
              </div>

              {/* Audience Tag Cloud */}
              <div className="mb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 opacity-50">Ideal For</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.audience.map((aud, i) => (
                    <span key={i} className={`text-[10px] px-2 py-1 rounded-sm border ${pkg.featured ? 'border-white/20' : 'border-[#0d2b35]/10'}`}>
                      {aud}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="text-sm flex items-start gap-3">
                    <span className="text-[#c9886b] mt-1">✓</span>
                    <span className="font-light opacity-80">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Footer CTA */}
              <div className="mt-auto pt-8 border-t border-[#c9886b]/20">
                <p className="text-[10px] italic mb-6 opacity-60">Includes 3 months of free maintenance & support</p>
                <Link to={pkg.link} className="block">
                  <button className={`w-full py-5 text-xs font-black uppercase tracking-[0.4em] transition-all ${
                    pkg.featured 
                      ? 'bg-[#c9886b] text-white hover:bg-[#f3e9e2] hover:text-[#0d2b35]' 
                      : 'bg-[#0d2b35] text-white hover:bg-[#c9886b]'
                  }`}>
                    {pkg.btnText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bonus Component Section */}
      <section className="bg-white py-20">
        <PricingsBonusses />
      </section>

    </div>
  );
}

export default Pricings;