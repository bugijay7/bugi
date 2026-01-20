import React, { useState, useEffect } from 'react';
import CauseImg from '../../assets/cause-banner.jpeg'; 
import axios from 'axios';

function CauseForms() {
  const [formData, setFormData] = useState({
    orgName: '',
    contactPerson: '',
    email: '',
    phone: '',
    mission: '',
    targetAudience: '',
    sections: [],
    branding: '',
    inspiration: '',
    timeline: '',
    extras: ''
  });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = "Cause Website Discovery | Yohan Labs";
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        sections: checked
          ? [...prev.sections, value]
          : prev.sections.filter((s) => s !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://bugi-2.onrender.com/api/causes', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Mission brief submitted successfully!');
      setFormData({
        orgName: '', contactPerson: '', email: '', phone: '',
        mission: '', targetAudience: '', sections: [],
        branding: '', inspiration: '', timeline: '', extras: ''
      });
    } catch (err) {
      console.error('Form submission failed:', err);
      alert('Submission failed. Try again.');
    }
  };

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white pb-32" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Editorial Header */}
      <section className="pt-32 pb-20 px-6 bg-[#0d2b35] text-[#f3e9e2] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#c9886b] text-xs font-black tracking-[0.5em] uppercase mb-6 block">Building for Good</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Cause <span className="text-[#c9886b] italic">Starter</span>
          </h1>
          <p className="text-[#f3e9e2]/60 text-sm tracking-[0.2em] uppercase font-bold">Empowering Organizations via Digital Homes</p>
        </div>
        {/* Abstract shape decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9886b] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        {/* Banner with shadow */}
        <div className="bg-white p-4 shadow-2xl mb-20">
          <img src={CauseImg} alt="Cause Banner" className="w-full h-72 md:h-[500px] object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Sidebar: The Vision */}
          <div className="lg:col-span-1 space-y-10">
            <div className="border-t-2 border-[#c9886b] pt-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>Inspire Action</h2>
              <p className="text-[#0d2b35]/70 text-sm leading-relaxed mb-8">
                A cause website gives your organization a digital home to share your mission, mobilize resources, and tell your story effectively.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Increase Awareness", desc: "Tell your story to the world." },
                  { title: "Mobilize Support", desc: "Recruit volunteers & donations." },
                  { title: "Build Trust", desc: "Impact reports & transparency." }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#c9886b] mb-1">{item.title}</h4>
                    <p className="text-sm font-light italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-white border border-[#0d2b35]/5 shadow-sm">
              <p className="text-xs italic leading-relaxed">
                "Whether you're a church, NGO, or community group, let's build a hub that connects your mission with the world."
              </p>
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-12 bg-white/50 p-8 md:p-12 backdrop-blur-sm rounded-sm">
              
              {/* Org Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Organization Name</label>
                  <input name="orgName" value={formData.orgName} onChange={handleChange} type="text" className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3 transition-all placeholder:text-[#0d2b35]/20" placeholder="e.g. Light For All Foundation" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Contact Person</label>
                  <input name="contactPerson" value={formData.contactPerson} onChange={handleChange} type="text" className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3 transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Phone / WhatsApp</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3 transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Describe Your Mission</label>
                <textarea name="mission" value={formData.mission} onChange={handleChange} rows="3" className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3 transition-all resize-none" placeholder="What cause do you stand for?" />
              </div>

              {/* Checkbox Section */}
              <div className="space-y-6">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Required Digital Features</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'About Us', 'Programs / Projects', 'Donation Page', 'Events Calendar',
                    'Team / Leadership', 'Blog / Stories', 'Newsletter', 'Contact Page'
                  ].map((sec) => (
                    <label key={sec} className={`flex items-center justify-between p-4 border transition-all cursor-pointer hover:border-[#c9886b] ${formData.sections.includes(sec) ? 'bg-[#0d2b35] border-[#0d2b35] text-white' : 'bg-white border-[#0d2b35]/10'}`}>
                      <span className="text-xs font-bold uppercase tracking-widest">{sec}</span>
                      <input
                        type="checkbox"
                        value={sec}
                        checked={formData.sections.includes(sec)}
                        onChange={handleChange}
                        className="accent-[#c9886b]"
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Additional Notes</label>
                <textarea name="extras" value={formData.extras} onChange={handleChange} rows="2" className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3 transition-all resize-none" />
              </div>

              <button type="submit" className="w-full bg-[#c9886b] text-white py-8 text-xs font-black uppercase tracking-[0.5em] hover:bg-[#0d2b35] transition-all duration-500 shadow-xl">
                Submit Mission Brief →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CauseForms;