import React from "react";

function ServicesPreview() {
  const services = [
    {
      title: "Custom Website Development",
      text: "From personal blogs to functional business sites, we create tailor-made websites that reflect your brand and meet your goals.",
      bg: "bg-amber-900",
      textColor: "text-white", 
    },
    {
      title: "E-commerce & Online Shops",
      text: "We build online stores with secure payments, stock management, and smooth checkout to help you sell without limits.",
      bg: "bg-amber-800",
      textColor: "text-white",
    },
    {
      title: "SEO & Performance Optimization",
      text: "Get found on Google and keep visitors engaged with fast, mobile-friendly, and search-optimized websites.",
      bg: "bg-amber-700",
      textColor: "text-white",
    },
    {
      title: "Web Maintenance and Support",
      text: "Regular updates, backups, and technical support to keep your website secure and performing well all year round.",
      bg: "bg-amber-600",
      textColor: "text-white",
    },
  ];

  return (
    <div className="w-full h-screen grid grid-cols-1 sm:grid-cols-2">
      {services.map((service, index) => (
        <div
          key={index}
          className={`${service.bg} ${service.textColor} flex flex-col justify-center items-center text-center p-8 h-[50vh]`}
        >
          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
          <p className="max-w-md text-sm md:text-base leading-relaxed">
            {service.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ServicesPreview;
