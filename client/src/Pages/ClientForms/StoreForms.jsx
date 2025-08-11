import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/stores', formData); // Adjust port if needed
      alert('Store form submitted successfully!');
      setFormData({
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
    } catch (error) {
        console.error('Submission error:', error);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 py-30 px-6 sm:px-12 lg:px-20 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-red-500 uppercase">
          E-commerce Website Questionnaire
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Help us understand your needs so we can build a powerful online store tailored to your business.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Repeat fields with name & value bindings */}
          <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your Full Name" className="w-full border p-3 rounded" />

          <input name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Business Name" className="w-full border p-3 rounded" />

          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Business Email" className="w-full border p-3 rounded" />

          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone / WhatsApp" className="w-full border p-3 rounded" />

          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Describe what your store will sell" className="w-full border p-3 rounded" />

          <input name="estimatedProducts" value={formData.estimatedProducts} onChange={handleChange} placeholder="Estimated number of products" className="w-full border p-3 rounded" />

          <select name="productAssets" value={formData.productAssets} onChange={handleChange} className="w-full border p-3 rounded">
            <option value="">-- Select product asset readiness --</option>
            <option>Yes, I have all</option>
            <option>Some, still working on it</option>
            <option>No, not yet</option>
          </select>

          <input name="paymentMethods" value={formData.paymentMethods} onChange={handleChange} placeholder="Preferred payment methods" className="w-full border p-3 rounded" />

          <textarea name="deliveryRegions" value={formData.deliveryRegions} onChange={handleChange} placeholder="Do you offer delivery? If yes, where?" className="w-full border p-3 rounded" />

          <select name="branding" value={formData.branding} onChange={handleChange} className="w-full border p-3 rounded">
            <option value="">-- Select branding state --</option>
            <option>Yes, I have them</option>
            <option>Just a logo</option>
            <option>No, I need help with branding</option>
          </select>

          <input name="styleInspiration" value={formData.styleInspiration} onChange={handleChange} placeholder="Websites you like (optional)" className="w-full border p-3 rounded" />

          <input name="timeline" value={formData.timeline} onChange={handleChange} placeholder="Timeline" className="w-full border p-3 rounded" />

          <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Any other requests or notes?" className="w-full border p-3 rounded" />

          <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded font-semibold text-lg">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default StoreForms;
