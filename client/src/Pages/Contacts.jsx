import React from 'react';
import contactImage from '../assets/contact.jpeg';

function Contacts() {
  return (
    <div className="bg-[#d9b17f] flex flex-col justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-6xl md:pt-30 text-white font-sans">
        
        {/* Contact Image */}
        <div className="w-full mb-12">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Header Intro */}
        <section className="mb-10">
          <h2 className="text-center text-2xl md:text-4xl font-bold">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-md md:text-lg leading-relaxed text-gray-300 text-center">
            Whether you're ready to start a project, <br />have questions,<br /> or just want to connect,<br /> my inbox is always open. <br /><br />Reach out, and I'll get back to you as soon as I can.
          </p>
        </section>

        {/* Email Section */}
        <section className="mt-20">
          <p className="text-center text-xl md:text-2xl font-semibold mb-6">
            SEND ME A<br />MESSAGE
          </p>
          <a
            href="mailto:yohanlabs@gmail.com"
            className="block text-white no-underline uppercase text-center text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-extrabold leading-none"
          >
            yohanlabske@gmail.com
          </a>
          <a
            href="mailto:bugijay7@gmail.com"
            className="block text-white no-underline uppercase text-center text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-extrabold leading-none mt-10"
          >
            bugijay7@gmail.com
          </a>
        </section>

        {/* Address & Hours */}
        <section className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Office Address</h3>
            <p className="text-gray-300 leading-relaxed">
              Kiambu, Kenya<br />
              Yohan Labs HQ<br />
              Off Waiyaki Way, Kiambaa
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Working Hours</h3>
            <p className="text-gray-300 leading-relaxed">
              Monday – Friday: 24hrs<br />
              Saturday: 24hrs<br />
              Sunday: 24hrs
            </p>
          </div>
        </section>

        {/* Footer Message */}
        <section className="mt-28 mb-20">
          <p className="text-md md:text-lg text-gray-400 italic text-center">
            No bots, no waiting lines — just a real human excited to hear from you.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Contacts;
