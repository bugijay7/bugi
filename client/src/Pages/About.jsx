import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import kibugi from '../assets/maina.jpeg';
import maina from '../assets/kibugi.jpg';

function About() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = "About Yohan Labs | Professional Web Design & Development in Nairobi";
  }, []);

  const skills = [
    { title: 'Frontend Development', description: 'Building responsive, accessible, and interactive interfaces.', items: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Framer Motion'] },
    { title: 'Backend Development', description: 'Creating scalable APIs and managing business logic.', items: ['Node.js', 'Express.js', 'JWT Auth', 'Bcrypt', 'RESTful APIs'] },
    { title: 'Databases & ORM', description: 'Efficient data modeling and handling.', items: ['PostgreSQL', 'MongoDB', 'Mongoose', 'Prisma', 'pgAdmin'] },
    { title: 'Hosting & SEO', description: 'Production hosting and performance tuning.', items: ['DNS Management', 'Search Console', 'SEO Meta', 'Speed Opt', 'SSL'] },
  ];

  const faqs = [
    { question: "Frontend engineering", answer: "Specialized in building responsive interfaces using <strong>React</strong> and <strong>Modern JS</strong>." },
    { question: "Backend development", answer: "Experienced in secure APIs with <strong>Node.js</strong> and <strong>PostgreSQL</strong>." },
    { question: "Full-stack workflows", answer: "End-to-end architecture using <strong>MERN</strong> and <strong>PERN</strong> stacks." },
    { question: "Collaboration", answer: "Works closely with designers in <strong>agile</strong> workflows." },
  ];

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Hero Header */}
      <section className="pt-32 pb-20 px-6 border-b border-[#0d2b35]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <p className="text-4xl md:text-7xl font-black leading-none tracking-tighter uppercase italic text-[#0d2b35]" style={{ fontFamily: '"Playfair Display", serif' }}>
            PASSIONATE <br /> CREATIVE <br /> <span className="text-[#c9886b]">DEVELOPER</span>
          </p>

          <div className="relative group">
            {/* Terracotta Border Accent */}
            <div className="absolute inset-0 border-2 border-[#c9886b] translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            <img src={kibugi} alt="Kibugi Maina" className="w-80 h-[450px] object-cover relative z-10 hover:sepia-[0.3] transition-all duration-700 shadow-2xl" />
          </div>

          <p className="text-right text-sm tracking-[0.5em] font-bold border-r-4 border-[#c9886b] pr-6 uppercase">
            BASED IN <br /> NAIROBI, KE
          </p>
        </div>
      </section>

      {/* Philosophy Section - Deep Teal Background */}
      <section className="py-32 px-6 bg-[#0d2b35] text-[#f3e9e2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-3xl md:text-5xl leading-tight mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
              A continuous exploration fueled by a <span className="italic text-[#c9886b]">curious mind.</span>
            </p>
            <span className="text-xs tracking-[0.8em] uppercase font-bold text-[#c9886b]">Kibugi Maina — Founder</span>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-lg font-light text-[#f3e9e2]/70 leading-relaxed">
              I'm a full-stack developer with experience creating scalable products and user-focused web applications. I bridge the gap between design and engineering.
            </p>
            <img src={maina} alt="Kibugi" className="w-full h-64 object-cover border border-[#c9886b]/30" />
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-[#0d2b35] tracking-tighter uppercase mb-20" style={{ fontFamily: '"Playfair Display", serif' }}>
            Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0d2b35]/10 border border-[#0d2b35]/10">
            {skills.map((cluster) => (
              <div key={cluster.title} className="bg-white p-10 hover:bg-[#c9886b] group transition-all duration-500">
                <h3 className="text-lg font-black mb-4 uppercase tracking-widest text-[#0d2b35] group-hover:text-white">{cluster.title}</h3>
                <p className="text-sm mb-8 text-[#0d2b35]/70 group-hover:text-white/90">{cluster.description}</p>
                <ul className="flex flex-col gap-2">
                  {cluster.items.map((item) => (
                    <li key={item} className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9886b] group-hover:bg-[#0d2b35]"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A Section - Terracotta Accents */}
      <section className="py-32 px-6 bg-[#f3e9e2] border-t border-[#0d2b35]/5">
        <div className="max-w-4xl mx-auto divide-y divide-[#0d2b35]/10">
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4 group">
            <div className="text-xl font-bold uppercase italic text-[#c9886b] group-hover:text-[#0d2b35] transition-colors">Freelance & Contract</div>
            <div className="font-light text-[#0d2b35]/80">Yes, I am currently available for high-impact freelance and contract partnerships globally.</div>
          </div>
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4 group">
            <div className="text-xl font-bold uppercase italic text-[#c9886b] group-hover:text-[#0d2b35] transition-colors">Design + Code</div>
            <div className="font-light text-[#0d2b35]/80">While development is my core, I provide UI/UX design to ensure a cohesive end-to-end product journey.</div>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-32 px-6 border-b border-[#0d2b35]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-l-2 border-[#c9886b] pl-8">
              <div className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-[#0d2b35]/40">0{index + 1}</div>
              <div className="text-xl font-bold uppercase mb-4 tracking-tighter text-[#0d2b35]">{faq.question}</div>
              <div className="text-sm font-light leading-relaxed text-[#0d2b35]/70" dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA - High Contrast Deep Teal */}
      <section className="py-40 px-6 text-center bg-[#0d2b35]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-[#f3e9e2] mb-16 tracking-tighter leading-none uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>
            Building <br /> <span className="italic text-[#c9886b]">Greatness</span> <br /> One step at a time
          </h2>
          <Link 
            to="/about/creative-process" 
            className="inline-block bg-[#c9886b] text-white hover:bg-[#f3e9e2] hover:text-[#0d2b35] font-black py-8 px-20 transition-all tracking-[0.5em] uppercase text-xs"
          >
            Our Creative Process →
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;