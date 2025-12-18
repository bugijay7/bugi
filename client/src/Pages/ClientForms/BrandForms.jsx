import React, { useState } from 'react';
import BrandImg from '../../assets/brand-banner.jpeg';
import axios from 'axios';
import { motion as Motion } from 'framer-motion';

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
      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error submitting the form');
    }
  };

  return (
    <div className="min-h-screen bg-[#d9b17f] py-20 md:py-30 px-6">
      <Motion.div
        className="max-w-4xl mx-auto bg-transparent md:bg-white/90 rounded-sm md:rounded-2xl p-10 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-lg md:text-4xl font-bold mb-4">Brand Website Questionnaire</h1>
          <img
            src={BrandImg}
            alt="Brand banner"
            className="w-full max-h-[400px] object-cover rounded-xl mb-6"
          />
          <p className="text-gray-600 text-sm md:text-lg">
            Let’s create a website that{" "}
            <span className="text-red-500 font-semibold">captures your brand</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Basic info */}
          {[
            ['Full Name', 'fullName'],
            ['Brand Name', 'brandName'],
            ['Email', 'email'],
            ['Phone / WhatsApp', 'phone'],
          ].map(([label, name]) => (
            <div key={name}>
              <label className="font-semibold text-xs md:text-sm">{label}</label>
              <input
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full mt-2 border p-1 md:p-3 rounded-lg focus:ring-2 focus:ring-red-400"
              />
            </div>
          ))}

          {/* Textareas */}
          {[
            ['Describe your brand', 'brandDescription'],
            ['Target audience', 'targetAudience'],
            ['What pages/sections do you need?', 'siteSections'],
            ['Brand assets you already have', 'brandAssets'],
            ['Style inspiration', 'styleInspiration'],
          ].map(([label, name]) => (
            <div key={name}>
              <label className="font-semibold text-xs md:text-sm">{label}</label>
              <textarea
                name={name}
                rows={3}
                value={formData[name]}
                onChange={handleChange}
                className="w-full mt-2 border p-1 md:p-3 rounded-lg focus:ring-2 focus:ring-red-400"
              />
            </div>
          ))}

          {/* Website goal */}
          <div>
            <label className="font-semibold text-sm">Main website goal</label>
            <select
              name="websiteGoal"
              value={formData.websiteGoal}
              onChange={handleChange}
              className="w-full mt-2 border p-1 md:p-3 rounded-lg"
            >
              <option value="">Select one</option>
              <option>Get more leads</option>
              <option>Showcase services</option>
              <option>Build brand awareness</option>
              <option>Sell online</option>
            </select>
          </div>

          {/* Features */}
          <div>
            <label className="font-semibold text-sm">Features needed</label>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {[
                'Contact form',
                'Booking system',
                'Blog',
                'Newsletter signup',
                'Testimonials',
                'Video content',
              ].map((feature) => (
                <label key={feature} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    value={feature}
                    checked={formData.features.includes(feature)}
                    onChange={handleChange}
                    className="accent-red-500"
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="font-semibold text-xs md:text-sm">Timeline</label>
            <input
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="e.g. 2–4 weeks"
              className="w-full mt-2 border p-1 md:p-3 rounded-lg"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="font-semibold text-xs md:text-sm">Additional notes</label>
            <textarea
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              className="w-full mt-2 border p-1 md:p-3 rounded-lg"
            />
          </div>

          <Motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-sm md:text-lg"
            type="submit"
          >
            🚀 Submit Brand Form
          </Motion.button>
        </form>
      </Motion.div>
    </div>
  );
}

export default BrandForms;
