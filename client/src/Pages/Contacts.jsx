import React from 'react';

function Contacts() {
  return (
    <div className="bg-[#090909] flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-6xl mt-10 text-white font-sans">
        {/* Header Intro */}
        <section className="mt-20 mb-10">
          <h2 className="text-left text-2xl md:text-4xl font-bold">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-md md:text-lg leading-relaxed text-gray-300">
            Whether you're ready to start a project, have questions, or just want to connect, my inbox is always open. Reach out, and I'll get back to you as soon as I can.
          </p>
        </section>

        {/* Email Section */}
        <section className="mt-20">
          <p className="text-left text-xl md:text-2xl font-semibold mb-6">SEND ME A<br />MESSAGE</p>
          <a
            href="mailto:yohanlabs@gmail.com"
            className="block text-white no-underline uppercase text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-extrabold leading-none"
          >
            yohanlabs@gmail.com
          </a>
           <a
            href="mailto:bugijay7@gmail.com"
            className="block text-white no-underline uppercase text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-extrabold leading-none mt-10"
          >
            bugijay7@gmail.com
          </a>

        </section>

        {/* Social Links */}
        <section className="mt-24">
          <p className="text-left text-xl md:text-2xl font-semibold mb-6">OR CONNECT WITH<br />ME ON SOCIAL</p>
          {[
            { name: 'Twitter', url: 'https://twitter.com/YOUR_USERNAME' },
            { name: 'Instagram', url: 'https://instagram.com/YOUR_USERNAME' },
            { name: 'Facebook', url: 'https://github.com/YOUR_USERNAME' },
          ].map(({ name, url }) => (
            <p className="mt-6 leading-none" key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white no-underline uppercase text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-extrabold"
              >
                {name}
              </a>
            </p>
          ))}
        </section>

        {/* Address & Hours */}
        <section className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Office Address</h3>
            <p className="text-gray-300 leading-relaxed">
              Nairobi, Kenya<br />
              Yohan Labs HQ<br />
              Off Ngong Road, Studio Lane
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Working Hours</h3>
            <p className="text-gray-300 leading-relaxed">
              Monday – Friday: 9AM – 6PM<br />
              Saturday: 10AM – 2PM<br />
              Sunday: Closed
            </p>
          </div>
        </section>

        {/* Footer Message */}
        <section className="mt-28 mb-20">
          <p className="text-md md:text-lg text-gray-400 italic">
            No bots, no waiting lines — just a real human excited to hear from you.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Contacts;
