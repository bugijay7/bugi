import React from 'react';

function Cta() {
  return (
    <div className="flex flex-col justify-around items-center min-h-[60vh] w-full px-6 sm:px-10 py-10">
      {/* CTA Headings */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-left text-xl sm:text-2xl font-semibold w-full max-w-[1200px] mb-10 gap-6">
        <p className="text-[#111]">WANT TO WORK <br className="hidden sm:block" /> TOGETHER?</p>
        <p className="text-[#111]">SEND ME A <br className="hidden sm:block" /> MESSAGE</p>
      </section>

      {/* CTA Content */}
      <section className="flex flex-col items-start text-left w-full max-w-[1200px]">
        <a
  href="mailto:yohanlabske@gmail.com"
  className="text-[2rem] sm:text-[2rem] md:text-[4rem] font-extrabold uppercase break-words text-[#090909] leading-tight hover:text-[#de5f5e] transition-colors duration-300"
>
  yohanlabske@gmail.com
</a>


        <a
          href="https://yohanlabs.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-[2rem] sm:text-[3rem] md:text-[4rem] font-extrabold no-underline text-[#090909] hover:text-[#de5f5e] transition-colors duration-300"
        >
          yohanlabs.app
        </a>
      </section>
    </div>
  );
}

export default Cta;
