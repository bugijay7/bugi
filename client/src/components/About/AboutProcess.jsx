import React from 'react';

function AboutProcess() {
  return (
    <section className="bg-[#d9b17f] py-10">
    <div className="flex flex-col gap-6 px-4 py-10 max-w-[1400px] mx-auto ">
      <div className="chat chat-start">
        <div className="chat-bubble bg-[#090909] text-gray-200">
          Do you offer freelance or contract services?
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble bg-red-400 text-white">
          Yes, available for both <strong className="text-black">freelance</strong> and <strong className="text-black">contract</strong> projects, offering flexible collaboration based on the client's needs and project scope.
        </div>
      </div>

      <div className="chat chat-start">
        <div className="chat-bubble bg-[#090909] text-gray-200">
          Do you do UI/UX design as well, or only development?
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble bg-red-400 text-white">
          Web development is the core focus, but capable of handling <strong className="text-black">UI/UX design</strong> using tools like <strong className="text-black">Figma</strong>. For complex design needs, collaboration with specialized designers ensures quality results.
        </div>
      </div>
    </div>
    </section>
  );
}

export default AboutProcess;
