import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://bugi-2.onrender.com/api/stores', formData); 
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
    <div className="min-h-screen bg-[#d9b17f] py-30 px-6 sm:px-12 lg:px-20 text-black font-sans">
     <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
  <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-black uppercase">
    E-commerce Website Questionnaire
  </h1>

    {/* ✅ Image below title */}
          <div className="flex justify-center mb-6">
            <img 
              src={formImg} 
              alt="Brand Questionnaire Banner" 
              className="w-full max-h-[450px] object-cover rounded-xl shadow-md"
            />
          </div>

  {/* Intro Section */}
  <div className="mb-10 text-black leading-relaxed">
    <p className="mb-4 text-lg">
      An <strong>online store</strong> is a digital platform where you can showcase and sell your products or services to
      customers anytime, anywhere. It’s like having your business open 24/7, without the limitations of a physical shop.
    </p>
    <p className="mb-2 font-semibold">Advantages of having an online store:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Wider Reach:</strong> Sell beyond your local area and reach customers globally.</li>
      <li><strong>Cost-Effective:</strong> Lower operating costs compared to physical shops.</li>
      <li><strong>Convenience:</strong> Customers can browse and buy your products 24/7.</li>
      <li><strong>Brand Growth:</strong> Build a professional digital presence that increases trust.</li>
      <li><strong>Scalability:</strong> Easily expand your product range and handle more customers.</li>
    </ul>
  </div>

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
