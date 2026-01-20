import React, { useEffect } from 'react';
import contactImage from '../assets/contact.jpeg';

function Contacts() {
  useEffect(() => {
    // Injecting Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = "Contact | Yohan Labs Nairobi";
  }, []);

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Split Hero Section */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Side: Visual */}
        <div className="lg:w-1/2 h-[50vh] lg:h-screen relative overflow-hidden bg-[#0d2b35]">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b35] via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12">
            <p className="text-[#c9886b] text-xs font-black tracking-[0.5em] uppercase mb-4">Connection</p>
            <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>
              LET'S BUILD <br /> <span className="italic text-[#c9886b]">TOGETHER</span>
            </h1>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 px-8 lg:px-20 py-20 flex flex-col justify-center">
          
          <section className="mb-20">
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-[#c9886b] mb-6">Introduction</h2>
            <p className="text-2xl md:text-4xl leading-snug tracking-tight font-light italic" style={{ fontFamily: '"Playfair Display", serif' }}>
              Whether you're ready to start a project, have questions, or just want to connect, my inbox is always open.
            </p>
          </section>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#0d2b35]/10 pt-12">
            
            {/* Email Section */}
            <section className="flex flex-col gap-4">
              <p className="text-xs font-black tracking-[0.3em] uppercase text-[#0d2b35]/50">
                Send me a message
              </p>
              <div className="flex flex-col gap-2">
                <a href="mailto:yohanlabs@gmail.com" className="text-lg font-bold hover:text-[#c9886b] transition-colors underline decoration-[#c9886b]/30 underline-offset-8">
                  yohanlabske@gmail.com
                </a>
                <a href="mailto:bugijay7@gmail.com" className="text-lg font-bold hover:text-[#c9886b] transition-colors underline decoration-[#c9886b]/30 underline-offset-8">
                  bugijay7@gmail.com
                </a>
              </div>
            </section>

            {/* Address */}
            <section className="flex flex-col gap-4">
              <p className="text-xs font-black tracking-[0.3em] uppercase text-[#0d2b35]/50">
                Office Address
              </p>
              <p className="text-lg leading-relaxed">
                Kiambu, Kenya — Yohan Labs HQ<br />
                <span className="font-light text-[#0d2b35]/70 italic">Off Waiyaki Way, Kiambaa</span>
              </p>
            </section>

            {/* Hours */}
            <section className="flex flex-col gap-4">
              <p className="text-xs font-black tracking-[0.3em] uppercase text-[#0d2b35]/50">
                Availability
              </p>
              <div className="text-sm font-bold uppercase tracking-widest flex flex-col gap-1">
                <span>Mon – Fri: <span className="text-[#c9886b]">24hrs</span></span>
                <span>Sat – Sun: <span className="text-[#c9886b]">24hrs</span></span>
              </div>
            </section>

            {/* Footer Note */}
            <section className="flex flex-col gap-4">
               <p className="text-xs font-black tracking-[0.3em] uppercase text-[#0d2b35]/50">
                Personal Touch
              </p>
              <p className="text-sm font-light leading-relaxed italic border-l-2 border-[#c9886b] pl-4">
                No bots, no waiting lines — just a real human excited to hear from you.
              </p>
            </section>

          </div>

          {/* Social / CTA Link */}
          <div className="mt-20">
             <a 
               href="https://www.instagram.com/yohanlabske/" 
               className="inline-block bg-[#0d2b35] text-[#f3e9e2] px-12 py-6 text-xs font-black uppercase tracking-[0.4em] hover:bg-[#c9886b] transition-all duration-500"
             >
               keep up with us on Instagram
             </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contacts;