import React from 'react';
import websiteImg from '../assets/john1.jpeg'; 

function Website() {
  return (
    <div className="bg-gray-200 text-gray-800 py-36 px-6 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Image */}
        <div className="mb-10">
          <img
            src={websiteImg}
            alt="Why Every Business Needs a Website"
            className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-[#090909] uppercase">
          Why Every Business in Kenya Needs a Website  
        </h1>

        {/* Intro */}
        <p className="text-lg sm:text-xl mb-6 leading-relaxed text-center max-w-[700px] mx-auto">
          In today’s fast-changing Kenyan business environment, a website is no longer a luxury —
          it’s a necessity. From Nairobi’s bustling CBD to small towns like Nakuru and Eldoret,
          businesses that embrace digital presence are pulling ahead of those that don’t.  
          According to the <span className="font-semibold">Communications Authority of Kenya (CAK)</span>,
          Kenya’s internet penetration reached <span className="text-green-700 font-bold">over 40 million users</span> by 2023.
          That means your potential customers are already online — the question is, can they find you?
        </p>

        {/* Section: Case for a Website */}
        <h2 className="text-2xl font-bold mt-12 mb-4 text-[#090909]">
          The Competitive Edge of Having a Website
        </h2>
        <ul className="space-y-6">
          <li>
            <strong className="text-red-400">✅ Be Found Online:</strong><br />
            In Kenya, over <span className="font-semibold">70% of purchasing decisions</span> begin with an online search.
            For instance, a restaurant in Westlands with an active website listing its menu and
            location can attract tourists and locals searching on Google, while a similar
            restaurant without a website may remain invisible.
          </li>

          <li>
            <strong className="text-red-400">✅ Build Trust:</strong><br />
            Kenyan consumers are becoming more discerning.  
            A <span className="font-semibold">Safaricom SME study</span> revealed that businesses with websites and online reviews
            are perceived as <span className="font-semibold">40% more trustworthy</span> than those without.
          </li>

          <li>
            <strong className="text-red-400">✅ Sell or Book Online:</strong><br />
            E-commerce is thriving — think of <span className="font-semibold">Jumia, Kilimall, and Sky.Garden</span>.
            Even small businesses in Gikomba Market now sell via their websites and accept payments via
            <span className="font-semibold"> M-Pesa integrations</span>.  
            A simple website can mean 24/7 sales.
          </li>

          <li>
            <strong className="text-red-400">✅ Tell Your Story:</strong><br />
            From agribusinesses in Eldoret to tech startups in Nairobi’s Silicon Savannah,
            websites allow Kenyan entrepreneurs to showcase their journey, values, and success stories.
            A good story not only attracts customers but also investors.
          </li>

          <li>
            <strong className="text-red-400">✅ Control the Narrative:</strong><br />
            On social media, algorithms change constantly — but your website is yours to control.
            Kenyan law under the <span className="font-semibold">Data Protection Act of 2019</span>
            also supports businesses that own their digital assets responsibly, giving websites
            an additional edge in credibility.
          </li>
        </ul>

        {/* Case Studies */}
        <h2 className="text-2xl font-bold mt-12 mb-4 text-[#090909]">
          Real-Life Impacts in the Kenyan Market
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Consider <span className="font-semibold">Java House Kenya</span>. By investing in a sleek website
          with online ordering, Java expanded beyond foot traffic and increased its delivery sales significantly.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Another example is <span className="font-semibold">Twiga Foods</span>, a Kenyan agri-tech company.
          Their web presence enabled them to attract international investors, raising millions in funding
          while digitizing food supply chains across the country.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Even SMEs like small law firms in Upper Hill or boutique hotels in Naivasha are finding that
          a simple, well-designed website can multiply inquiries, bookings, and client trust.
        </p>

        {/* Closing Text */}
        <p className="text-lg sm:text-xl mt-8 leading-relaxed">
          Whether you're a boda boda operator looking to expand logistics, a farmer in Kisumu,
          or a startup in Nairobi, a website is one of the smartest investments you can make
          in your brand.
        </p>

        <p className="text-xl font-semibold text-center mt-10 text-green-700">
          Let’s build something that works for you — beautifully, simply, and effectively.
        </p>
      </div>
    </div>
  );
}

export default Website;
