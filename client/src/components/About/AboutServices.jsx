import React from 'react';

const faqs = [
  {
    question: "Frontend development / engineering",
    answer:
      "Specialized in building responsive, user-friendly interfaces using <strong class='text-black'>React</strong>, <strong class='text-black'>HTML</strong>, <strong class='text-black'>CSS</strong>, and <strong class='text-black'>JavaScript</strong>. Focused on performance, accessibility, and seamless cross-device experiences.",
  },
  {
    question: "Backend development",
    answer:
      "Experienced in creating secure, scalable APIs with <strong class='text-black'>Node.js</strong>, <strong class='text-black'>Express</strong>, and databases like <strong class='text-black'>PostgreSQL</strong> and <strong class='text-black'>MongoDB</strong>. Emphasis on RESTful architecture, authentication, and integration.",
  },
  {
    question: "Full-stack workflows",
    answer:
      "Handles end-to-end application architecture using <strong class='text-black'>MERN</strong> and <strong class='text-black'>PERN</strong> stacks. From data modeling to frontend deployment, every layer is optimized for functionality and maintainability.",
  },
  {
    question: "CMS & content updates",
    answer:
      "Implements <strong class='text-black'>headless CMS</strong> or builds custom admin panels to ensure non-technical clients can manage and update their content independently.",
  },
  {
    question: "Collaboration and delivery",
    answer:
      "Works closely with <strong class='text-black'>designers</strong>, <strong class='text-black'>project managers</strong>, and <strong class='text-black'>clients</strong> in agile workflows, using tools like <strong class='text-black'>Figma</strong>, <strong class='text-black'>Git</strong>, and <strong class='text-black'>Jira</strong> for effective planning, communication, and execution.",
  },
];

function Faq() {
  return (
    <div className="flex flex-col gap-6 px-4 py-10 max-w-[1400px] mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="chat chat-start">
            <div className="chat-bubble bg-[#111111] text-gray-200 text-base sm:text-lg max-w-[90%]">
              {faq.question}
            </div>
          </div>
          <div className="chat chat-end">
            <div
              className="chat-bubble bg-red-400 text-white text-sm sm:text-base max-w-[90%]"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
