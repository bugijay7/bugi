import React, { useState } from 'react';
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
      const token = localStorage.getItem('token'); // if using JWT
      await axios.post('http://localhost:3000/api/brands', formData, {
        headers: {
          Authorization: `Bearer ${token}`, // optional
        },
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
    <div className="min-h-screen bg-gray-200 py-30 px-6 sm:px-12 lg:px-20 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-red-500 uppercase">
          Brand Website Questionnaire
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Tell us more about your brand, audience, and goals — so we can create a high-impact online presence that works for you.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full border p-3 rounded mt-1" placeholder="Jane Doe" />
          </div>

          <div>
            <label className="block text-sm font-medium">Business / Brand Name</label>
            <input type="text" name="brandName" value={formData.brandName} onChange={handleChange} className="w-full border p-3 rounded mt-1" placeholder="e.g., Thrive Coaching Studio" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-3 rounded mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone / WhatsApp</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border p-3 rounded mt-1" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Briefly describe what your brand does</label>
            <textarea name="brandDescription" value={formData.brandDescription} onChange={handleChange} className="w-full border p-3 rounded mt-1" rows="3" />
          </div>

          <div>
            <label className="block text-sm font-medium">Who is your target audience?</label>
            <textarea name="targetAudience" value={formData.targetAudience} onChange={handleChange} className="w-full border p-3 rounded mt-1" rows="2" />
          </div>

          <div>
            <label className="block text-sm font-medium">What’s the main goal of your website?</label>
            <select name="websiteGoal" value={formData.websiteGoal} onChange={handleChange} className="w-full border p-3 rounded mt-1">
              <option value="">-- Select --</option>
              <option>Get more leads / inquiries</option>
              <option>Showcase services or products</option>
              <option>Build brand awareness</option>
              <option>Sell digital content or subscriptions</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">What sections should the site include?</label>
            <textarea name="siteSections" value={formData.siteSections} onChange={handleChange} className="w-full border p-3 rounded mt-1" rows="2" placeholder="About, Services, Blog, Testimonials, Contact, etc." />
          </div>

          <div>
            <label className="block text-sm font-medium">Do you already have a logo & brand assets?</label>
            <select name="brandAssets" value={formData.brandAssets} onChange={handleChange} className="w-full border p-3 rounded mt-1">
              <option value="">-- Select --</option>
              <option>Yes, I have a full brand kit</option>
              <option>Just a logo</option>
              <option>I need help with branding</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Share any websites you like (for style inspiration)</label>
            <input type="text" name="styleInspiration" value={formData.styleInspiration} onChange={handleChange} placeholder="e.g., www.brandx.com" className="w-full border p-3 rounded mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Will your site need any of the following?</label>
            <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
              {[
                "Newsletter signup",
                "Lead capture forms",
                "Blog / Articles",
                "Testimonials / Reviews",
                "Portfolio / Case studies",
                "Video embedding"
              ].map((feature) => (
                <label key={feature}>
                  <input
                    type="checkbox"
                    name="features"
                    value={feature}
                    checked={formData.features.includes(feature)}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">When would you like your site ready?</label>
            <input type="text" name="timeline" value={formData.timeline} onChange={handleChange} placeholder="E.g., 3 weeks, ASAP..." className="w-full border p-3 rounded mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Any other notes or special features you want?</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Booking calendar, live chat, etc." className="w-full border p-3 rounded mt-1" rows="3" />
          </div>

          <button type="submit" className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded font-semibold text-lg">
            Submit Brand Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default BrandForms;
