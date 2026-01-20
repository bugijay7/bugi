import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import websiteImg from '../assets/john1.jpeg';

function Website() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = "Why Every Business in Kenya Needs a Website | Yohan Labs";
  }, []);

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden bg-[#0d2b35]">
        <img
          src={websiteImg}
          alt="Why Every Business Needs a Website"
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter max-w-5xl leading-[0.9]" style={{ fontFamily: '"Playfair Display", serif' }}>
            The Digital <br /> <span className="text-[#c9886b] italic">Imperative</span> in Kenya
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        
        {/* Intro */}
        <section className="mb-20">
          <span className="text-[#c9886b] text-xs font-black tracking-[0.5em] uppercase mb-8 block">Article / Market Insights</span>
          <p className="text-2xl md:text-3xl font-light leading-snug italic mb-10 text-[#0d2b35]" style={{ fontFamily: '"Playfair Display", serif' }}>
            In today’s fast-changing Kenyan business environment, a website is no longer a luxury — it’s a necessity.
          </p>
          <div className="flex flex-col gap-6 text-[#0d2b35]/80 text-lg leading-relaxed border-l-4 border-[#c9886b] pl-8">
            <p>
              From Nairobi’s bustling CBD to small towns like Nakuru and Eldoret, businesses that embrace digital presence are pulling ahead of those that don’t.
            </p>
            <p>
              According to the <span className="font-bold text-[#0d2b35]">Communications Authority of Kenya (CAK)</span>, Kenya’s internet penetration reached <span className="text-[#c9886b] font-bold">over 40 million users</span> by 2023. That means your potential customers are already online — the question is, can they find you?
            </p>
          </div>
        </section>

        {/* Section: Competitive Edge */}
        <section className="mb-32">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 border-b border-[#0d2b35]/10 pb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            The Competitive <span className="text-[#c9886b]">Edge</span>
          </h2>
          
          <div className="space-y-16">
            {[
              { title: "Be Found Online", content: "Over 70% of purchasing decisions in Kenya begin with an online search. A Westlands restaurant with a website wins while invisible competitors lose out." },
              { title: "Build Trust", content: "Safaricom SME studies reveal businesses with websites are perceived as 40% more trustworthy. Trust is the currency of the digital market." },
              { title: "Sell or Book Online", content: "E-commerce is thriving via M-Pesa integrations. A website means your shop in Gikomba never closes—it sells 24/7." },
              { title: "Tell Your Story", content: "From Eldoret agribusinesses to Nairobi startups, your story attracts investors. Control your narrative outside of social media algorithms." }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <h3 className="text-xs font-black tracking-[0.3em] uppercase text-[#c9886b] mb-4">0{idx + 1} — {item.title}</h3>
                <p className="text-xl font-light leading-relaxed group-hover:text-[#0d2b35] transition-colors">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pull Quote Section */}
        <section className="bg-[#0d2b35] p-12 lg:p-20 my-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9886b] opacity-10 translate-x-16 -translate-y-16 rounded-full"></div>
          <p className="text-[#f3e9e2] text-3xl md:text-4xl italic font-serif leading-tight relative z-10" style={{ fontFamily: '"Playfair Display", serif' }}>
            "Kenyan law under the <span className="text-[#c9886b]">Data Protection Act of 2019</span> supports businesses that own their digital assets responsibly."
          </p>
        </section>

        {/* Case Studies */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>Market Impacts</h2>
            <div className="space-y-6 text-[#0d2b35]/70">
              <p>Consider <span className="text-[#0d2b35] font-bold">Java House Kenya</span>. Their sleek website enabled delivery sales that footprint traffic alone couldn't touch.</p>
              <p><span className="text-[#0d2b35] font-bold">Twiga Foods</span> used their web presence to attract international investors, raising millions to digitize supply chains.</p>
            </div>
          </div>
          <div className="bg-[#c9886b] p-8 flex flex-col justify-center">
            <p className="text-white font-bold text-lg leading-snug">
              Even SMEs in Naivasha or Upper Hill are finding that a well-designed website multiplies inquiries and client trust instantly.
            </p>
          </div>
        </section>

        {/* Closing Text */}
        <section className="text-center py-20 border-t border-[#0d2b35]/10">
          <p className="text-2xl font-light italic mb-12 leading-relaxed" style={{ fontFamily: '"Playfair Display", serif' }}>
            Whether you're a farmer in Kisumu or a startup in Nairobi, a website is the smartest investment you can make.
          </p>
          
          <Link to="/ClientForms/StoreForms">
            <button className="bg-[#0d2b35] text-white px-12 py-8 text-xs font-black uppercase tracking-[0.5em] hover:bg-[#c9886b] hover:scale-105 transition-all duration-500 shadow-2xl">
              Get Your Online Shop Started
            </button>
          </Link>
        </section>

      </div>
    </div>
  );
}

export default Website;