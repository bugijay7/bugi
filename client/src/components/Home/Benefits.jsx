import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import shapeImg from '../../assets/shape.jpeg'; 

function Benefits() {
  const items = [
    {
      title: 'Clarity that Sells',
      text: 'Clear product descriptions, prices, and delivery details so shoppers know exactly what they’re getting—no endless calls or confusion.',
    },
    {
      title: 'Mobile-First Design',
      text: 'Most Kenyans shop on their phones. Your site will feel fast, smooth, and natural on any mobile device.',
    },
    {
      title: 'Build Instant Trust',
      text: 'Showcase Mpesa Paybill/Till numbers, verified reviews, and secure payment badges that give shoppers confidence to buy.',
    },
    {
      title: 'SEO for Local Reach',
      text: 'Optimised pages so people searching “buy furniture in Nairobi” or “fresh produce in Kisumu” find your store first.',
    },
    {
      title: 'Fast & Reliable',
      text: 'Quick load times even on slower connections—because a few extra seconds could cost you a sale.',
    },
    {
      title: 'Clear Next Steps',
      text: 'Easy “Add to Cart” and checkout buttons so customers don’t get lost before completing their purchase.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#d9b17f] pt-20 pb-20 px-6">
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">

        {/* Left - Content */}
        <div className="flex flex-col justify-between">
          <div>
            <header className="mb-10">
              <h2 className="text-3xl font-extrabold text-[#2a3b2b] mb-4">
                Benefits that actually move products
              </h2>
              <p className="text-gray-200 leading-relaxed max-w-xl">
                In Kenya’s busy online marketplace, you have seconds to convince a shopper to trust you and buy.
                These essentials make your e-commerce site work harder for every click.
              </p>
            </header>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((b, i) => (
                <article
                  key={i}
                  className="bg-[#2a3b2b] rounded-xl p-5 flex flex-col gap-3
                             shadow-md hover:shadow-xl transition"
                >
                  <FaCheckCircle
                    className="text-[#e4870e] text-2xl"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm md:text-lg font-semibold text-[#d9b17f]">
                    {b.title}
                  </h3>
                  <p className="text-white text-xs md:text-sm leading-relaxed">
                    {b.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <p className="mb-3 text-sm text-gray-200">
              Let’s set up a store that earns while you sleep.
            </p>
            <a
              href="/ClientForms/StoreForms"
              className="inline-block px-6 py-3 bg-[#2a3b2b] text-white
                         rounded-lg shadow-md hover:bg-red-600 transition"
            >
              Start your online store
            </a>
          </div>
        </div>

        {/* Right - Shape Image */}
        <div className="hidden md:flex justify-end">
          <img
            src={shapeImg}
            alt=""
            className="md:w-[620px] w-full opacity-90"
            aria-hidden="true"
          />
        </div>

      </div>
    </section>
  );
}

export default Benefits;
