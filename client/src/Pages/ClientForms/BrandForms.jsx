import React, { useState, useEffect } from 'react';
import BrandImg from '../../assets/brand-banner.jpeg';
import axios from 'axios';

function BrandForms() {
  const [formData, setFormData] = useState({
    fullName: '',
    brandName: '',
    email: '',
    phone: '',
    brandDescription: '',
    targetAudience: '',
    websiteGoal: '',
    siteSections: '',
    brandAssets: '',
    styleInspiration: '',
    features: [],
    timeline: '',
    notes: ''
  });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = "Brand Identity Brief | Yohan Labs";
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, value]
          : prev.features.filter((f) => f !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'https://bugi-2.onrender.com/api/brands',
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Brand identity brief submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error submitting the brief');
    }
  };

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white pb-32" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Premium Header */}
      <section className="pt-32 pb-20 px-6 bg-[#0d2b35] text-[#f3e9e2]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#c9886b] text-xs font-black tracking-[0.5em] uppercase mb-6 block">Identity Workshop</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Brand <span className="text-[#c9886b] italic">Portal</span>
          </h1>
          <p className="text-[#f3e9e2]/60 text-sm tracking-[0.2em] uppercase font-bold">Defining your digital essence</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white p-4 shadow-2xl mb-16">
          <img src={BrandImg} alt="Brand banner" className="w-full h-72 md:h-[500px] object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Creative Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-2xl font-black uppercase tracking-tighter border-b-2 border-[#c9886b] pb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              The Brief
            </h2>
            <p className="text-sm font-light leading-relaxed text-[#0d2b35]/70">
              Let’s create a website that <strong>captures your brand</strong>—moving beyond aesthetics into meaningful digital storytelling.
            </p>
            <div className="space-y-4">
              <div className="p-6 bg-white border border-[#0d2b35]/5 shadow-sm">
                <span className="text-[#c9886b] text-[10px] font-black uppercase tracking-widest block mb-2">Phase 01</span>
                <p className="text-xs italic">Discovery & Identity Mapping</p>
              </div>
              <div className="p-6 bg-white border border-[#0d2b35]/5 shadow-sm">
                <span className="text-[#c9886b] text-[10px] font-black uppercase tracking-widest block mb-2">Phase 02</span>
                <p className="text-xs italic">Visual Translation & UI Design</p>
              </div>
            </div>
          </div>

          {/* Detailed Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-12 bg-white/40 p-8 md:p-12 backdrop-blur-md">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#c9886b]">01. Core Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    ['Full Name', 'fullName', 'text'],
                    ['Brand Name', 'brandName', 'text'],
                    ['Email Address', 'email', 'email'],
                    ['Phone / WhatsApp', 'phone', 'tel'],
                  ].map(([label, name, type]) => (
                    <div key={name} className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-50">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3 transition-all"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand Narrative */}
              <div className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#c9886b]">02. Brand Narrative</h3>
                {[
                  ['Describe your brand vision', 'brandDescription'],
                  ['Who is your target audience?', 'targetAudience'],
                  ['Style inspirations or competitor links', 'styleInspiration'],
                ].map(([label, name]) => (
                  <div key={name} className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-50">{label}</label>
                    <textarea
                      name={name}
                      rows={2}
                      value={formData[name]}
                      onChange={handleChange}
                      className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3 transition-all resize-none"
                    />
                  </div>
                ))}
              </div>

              {/* Strategy & Selection */}
              <div className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#c9886b]">03. Site Strategy</h3>
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Main Website Goal</label>
                  <select
                    name="websiteGoal"
                    value={formData.websiteGoal}
                    onChange={handleChange}
                    className="bg-white border border-[#0d2b35]/10 p-4 outline-none focus:border-[#c9886b] appearance-none"
                  >
                    <option value="">Select one</option>
                    <option>Get more leads</option>
                    <option>Showcase services</option>
                    <option>Build brand awareness</option>
                    <option>Sell online</option>
                  </select>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Required Features</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      'Contact form', 'Booking system', 'Blog',
                      'Newsletter signup', 'Testimonials', 'Video content'
                    ].map((feature) => (
                      <label key={feature} className={`flex items-center gap-3 p-4 border transition-all cursor-pointer ${formData.features.includes(feature) ? 'bg-[#0d2b35] text-white border-[#0d2b35]' : 'bg-white border-[#0d2b35]/10 hover:border-[#c9886b]'}`}>
                        <input
                          type="checkbox"
                          value={feature}
                          checked={formData.features.includes(feature)}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Final Timeline */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Desired Timeline</label>
                <input
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g. 2–4 weeks"
                  className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3"
                />
              </div>

              <button type="submit" className="w-full bg-[#c9886b] text-white py-8 text-xs font-black uppercase tracking-[0.5em] hover:bg-[#0d2b35] transition-all duration-500 shadow-xl">
                Submit Brand Identity Brief →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandForms;