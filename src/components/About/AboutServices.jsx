import React, { useState } from 'react';

const faqs = [
  {
    question: "Frontend development / engineering",
    answer:
      "I specialize in building responsive, user-friendly interfaces using React, HTML, CSS, and JavaScript. I focus on performance, accessibility, and delivering smooth user experiences across devices."
  },
  {
    question: "Backend development",
    answer:
      "Using Node.js, Express, and PostgreSQL or MongoDB, I build secure, scalable APIs and manage data flow efficiently. I'm experienced in authentication, RESTful architecture, and third-party integrations."
  },
  {
    question: "Full-stack workflows",
    answer:
      "I handle end-to-end development—from database design to frontend implementation—using stacks like MERN and PERN. This enables me to work fluidly across the entire development lifecycle."
  },
  {
    question: "CMS & content updates",
    answer:
      "I integrate headless CMS platforms or build custom admin panels, allowing clients to easily manage and update their content after launch."
  },
  {
    question: "Collaboration and delivery",
    answer:
      "I collaborate with designers, PMs, and clients in agile workflows, using tools like Git, Figma, and Jira to ensure smooth handoffs and clear communication from concept to delivery."
  }
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1400px] mx-auto mb-10 px-4 sm:py-16  lg:px-8 ">
      {/* Section Title */}
      <p className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] font-extrabold mb-8 leading-tight">
        SERVICES
      </p>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            <div className="rounded-lg p-4 sm:p-6 transition-all duration-300">
              <button
                className="w-full text-left flex justify-between items-start font-semibold text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] text-[#111]"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-[1.5rem] sm:text-[2rem]">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-6 text-[0.95rem] sm:text-base text-[#333] font-medium leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>

            {index < faqs.length - 1 && (
              <hr className="border-t border-gray-300 opacity-50" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
