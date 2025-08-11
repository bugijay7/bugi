import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/254702443418"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl sm:text-3xl" />
    </a>
  );
}

export default WhatsappFloat;
