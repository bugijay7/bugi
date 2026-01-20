import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const path = location.pathname;

  // Year for dynamic copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d2b35] text-[#f3e9e2] pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Navigation & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 relative z-10">
          
          {/* Identity */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>
                Kibugi <span className="text-[#c9886b] italic">Maina</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c9886b]">Interactive Developer</span>
            </div>
            <p className="text-xs font-light leading-relaxed opacity-50 max-w-[200px]">
              Crafting digital experiences that merge technical precision with creative soul. Based in Nairobi, Kenya.
            </p>
          </div>

          {/* Directory */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mb-2">Directory</span>
            {[
              { label: 'About', to: '/about' },
              { label: 'Works', to: '/work' },
              { label: 'Pricing', to: '/pricings' },
              { label: 'Contact', to: '/contacts' },
            ].map(({ label, to }) => (
              <Link 
                key={label} 
                to={to}
                className={`text-sm uppercase tracking-widest font-bold hover:text-[#c9886b] transition-colors w-fit ${path === to ? 'text-[#c9886b]' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Credits & Social */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mb-2">Connect</span>
            <div className="space-y-1">
              <p className="text-sm font-bold uppercase tracking-widest">Development: Kibugi Maina</p>
              <p className="text-sm font-bold uppercase tracking-widest">Design: Yohan Labs</p>
            </div>
            <div className="pt-4">
               <a href="mailto:hello@yohanlabs.com" className="text-xs italic border-b border-[#c9886b] pb-1 hover:text-[#c9886b] transition-all">
                 yohanlabske@gmail.com
               </a>
                
            </div>
          </div>
        </div>

        {/* Bottom Section: Giant Watermark & Legal */}
        <div className="relative border-t border-[#f3e9e2]/10 pt-12">
          {/* Large Decorative Text */}
          <div className="absolute -bottom-10 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.03]">
            <h2 className="text-[15vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap">
              YOHAN LABS STUDIO
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest opacity-40">
              <p>© {currentYear} All Rights Reserved</p>
              <p>Built with React & Passion</p>
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] font-black uppercase tracking-widest hover:text-[#c9886b] transition-all flex items-center gap-2"
            >
              Back to Top <span className="text-lg">↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;