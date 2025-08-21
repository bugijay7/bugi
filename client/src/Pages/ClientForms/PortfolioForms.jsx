import React, { useState } from 'react';
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
      await axios.post('http://localhost:3000/api/portfolios', formData); 
      alert('Portfolio form submitted successfully!');
      setFormData({
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
    } catch (err) {
       console.error('Form submission failed:', err);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#090909]  py-30 px-6 sm:px-12 lg:px-20 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-100 via-gray to-red-100 shadow-md rounded-xl p-8">
       
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-black uppercase">
    Personal Portfolio Form
  </h1>

  
      {/* ✅ Image below title */}
            <div className="flex justify-center mb-6">
              <img 
                src={PortfolioImg} 
                alt="Brand Questionnaire Banner" 
                className="w-full max-h-[450px] object-cover rounded-xl shadow-md"
              />
            </div>
  

  {/* Intro Section */}
  <div className="mb-10 text-black leading-relaxed">
    <p className="mb-4 text-lg">
      A <strong>personal portfolio website</strong> is your digital stage—where you showcase your work, skills, and
      personality to the world. Whether you’re a <strong>designer, photographer, videographer, or freelancer,</strong> it helps you build
      credibility and create a lasting impression.
    </p>
    <p className="mb-2 font-semibold">Why a portfolio website matters:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Professional Branding:</strong> Present yourself with a polished and unique online identity.</li>
      <li><strong>Showcase Work:</strong> Highlight your best projects in an organized and engaging way.</li>
      <li><strong>Attract Opportunities:</strong> Stand out to potential clients, employers, and collaborators.</li>
      <li><strong>Global Reach:</strong> Share your talent with audiences worldwide, anytime.</li>
      <li><strong>Control & Creativity:</strong> Shape how people see your work—beyond social media platforms.</li>
    </ul>
  </div>

  <p className="text-center text-gray-600 mb-10">
    Fill out this form to help us design a portfolio that reflects your vision, goals, and unique creative style.
  </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Your Full Name</label>
            <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full border p-3 rounded mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full border p-3 rounded mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone / WhatsApp</label>
            <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full border p-3 rounded mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">What do you do?</label>
            <input name="profession" value={formData.profession} onChange={handleChange} type="text" className="w-full border p-3 rounded mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Main purpose of your portfolio?</label>
            <select name="portfolioGoal" value={formData.portfolioGoal} onChange={handleChange} className="w-full border p-3 rounded mt-1">
              <option value="">-- Select --</option>
              <option>Showcase creative work</option>
              <option>Find a job</option>
              <option>Attract clients / freelance work</option>
              <option>Document personal projects</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">What kind of work will you showcase?</label>
            <textarea name="workTypes" value={formData.workTypes} onChange={handleChange} className="w-full border p-3 rounded mt-1" rows="2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Which sections should your site include?</label>
            <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
              {["About Me", "Portfolio / Projects", "Resume / Downloadable CV", "Testimonials", "Blog / Writing", "Contact & Social Links"].map((section) => (
                <label key={section}>
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={section}
                    checked={formData.sections.includes(section)}
                    onChange={handleChange}
                  />
                  {section}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Design preferences or inspirations</label>
            <textarea name="designPrefs" value={formData.designPrefs} onChange={handleChange} className="w-full border p-3 rounded mt-1" rows="2" />
          </div>

          <div>
            <label className="block text-sm font-medium">When would you like your portfolio ready?</label>
            <input name="timeline" value={formData.timeline} onChange={handleChange} type="text" className="w-full border p-3 rounded mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Any other notes or must-haves?</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} className="w-full border p-3 rounded mt-1" rows="3" />
          </div>

          <button type="submit" className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded font-semibold text-lg">
            Submit Portfolio Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default PortfolioForms;
