import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const updatedFeatures = checked
          ? [...prev.features, value]
          : prev.features.filter((f) => f !== value);
        return { ...prev, features: updatedFeatures };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://bugi-2.onrender.com/api/brands', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Form submitted successfully!');
      setFormData({
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
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting the form');
    }
  };

  return (
    <div className="min-h-screen pt-30 bg-[#090909] py-20 px-6 sm:px-12 lg:px-20 text-gray-800 font-sans">
      <motion.div 
        className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Brand Website Questionnaire</h1>\

            {/* ✅ Image below title */}
                    <div className="flex justify-center mb-6">
                      <img 
                        src={BrandImg} 
                        alt="Brand Questionnaire Banner" 
                        className="w-full max-h-[450px] object-cover rounded-xl shadow-md"
                      />
                    </div>

          <p className="text-lg text-gray-600">
            Let’s create a website that <span className="text-red-500 font-semibold">captures your brand</span> 
            and drives real results 🚀
          </p>
        </div>

        {/* Intro */}
        <div className="mb-10 text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-xl border">
          <p className="mb-4 text-base">
            A <strong>brand website</strong> is your 24/7 storefront, credibility booster, and lead generator. 
            Whether you’re a coach, agency, or small business, the right website helps you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Build trust:</strong> Professional design signals credibility.</li>
            <li><strong>Showcase your value:</strong> Services, testimonials & stories.</li>
            <li><strong>Generate leads:</strong> Turn visitors into clients.</li>
            <li><strong>Stay competitive:</strong> Strong online presence matters.</li>
            <li><strong>Grow visibility:</strong> Go beyond referrals & word-of-mouth.</li>
          </ul>
        </div>

        {/* Form */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Input Group */}
          {[
            { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'Jane Doe' },
            { label: 'Business / Brand Name', name: 'brandName', type: 'text', placeholder: 'Thrive Coaching Studio' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-semibold text-gray-800">{field.label}</label>
              <input 
                type={field.type} 
                name={field.name} 
                value={formData[field.name]} 
                onChange={handleChange} 
                placeholder={field.placeholder}
                className="w-full border p-3 rounded-lg mt-2 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
              />
            </div>
          ))}

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Phone / WhatsApp', name: 'phone', type: 'tel' },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold">{field.label}</label>
                <input 
                  type={field.type} 
                  name={field.name} 
                  value={formData[field.name]} 
                  onChange={handleChange} 
                  className="w-full border p-3 rounded-lg mt-2 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
                />
              </div>
            ))}
          </div>

          {/* Larger Text Areas */}
          {[
            { label: 'Briefly describe what your brand does', name: 'brandDescription', rows: 3 },
            { label: 'Who is your target audience?', name: 'targetAudience', rows: 2 },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-semibold">{field.label}</label>
              <textarea 
                name={field.name} 
                value={formData[field.name]} 
                onChange={handleChange} 
                rows={field.rows}
                className="w-full border p-3 rounded-lg mt-2 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
              />
            </div>
          ))}

          {/* Dropdown */}
          <div>
            <label className="block text-sm font-semibold">What’s the main goal of your website?</label>
            <select 
              name="websiteGoal" 
              value={formData.websiteGoal} 
              onChange={handleChange} 
              className="w-full border p-3 rounded-lg mt-2 focus:ring-2 focus:ring-red-400 transition"
            >
              <option value="">-- Select --</option>
              <option>Get more leads / inquiries</option>
              <option>Showcase services or products</option>
              <option>Build brand awareness</option>
              <option>Sell digital content or subscriptions</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div>
            <label className="block text-sm font-semibold">Will your site need any of the following?</label>
            <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
              {[
                "Newsletter signup",
                "Lead capture forms",
                "Blog / Articles",
                "Testimonials / Reviews",
                "Portfolio / Case studies",
                "Video embedding"
              ].map((feature) => (
                <label key={feature} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <input
                    type="checkbox"
                    name="features"
                    value={feature}
                    checked={formData.features.includes(feature)}
                    onChange={handleChange}
                    className="accent-red-500"
                  />
                  <span>{feature}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Timeline + Notes */}
          {[
            { label: 'When would you like your site ready?', name: 'timeline', type: 'text', placeholder: 'E.g., 3 weeks, ASAP...' },
            { label: 'Any other notes or special features you want?', name: 'notes', type: 'textarea', placeholder: 'Booking calendar, live chat, etc.', rows: 3 },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-semibold">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea 
                  name={field.name} 
                  value={formData[field.name]} 
                  onChange={handleChange} 
                  rows={field.rows}
                  placeholder={field.placeholder}
                  className="w-full border p-3 rounded-lg mt-2 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
                />
              ) : (
                <input 
                  type={field.type} 
                  name={field.name} 
                  value={formData[field.name]} 
                  onChange={handleChange} 
                  placeholder={field.placeholder}
                  className="w-full border p-3 rounded-lg mt-2 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
                />
              )}
            </div>
          ))}

          {/* Submit */}
          <motion.button 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }}
            type="submit" 
            className="w-full mt-8 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-4 rounded-xl font-semibold text-lg shadow-md transition"
          >
            🚀 Submit Brand Form
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default BrandForms;
