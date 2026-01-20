import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import your images
import frontendImg from "../assets/services/frontend.jpeg";
import backendImg from "../assets/services/backend.jpeg";
import fullstackImg from "../assets/services/fullstack.jpeg";
import cmsImg from "../assets/services/cms.jpeg";
import collabImg from "../assets/services/collab.jpeg";
import apiImg from "../assets/services/api.jpeg";
import devopsImg from "../assets/services/devops.jpeg";
import performanceImg from "../assets/services/perfomance.jpeg";
import securityImg from "../assets/services/security.jpeg";

const faqs = [
  { question: "Frontend Development", answer: "Clean, modern, and mobile-friendly websites designed to look great on all devices.", image: frontendImg },
  { question: "Backend Development", answer: "Secure and scalable systems built to handle data and business processes efficiently.", image: backendImg },
  { question: "Full-Stack Solutions", answer: "End-to-end solutions from database to design, ensuring smooth project delivery.", image: fullstackImg },
  { question: "Content Management (CMS)", answer: "Easy-to-use tools so content can be updated anytime without technical knowledge.", image: cmsImg },
  { question: "Collaboration", answer: "Developed through close partnership, ensuring goals and vision are fully achieved.", image: collabImg },
  { question: "API Integration", answer: "Seamless connection with payment systems, social media, and third-party tools.", image: apiImg },
  { question: "Deployment & Hosting", answer: "Launched on reliable platforms with ongoing support for stability and uptime.", image: devopsImg },
  { question: "Performance", answer: "Optimized for speed and efficiency, improving user experience and SEO rankings.", image: performanceImg },
  { question: "Security", answer: "Latest security practices applied to protect data and maintain safe digital experiences.", image: securityImg },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first item

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = "Web Development Services | Yohan Labs Nairobi";
  }, []);

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Header Section */}
      <section className="pt-32 pb-20 px-6 border-b border-[#0d2b35]/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#c9886b] text-xs font-black tracking-[0.6em] uppercase mb-8 block">Our Capabilities</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]" style={{ fontFamily: '"Playfair Display", serif' }}>
              Digital <br /> <span className="text-[#c9886b] italic">Services</span>
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed text-[#0d2b35]/80 max-w-md border-l-2 border-[#c9886b] pl-6">
              We provide a wide range of digital services to help businesses succeed online through precision engineering and intentional design.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Interaction */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Left: Accordion List */}
          <div className="lg:w-1/2 flex flex-col border-t border-[#0d2b35]/10">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#0d2b35]/10">
                <button 
                  onClick={() => setActiveIndex(index)}
                  className="w-full py-8 flex items-center justify-between text-left group transition-all"
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-xs font-bold transition-colors ${activeIndex === index ? 'text-[#c9886b]' : 'text-[#0d2b35]/30'}`}>
                      0{index + 1}
                    </span>
                    <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-tight transition-all ${activeIndex === index ? 'translate-x-4 text-[#c9886b]' : 'group-hover:translate-x-2'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <span className={`text-2xl transition-transform duration-500 ${activeIndex === index ? 'rotate-45 text-[#c9886b]' : ''}`}>
                    +
                  </span>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40 pb-8 pl-14' : 'max-h-0'}`}>
                  <p className="text-[#0d2b35]/70 leading-relaxed max-w-md">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual Preview (Sticky) */}
          <div className="lg:w-1/2 h-fit lg:sticky lg:top-32 order-first lg:order-last">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#0d2b35]">
              {faqs.map((faq, index) => (
                <img
                  key={index}
                  src={faq.image}
                  alt={faq.question}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    activeIndex === index ? 'opacity-70 scale-100' : 'opacity-0 scale-110'
                  }`}
                />
              ))}
              {/* Overlay Decor */}
              <div className="absolute inset-0 border-[20px] border-[#f3e9e2]/10 pointer-events-none"></div>
              <div className="absolute bottom-10 left-10 right-10 z-10">
                 <p className="text-white text-xs tracking-[0.4em] uppercase font-bold mb-2">Core Service</p>
                 <div className="h-1 w-20 bg-[#c9886b]"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-32 px-6 bg-[#0d2b35] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-[#f3e9e2] mb-12 tracking-tighter leading-none uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready to see <br /> our <span className="italic text-[#c9886b]">results?</span>
          </h2>
          <Link 
            to="/work" 
            className="inline-block bg-[#c9886b] text-white hover:bg-[#f3e9e2] hover:text-[#0d2b35] font-black py-8 px-16 transition-all tracking-[0.5em] uppercase text-xs shadow-xl"
          >
            See Hand-Picked Projects
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Services;