import React from 'react';

function Contacts() {
  return (
    <div className="bg-black flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-6xl mt-10">
        {/* Email Section */}
        <section className="mt-24">
          <p className="text-white text-left text-xl md:text-2xl font-semibold mb-6">
            SEND ME A<br />MESSAGE
          </p>
          <p className="leading-none">
            <a
              href="mailto:yohanlabs@gmail.com"
              className="block text-white no-underline uppercase text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[9rem] font-extrabold"
            >
              yohanlabs@<br />gmail.com
            </a>
          </p>
        </section>

        {/* Social Section */}
        <section className="mt-24">
          <p className="text-white text-left text-xl md:text-2xl font-semibold mb-6">
            OR CONNECT WITH<br />ME ON SOCIAL
          </p>

          {[
            { name: 'Twitter', url: 'https://twitter.com/YOUR_USERNAME' },
            { name: 'Instagram', url: 'https://instagram.com/YOUR_USERNAME' },
            { name: 'GitHub', url: 'https://github.com/YOUR_USERNAME' },
          ].map(({ name, url }) => (
            <p className="mt-6 leading-none" key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white no-underline uppercase text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[9rem] font-extrabold"
              >
                {name}
              </a>
            </p>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Contacts;
