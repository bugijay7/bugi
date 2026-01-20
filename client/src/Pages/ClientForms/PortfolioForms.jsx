import React, { useState, useEffect } from 'react';
import PortfolioImg from '../../assets/portfolio-banner.jpeg'; 
import axios from 'axios';

function PortfolioForms() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    profession: '',
    portfolioGoal: '',
    workTypes: '',
    sections: [],
    designPrefs: '',
    timeline: '',
    notes: '',
  });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = "Portfolio Questionnaire | Yohan Labs";
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        sections: checked
          ? [...prev.sections, value]
          : prev.sections.filter((section) => section !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://bugi-2.onrender.com/api/portfolios', formData); 
      alert('Portfolio form submitted successfully!');
      setFormData({
        fullName: '', email: '', phone: '', profession: '',
        portfolioGoal: '', workTypes: '', sections: [],
        designPrefs: '', timeline: '', notes: '',
      });
    } catch (err) {
      console.error('Form submission failed:', err);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white pb-32" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 text-center bg-[#0d2b35] text-[#f3e9e2]">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#c9886b] text-xs font-black tracking-[0.5em] uppercase mb-6 block">Step One: Discovery</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
            Portfolio <br /> <span className="text-[#c9886b] italic">Brief</span>
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-white p-4 shadow-2xl">
          <img src={PortfolioImg} alt="Banner" className="w-full h-64 md:h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 py-20">
          
          {/* Left: Intro / Education */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>Why it matters</h2>
              <p className="text-[#0d2b35]/70 leading-relaxed mb-8">
                A personal portfolio is your digital stage—where you showcase your work and personality beyond social media algorithms.
              </p>
              <ul className="space-y-4">
                {[
                  { label: "Professional Branding", desc: "A polished unique online identity." },
                  { label: "Showcase Work", desc: "Organized and engaging projects." },
                  { label: "Global Reach", desc: "Share talent with audiences 24/7." }
                ].map((item, i) => (
                  <li key={i} className="border-l-2 border-[#c9886b] pl-4">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-[#c9886b]">{item.label}</span>
                    <span className="text-sm font-light">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-[#0d2b35] text-white italic text-sm">
              "Fill out this brief to help us design a portfolio that reflects your creative vision."
            </div>
          </div>

          {/* Right: The Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Full Name</label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="bg-transparent border-b-2 border-[#0d2b35]/10 focus:border-[#c9886b] outline-none py-3 transition-colors" placeholder="e.g. Kibugi Maina" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" className="bg-transparent border-b-2 border-[#0d2b35]/10 focus:border-[#c9886b] outline-none py-3 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Phone / WhatsApp</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="bg-transparent border-b-2 border-[#0d2b35]/10 focus:border-[#c9886b] outline-none py-3 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Your Profession</label>
                  <input name="profession" value={formData.profession} onChange={handleChange} type="text" className="bg-transparent border-b-2 border-[#0d2b35]/10 focus:border-[#c9886b] outline-none py-3 transition-colors" placeholder="e.g. Photographer" />
                </div>
              </div>

              {/* Selection Fields */}
              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50">What is the primary goal?</label>
                <select name="portfolioGoal" value={formData.portfolioGoal} onChange={handleChange} className="bg-white border border-[#0d2b35]/10 p-4 outline-none focus:border-[#c9886b] appearance-none">
                  <option value="">-- Select --</option>
                  <option>Showcase creative work</option>
                  <option>Find a job</option>
                  <option>Attract clients / freelance work</option>
                  <option>Document personal projects</option>
                </select>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Required Sections</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["About Me", "Portfolio / Projects", "Resume / CV", "Testimonials", "Blog", "Contact"].map((section) => (
                    <label key={section} className={`flex items-center gap-4 p-4 border transition-all cursor-pointer ${formData.sections.includes(section) ? 'bg-[#c9886b] border-[#c9886b] text-white' : 'bg-white border-[#0d2b35]/10'}`}>
                      <input type="checkbox" value={section} checked={formData.sections.includes(section)} onChange={handleChange} className="hidden" />
                      <span className="text-xs font-bold uppercase tracking-widest">{section}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Design Inspiration & Notes</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} rows="4" className="bg-white border border-[#0d2b35]/10 p-4 outline-none focus:border-[#c9886b]" placeholder="Any specific websites or styles you love?" />
              </div>

              <button type="submit" className="w-full bg-[#c9886b] text-white py-8 text-xs font-black uppercase tracking-[0.5em] hover:bg-[#0d2b35] transition-all duration-500 shadow-xl">
                Submit Portfolio Brief →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioForms;