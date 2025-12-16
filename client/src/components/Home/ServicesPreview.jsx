import React from "react";

function ServicesPreview() {
  const services = [
    {
      number: "01",
      title: "Custom Website Development",
      text: "From personal blogs to functional business sites, we create tailor-made websites that reflect your brand and meet your goals.",
    },
    {
      number: "02",
      title: "E-commerce & Online Shops",
      text: "We build online stores with secure payments, stock management, and smooth checkout to help you sell without limits.",
    },
    {
      number: "03",
      title: "SEO & Performance Optimization",
      text: "Get found on Google and keep visitors engaged with fast, mobile-friendly, and search-optimized websites.",
    },
    {
      number: "04",
      title: "Web Maintenance and Support",
      text: "Regular updates, backups, and technical support to keep your website secure and performing well all year round.",
    },
  ];

  return (
    <section className="bg-[#d9b17f] text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col justify-center gap-4">
            <span className="text-6xl font-extrabold text-gray-700">{service.number}</span>
            <h3 className="text-2xl md:text-4xl font-bold text-amber-600">{service.title}</h3>
            <p className="text-gray-900 leading-relaxed">{service.text}</p>
            <div className="border-t border-gray-700 mt-4 w-16"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesPreview;
