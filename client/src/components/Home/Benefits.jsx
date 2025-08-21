import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import benefitsImg from '../../assets/benefits.jpeg';

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
    <section className="px-6  bg-gray-200 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* Left Side - Image */}
        <div className="flex">
          <img
            src={benefitsImg}
            alt="E-commerce benefits illustration"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-between">
          <div>
            <header className="mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Benefits that actually move products
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In Kenya’s busy online marketplace, you have seconds to convince a shopper to trust you and buy.  
                These essentials make your e-commerce site work harder for every click.
              </p>
            </header>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((b, i) => (
                <article
                  key={i}
                  className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-3 hover:shadow-lg transition"
                >
                  <FaCheckCircle className="text-green-500 text-2xl" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-gray-800">{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.text}</p>
                </article>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/ClientForms/StoreForms"
              className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
              aria-label="Start your project"
            >
              Start your online store
            </a>
            <p className="mt-3 text-sm text-gray-500">
              Let’s set up a store that earns while you sleep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
