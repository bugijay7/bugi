import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const updated = checked
          ? [...prev.sections, value]
          : prev.sections.filter((s) => s !== value);
        return { ...prev, sections: updated };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Optional auth
      await axios.post('http://localhost:3000/api/causes', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Form submitted successfully!');
      setFormData({
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
    } catch (err) {
      console.error('Form submission failed:', err);
      alert('Submission failed. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 py-30 px-6 sm:px-12 lg:px-20 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-red-500 uppercase">
          Cause Website Form
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Help us understand your mission so we can design a site that empowers your vision and engages your community.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Organization Name</label>
            <input name="orgName" value={formData.orgName} onChange={handleChange} type="text" placeholder="e.g., Light For All Foundation" className="w-full border p-3 rounded mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Contact Person</label>
            <input name="contactPerson" value={formData.contactPerson} onChange={handleChange} type="text" placeholder="e.g., Pastor Jane / David Kimani" className="w-full border p-3 rounded mt-1" />
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
            <label className="block text-sm font-medium">Describe Your Mission / Vision</label>
            <textarea name="mission" value={formData.mission} onChange={handleChange} placeholder="What cause do you stand for?" className="w-full border p-3 rounded mt-1" rows="3" />
          </div>

          <div>
            <label className="block text-sm font-medium">Target Audience / Beneficiaries</label>
            <input name="targetAudience" value={formData.targetAudience} onChange={handleChange} type="text" placeholder="e.g., youth, single mothers, schools, churches, etc." className="w-full border p-3 rounded mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">What sections would you like on the site?</label>
            <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
              {[
                'About Us',
                'Programs / Projects',
                'Donation Page',
                'Events Calendar',
                'Team / Leadership',
                'Blog / Stories',
                'Newsletter Signup',
                'Contact Page'
              ].map((sec) => (
                <label key={sec}>
                  <input
                    type="checkbox"
                    name="sections"
                    value={sec}
                    checked={formData.sections.includes(sec)}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {sec}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Do you have branding (logo, colors, slogan)?</label>
            <textarea name="branding" value={formData.branding} onChange={handleChange} placeholder="Let us know what you'd like used..." className="w-full border p-3 rounded mt-1" rows="2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Inspiration or websites you admire (optional)</label>
            <input name="inspiration" value={formData.inspiration} onChange={handleChange} type="text" placeholder="Share links or references" className="w-full border p-3 rounded mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Preferred Launch Timeline</label>
            <input name="timeline" value={formData.timeline} onChange={handleChange} type="text" placeholder="e.g., within a month / by December" className="w-full border p-3 rounded mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Anything else you'd like to include?</label>
            <textarea name="extras" value={formData.extras} onChange={handleChange} placeholder="Additional notes or features..." className="w-full border p-3 rounded mt-1" rows="3" />
          </div>

          <button type="submit" className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded font-semibold text-lg">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default CauseForms;
