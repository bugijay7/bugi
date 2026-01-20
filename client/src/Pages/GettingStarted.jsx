import React, { useState, useEffect } from 'react';
import bgImage from '../assets/hero8.jpg';
import axios from 'axios';

function GettingStarted() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    description: '',
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = "Start Your Project | Yohan Labs Nairobi";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await axios.post(
        'https://bugi-2.onrender.com/api/consultations',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setMessage('Your consultation request has been submitted!');
      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        description: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-[#0d2b35] text-[#f3e9e2]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#c9886b] text-xs font-black tracking-[0.5em] uppercase mb-6 block">Inquiry Phase</span>
          <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Get <span className="text-[#c9886b] italic">Started</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Contact Info & Brand Trust */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-tight">
              Ready to bring your <br />
              <span className="text-[#c9886b]">Ideas to life?</span>
            </h2>
            <p className="text-lg font-light leading-relaxed text-[#0d2b35]/70 max-w-md">
              Fill out the form for a free consultation. We'll dive into your goals and outline a digital strategy that works.
            </p>
          </div>

          <div className="space-y-8">
            <div className="group border-l-2 border-[#c9886b] pl-8 py-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#c9886b] block mb-2">Direct Line</span>
              <p className="text-xl font-bold tracking-tight">+254 702 442 418</p>
            </div>
            
            <div className="group border-l-2 border-[#0d2b35]/10 pl-8 py-2 hover:border-[#c9886b] transition-colors">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-50 block mb-2">Prefer Chat?</span>
              <a 
                href="https://wa.me/254702442418" 
                target="_blank" 
                rel="noreferrer"
                className="text-xl font-bold tracking-tight hover:text-[#c9886b] transition-colors"
              >
                Message on WhatsApp →
              </a>
            </div>
          </div>

          <div className="relative pt-12">
             <img 
               src={bgImage} 
               alt="Yohan Labs Studio" 
               className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
             />
             <div className="absolute -bottom-6 -right-6 bg-[#c9886b] w-24 h-24 hidden md:block"></div>
          </div>
        </div>

        {/* Right Side: The Consultation Form */}
        <div className="bg-white p-8 md:p-16 shadow-2xl">
          {message && (
            <div className={`mb-10 p-4 text-xs font-bold uppercase tracking-widest ${message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-[#0d2b35]/10 focus:border-[#c9886b] outline-none py-3 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-[#0d2b35]/10 focus:border-[#c9886b] outline-none py-3 transition-colors"
                  placeholder="Company Ltd"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-[#0d2b35]/10 focus:border-[#c9886b] outline-none py-3 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-[#0d2b35]/10 focus:border-[#c9886b] outline-none py-3 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Brief Description of Project</label>
              <textarea
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-[#0d2b35]/10 focus:border-[#c9886b] outline-none py-3 transition-colors resize-none"
                placeholder="Tell us a little about your vision..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#0d2b35] text-[#f3e9e2] py-8 text-xs font-black uppercase tracking-[0.5em] hover:bg-[#c9886b] hover:text-white transition-all duration-500 shadow-xl"
            >
              Get Free Consultation →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;