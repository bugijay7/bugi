import React, { useEffect } from 'react';
import earth from '../assets/earth.jpeg';
import turs from '../assets/turs.jpg';
import muscleDistrict from '../assets/muscledistrict.jpg';
import kashio from '../assets/kashio.jpg';
import furniq from '../assets/furniq.JPG';
import afc from '../assets/AFC.png';
import zoe from '../assets/zoe.png';
import Cta from '../components/Home/Cta';

function Work() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = "Portfolio & Projects | Yohan Labs - Web Design in Nairobi";
  }, []);

  const projects = [
    {
      title: "Zoe Center",
      desc: "A welcoming, easy-to-navigate website allowing visitors to learn about services, ministries, and events while improving digital communication.",
      img: zoe,
      link: "https://zoewc.vercel.app",
      category: "COMMUNITY / RELIGION"
    },
    {
      title: "AFC KIAMBAA",
      desc: "A responsive church website designed to showcase ministry, events, and community outreach while improving online visibility.",
      img: afc,
      link: "https://afckiambaa.vercel.app",
      category: "COMMUNITY / RELIGION"
    },
    {
      title: "Forked Up",
      desc: "An online hub showcasing menu and ambiance, allowing customers to explore and connect with the dining experience.",
      img: earth,
      link: "https://forkedup-phi.vercel.app",
      category: "HOSPITALITY"
    },
    {
      title: "Upper Room Sanctuary",
      desc: "A digital platform sharing missions, sermons, and ways for the community to connect and grow in faith.",
      img: turs,
      link: "https://turs120.vercel.app",
      category: "COMMUNITY / RELIGION"
    },
    {
      title: "Muscle District",
      desc: "A local gym website showcasing powerful training programs and expert coaching designed to help you build strength.",
      img: muscleDistrict,
      link: "https://muscle-district.vercel.app",
      category: "HEALTH & FITNESS"
    },
    {
      title: "Kashio Bubbles",
      desc: "Modern laundromat website offering convenient laundry services with online scheduling and doorstep pickup.",
      img: kashio,
      link: "https://kashiobubbles.vercel.app",
      category: "SERVICE / TECH"
    },
    {
      title: "Furniq Works",
      desc: "A modern furniture store offering stylish pieces with seamless online shopping and doorstep delivery.",
      img: furniq,
      link: "https://furniq-five.vercel.app",
      category: "E-COMMERCE / RETAIL"
    }
  ];

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Header Section */}
      <section className="pt-32 pb-20 px-6 border-b border-[#0d2b35]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>
            PROJECT <br /> <span className="text-[#c9886b] italic">LABS</span>
          </h1>
          <div className="max-w-md text-right border-r-4 border-[#c9886b] pr-6">
            <p className="text-[#c9886b] text-xs font-black tracking-[0.5em] uppercase mb-4">Selected Works</p>
            <p className="text-sm font-light leading-relaxed text-[#0d2b35]/70">
              A curated collection of digital experiences built through a fusion of personal, collaborative, and client-owned projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 divide-y divide-[#0d2b35]/10">
        {projects.map((proj, index) => (
          <section key={index} className={`flex flex-col lg:flex-row gap-12 py-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Project Info */}
            <div className="lg:w-1/2 space-y-6">
              <span className="text-[#c9886b] text-xs font-black tracking-[0.4em] uppercase">{proj.category}</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                {proj.title}
              </h2>
              <p className="text-lg font-light leading-relaxed text-[#0d2b35]/80 max-w-lg">
                {proj.desc}
              </p>
              <div className="pt-4">
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border-b-2 border-[#c9886b] pb-2 text-xs font-black uppercase tracking-[0.4em] hover:text-[#c9886b] transition-all"
                >
                  Launch Project →
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="lg:w-1/2 w-full group overflow-hidden bg-[#0d2b35]">
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full aspect-[4/3] object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
                />
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <div className=" py-10">
        <Cta />
      </div>

    </div>
  );
}

export default Work;