import React, { useState } from 'react';
import bgImage from '../assets/form.jpeg';
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

    try {
      await axios.post('https://bugi-2.onrender.com/api/consultations', formData);
      setMessage('Your consultation request has been submitted!');
      setFormData({ name: '', businessName: '', email: '', phone: '', description: '' });
    } catch (error) {
      console.log('Error submitting form:', error);
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div
      className="bg-cover bg-center flex items-center justify-center px-4 py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-3xl w-full bg-white bg-opacity-90 p-8 rounded-lg shadow-lg mt-30">
        <h2 className="text-4xl font-bold text-center text-black mb-8">Ready to bring your ideas to life?</h2>

        <p className="max-w-[400px] mx-auto text-center text-gray-700 mb-6 font-bold">
          Fill out the form below for a free consultation. <br />
          Prefer a good old chat? <br />
          <strong className="text-red-700">Call</strong> or <strong className="text-green-700">WhatsApp</strong> me at{' '}
          <strong className="text-black">+254702442418</strong>
        </p>

        {message && <p className="text-center font-semibold text-green-700">{message}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {['name', 'businessName', 'email', 'phone'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-black uppercase">
                {field === 'name'
                  ? 'Your Name'
                  : field === 'businessName'
                  ? 'Business Name'
                  : field === 'email'
                  ? 'Email Address'
                  : 'Phone Number'}
              </label>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>
          ))}

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-black uppercase">
              Brief Description of Your Business
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
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
