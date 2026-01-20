import React, { useState, useEffect } from 'react';
import formImg from '../../assets/form-banner.jpeg'; 
import axios from 'axios';

function StoreForms() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    description: '',
    estimatedProducts: '',
    productAssets: '',
    paymentMethods: '',
    deliveryRegions: '',
    branding: '',
    styleInspiration: '',
    timeline: '',
    notes: ''
  });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = "E-commerce Discovery Brief | Yohan Labs";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://bugi-2.onrender.com/api/stores', formData); 
      alert('Commerce strategy submitted successfully!');
      setFormData({
        fullName: '', businessName: '', email: '', phone: '',
        description: '', estimatedProducts: '', productAssets: '',
        paymentMethods: '', deliveryRegions: '', branding: '',
        styleInspiration: '', timeline: '', notes: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white pb-32" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Commerce Header */}
      <section className="pt-32 pb-20 px-6 bg-[#0d2b35] text-[#f3e9e2]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#c9886b] text-xs font-black tracking-[0.5em] uppercase mb-6 block">Retail Strategy</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Digital <span className="text-[#c9886b] italic">Storefront</span>
          </h1>
          <p className="text-[#f3e9e2]/60 text-sm tracking-[0.2em] uppercase font-bold">Scaling Commerce Globally</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white p-4 shadow-2xl mb-20">
          <img src={formImg} alt="Banner" className="w-full h-72 md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Side Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-12">
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>The Advantage</h2>
                <div className="space-y-6">
                  {[
                    { title: "Wider Reach", desc: "Sell beyond local borders 24/7." },
                    { title: "Cost-Effective", desc: "Lower overhead than physical retail." },
                    { title: "Scalability", desc: "Grow your range without limits." }
                  ].map((adv, i) => (
                    <div key={i} className="border-l-2 border-[#c9886b] pl-6">
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#0d2b35]">{adv.title}</h4>
                      <p className="text-sm font-light text-[#0d2b35]/60">{adv.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-[#c9886b] text-white">
                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">
                  "Let's build a powerful online store tailored specifically to your business goals."
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8 bg-white/40 p-8 md:p-12 backdrop-blur-md">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Full Name</label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Business Name</label>
                  <input name="businessName" value={formData.businessName} onChange={handleChange} className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Business Email</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Phone / WhatsApp</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Product Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="3" className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3 resize-none" placeholder="Describe what your store will sell..." />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Product Asset Readiness</label>
                  <select name="productAssets" value={formData.productAssets} onChange={handleChange} className="bg-white border border-[#0d2b35]/10 p-4 outline-none focus:border-[#c9886b]">
                    <option value="">-- Select --</option>
                    <option>Yes, I have all assets</option>
                    <option>Still working on it</option>
                    <option>No, not yet</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Estimated Products</label>
                  <input name="estimatedProducts" value={formData.estimatedProducts} onChange={handleChange} className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3" placeholder="e.g. 50-100" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Payment Methods</label>
                  <input name="paymentMethods" value={formData.paymentMethods} onChange={handleChange} className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3" placeholder="e.g. M-Pesa, Card" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Project Timeline</label>
                  <input name="timeline" value={formData.timeline} onChange={handleChange} className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Delivery Regions</label>
                <textarea name="deliveryRegions" value={formData.deliveryRegions} onChange={handleChange} rows="2" className="bg-transparent border-b border-[#0d2b35]/20 focus:border-[#c9886b] outline-none py-3 resize-none" />
              </div>

              <button type="submit" className="w-full bg-[#c9886b] text-white py-8 text-xs font-black uppercase tracking-[0.5em] hover:bg-[#0d2b35] transition-all duration-500 shadow-xl">
                Submit Strategy Brief →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreForms;