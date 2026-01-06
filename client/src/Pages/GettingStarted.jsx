import React, { useState } from 'react';
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
    <div
      className="bg-cover bg-center flex items-center justify-center px-4 py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-3xl w-full bg-[#d9b17f] p-8 rounded-lg shadow-lg mt-30">
        <h2 className="text-xl md:text-4xl font-bold text-center text-black mb-8">
          Ready to bring your ideas to life?
        </h2>

        <p className="max-w-[400px] mx-auto text-center text-gray-700 mb-6 md:font-bold text-sm md:text-lg pb-3">
          Fill out the form below for a free consultation. <br />
          Prefer a good old chat? <br /> <br></br>
          <strong className="text-red-700">Call</strong> or{' '}
          <strong className="text-green-700">WhatsApp</strong> me at{' '}
          <strong className="text-black">+254702442418</strong>
        </p>

        {message && (
          <p className="text-center font-semibold text-green-700">
            {message}
          </p>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-black uppercase"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-black uppercase"
            >
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              autoComplete="organization"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black uppercase"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-black uppercase"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-black uppercase"
            >
              Brief Description of Your Business
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              autoComplete="off"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Get Free Consultation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GettingStarted;