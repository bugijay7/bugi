import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import your images
import frontendImg from "../assets/services/frontend.jpeg";
import backendImg from "../assets/services/backend.jpeg";
import fullstackImg from "../assets/services/fullstack.jpeg";
import cmsImg from "../assets/services/cms.jpeg";
import collabImg from "../assets/services/collab.jpeg";
import apiImg from "../assets/services/api.jpeg";
import devopsImg from "../assets/services/devops.jpeg";
import performanceImg from "../assets/services/perfomance.jpeg";
import securityImg from "../assets/services/security.jpeg";
import responsiveImg from "../assets/services/responsive.jpeg";

const faqs = [
  {
    question: "Frontend Development",
    answer:
      "Clean, modern, and mobile-friendly websites are designed to look great on all devices.",
    image: frontendImg,
  },
  {
    question: "Backend Development",
    answer:
      "Secure and scalable systems are built to handle data and business processes efficiently.",
    image: backendImg,
  },
  {
    question: "Full-Stack Solutions",
    answer:
      "End-to-end solutions cover everything from the database to the design, ensuring a smooth and complete project delivery.",
    image: fullstackImg,
  },
  {
    question: "Content Management (CMS)",
    answer:
      "Easy-to-use tools are set up so website content can be updated anytime without technical knowledge.",
    image: cmsImg,
  },
  {
    question: "Collaboration",
    answer:
      "Projects are developed through close collaboration, ensuring goals and vision are fully achieved.",
    image: collabImg,
  },
  {
    question: "API Integration",
    answer:
      "Websites are seamlessly connected with payment systems, social media, and other third-party tools.",
    image: apiImg,
  },
  {
    question: "Deployment & Hosting",
    answer:
      "Websites are launched on reliable platforms with ongoing support to ensure stability and uptime.",
    image: devopsImg,
  },
  {
    question: "Performance",
    answer:
      "Websites are optimized for speed and efficiency, reducing load times and improving user experience.",
    image: performanceImg,
  },
  {
    question: "Security",
    answer:
      "The latest security practices are applied to protect data and maintain safe digital experiences.",
    image: securityImg,
  },
  {
    question: "Responsive Design",
    answer:
      "Websites are crafted to look and perform perfectly across phones, tablets, and desktops.",
    image: responsiveImg,
  },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
     

      {/* ✅ Services Grid Section */}
      <section className="text-gray-200 bg-[#090909] px-5 py-28">
        <p className="text-[2.8rem] font-extrabold text-center mb-[60px] tracking-wider text-gray-200">
          SERVICES
        </p>

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <img
                src={faq.image}
                alt={faq.question}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="px-[20px] py-[20px]">
                <button
                  className="w-full text-left flex justify-between items-start text-[1.25rem] font-bold text-[#222] hover:text-[#de5f5e] transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="text-[1.5rem] text-[#888] ml-3">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <p className="mt-4 text-[1rem] leading-7 text-[#333] font-medium animate-fadeIn">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 🔗 Link to Work Page */}
        <div className="text-center mt-12">
          <Link
            to="/work"
            className="inline-block px-8 py-3 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition text-white"
          >
            See Hand-Picked Projects
          </Link>
        </div>
      </section>
    </>
  );
}

export default Services;
