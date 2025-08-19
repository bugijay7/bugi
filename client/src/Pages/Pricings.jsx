import React from 'react';
import PricingsBonusses from '../components/Pricings/PricingsBonusses';
import { Link } from 'react-router-dom';

function Pricings() {
  const packages = [
        {
      title: 'Personal Portfolios',
     
      bg: 'bg-blue-300',
      accent: 'text-cyan-600',
      features: [
        '🎨 Custom layout & styling',
        '🖼️ Project galleries',
        '📄 Resume/downloadable CV',
        '📫 Contact & socials section',
        '📱 Mobile-friendly design',
      ],
      audience: ['Designers', 'Developers', 'Writers', 'Photographers', 'Filmmakers', 'Job seekers'],
      btnText: 'Build My Site',
      link: '/ClientForms/PortfolioForms',
    },
    {
      title: 'Online Stores',
    
      bg: 'bg-red-300',
      accent: 'text-red-500',
      features: [
        '🛒 Product catalog & filters',
        '💳 Checkout & payment integration',
        '📦 Inventory management',
        '📈 Analytics & performance tracking',
        '🤝 CRM integration',
      ],
      audience: ['Retailers', 'Artisans', 'Digital sellers', 'Restaurants', 'Wholesalers', 'Service providers'],
      btnText: 'Get Started',
      link: '/ClientForms/StoreForms',
    },
    {
      title: 'Brand Portals',
    
      bg: 'bg-green-300',
      accent: 'text-teal-600',
      features: [
        '🌐 Branded landing pages',
        '📥 Lead capture forms',
        '📊 Blog & SEO ready',
        '🧭 Clear navigation structure',
        '💬 Live chat integration',
      ],
      audience: ['Coaches', 'Consultants', 'Agencies', 'Content creators', 'Product brands', 'Small businesses'],
      btnText: 'Inquire Now',
      link: '/ClientForms/BrandForms',
    },

    {
      title: 'Cause Platforms',
   
      bg: 'bg-purple-300',
      accent: 'text-fuchsia-600',
      features: [
        '🤝 Donation & fundraising tools',
        '📅 Events calendar',
        '📰 Blog & stories',
        '📌 Mission & team showcase',
        '📧 Newsletter signup',
      ],
      audience: ['NGOs', 'Churches', 'Youth orgs', 'Charities', 'Foundations', 'Community groups'],
      btnText: 'Start My Mission',
      link: '/ClientForms/CauseForms',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800 py-24 px-6 font-[Montserrat]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-[#090909] uppercase tracking-wide">
          Website Pricing Packages
        </h2>

        <p className="text-lg text-center mb-16 text-black max-w-2xl mx-auto">
          Pick the right solution for your project. All plans include responsive design, basic SEO, fast loading, and optimized performance.
          <br /><br />
          <strong className="text-red-500">Custom add-ons available.</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`rounded-xl shadow-md border ${pkg.bg} p-6`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-bold ${pkg.accent}`}>{pkg.title}</h3>
               
              </div>

              {/* Audience */}
              <div className="text-sm mb-6">
                <p className="font-bold text-gray-800 mb-2">Ideal for:</p>
                <div className="grid grid-cols-2 gap-2 text-black text-sm">
                  {pkg.audience.map((aud, i) => (
                    <div key={i}>• {aud}</div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2 text-gray-700 text-sm mb-6">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx}>{feat}</li>
                ))}
              </ul>

              {/* Footer */}
              <p className="text-xs text-black italic mb-4">
                Includes 3 months of free maintenance & support
              </p>

              <Link to={pkg.link} className="block">
                <button className="w-full py-2 rounded-md font-semibold text-white bg-gray-900 hover:bg-gray-800 transition">
                  {pkg.btnText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <PricingsBonusses />
    </div>
  );
}

export default Pricings;
