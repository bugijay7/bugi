import React from 'react';
import websiteImg from '../assets/john.jpg'; // Replace with your actual image path

function Website() {
  return (
    <div className="bg-gray-200 text-gray-800 py-36 px-6 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* Image */}
        <div className="mb-10">
          <img
            src={websiteImg}
            alt="Why You Need a Website"
            className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-[#090909] uppercase">
          Why Every Business Needs a Website
        </h1>

        {/* Intro */}
        <p className="text-lg sm:text-xl mb-6 leading-relaxed text-center max-w-[600px] mx-auto">
          In today’s digital world, your website is more than just an online presence — it’s your 24/7 salesperson, your brand ambassador, and often the first impression you make on potential customers.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-6">
          <li>
            <strong className="text-red-400">✅ Be Found Online:</strong><br />
            Most people search online before making any decision. A website ensures your business shows up when they’re looking.
          </li>

          <li>
            <strong className="text-red-400">✅ Build Trust:</strong><br />
            A professional, well-designed website adds credibility to your brand. It shows you're real, reliable, and serious about what you do.
          </li>

          <li>
            <strong className="text-red-400">✅ Sell or Book Online:</strong><br />
            Whether it’s products, services, or appointments — your website makes it easy for people to engage with you from anywhere, anytime.
          </li>

          <li>
            <strong className="text-red-400">✅ Tell Your Story:</strong><br />
            Share what makes your business unique. Highlight your values, team, work, and success stories.
          </li>

          <li>
            <strong className="text-red-400">✅ Control the Narrative:</strong><br />
            Unlike social media, you own your website. You decide the message, the design, and how your business is represented.
          </li>
        </ul>

        {/* Closing Text */}
        <p className="text-lg sm:text-xl mt-8 leading-relaxed">
          Whether you're just starting out or growing fast, a website is one of the smartest investments you can make in your brand.
        </p>

        <p className="text-xl font-semibold text-center mt-10 text-green-700">
          Let’s build something that works for you — beautifully, simply, and effectively.
        </p>
      </div>
    </div>
  );
}

export default Website;
