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
  },
  {
    question: "API Development & Integration",
    answer:
      "I build robust RESTful APIs and integrate third-party services such as payment gateways, email providers, and external data sources."
  },
  {
    question: "DevOps & Deployment",
    answer:
      "I manage deployment pipelines using services like Vercel, Render, or Netlify, and configure CI/CD workflows for streamlined releases."
  },
  {
    question: "Performance Optimization",
    answer:
      "I audit and optimize web performance, reducing load times through lazy loading, code splitting, and image compression strategies."
  },
  {
    question: "Security Best Practices",
    answer:
      "I implement secure authentication, input validation, HTTPS, and data protection techniques to ensure secure web applications."
  },
  {
    question: "Responsive & Mobile-First Design",
    answer:
      "I ensure every project looks and performs great on all devices by using modern responsive design techniques and media queries."
  }
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" text-[#1a1a1a] px-5 py-20">
      <p className="text-[2.8rem] font-extrabold text-center mb-[60px] tracking-wider text-[#111]">
        SERVICES
      </p>

      <div className="max-w-[960px] mx-auto flex flex-col gap-[30px]">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div className="bg-white ] shadow-md px-[30px] py-[25px] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <button
                className="w-full text-left flex justify-between items-start text-[1.25rem] font-bold text-[#222] hover:text-[#de5f5e] transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-[1.5rem] text-[#888] ml-3">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-4 text-[1rem] leading-7 text-[#333] animate-fadeIn font-semibold">
                  {faq.answer}
                </p>
              )}
            </div>

            {index < faqs.length - 1 && (
              <hr className="border-t border-[#bbb] my-[25px] opacity-40" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
