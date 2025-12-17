import React, { useState, useEffect } from "react";
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
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // -------------------
  // SEO using useEffect
  // -------------------
  useEffect(() => {
    // Set document title
    document.title = "Web Development & Services in Nairobi, Kenya | Yohan Labs";

    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Yohan Labs offers professional web development services in Nairobi, Kenya. Frontend, backend, full-stack, CMS, API integration, and more to grow your business online."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Yohan Labs offers professional web development services in Nairobi, Kenya. Frontend, backend, full-stack, CMS, API integration, and more to grow your business online.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <section className="text-gray-200 bg-[#d9b17f] px-5 py-28">
      <p className="text-[2.8rem] font-extrabold text-left md:text-center mb-[10px] tracking-wider text-[#1c1205]">
        SERVICES
      </p>
      <p className="text-sm md:text-base text-left md:text-center text-[#1c1205] mb-12 max-w-3xl mx-auto">
        We provide a wide range of digital services to help businesses succeed online, from frontend and backend development to full-stack solutions and seamless integrations.
      </p>

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#1c1205] shadow-md overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={faq.image}
              alt={faq.question}
              className="w-full h-40 md:h-56 object-cover"
            />

            <div className="px-[20px] py-[10px]">
              <button
                className="w-full text-left flex justify-between items-start text-[0.75rem] md:text-[1.25rem] font-bold text-[#d9b17f] hover:text-[#de5f5e] transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-[1.5rem] text-[#635109] ml-3">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-4 text-[0.6rem] md:text-[1rem] text-[#d9b17f] font-medium animate-fadeIn">
                  {faq.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/work"
          className="inline-block px-8 py-3 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition text-white"
        >
          See Hand-Picked Projects
        </Link>
      </div>
    </section>
  );
}

export default Services;
