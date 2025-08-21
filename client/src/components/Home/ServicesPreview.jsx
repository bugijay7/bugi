import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/servicespreview.css'

function ServicesPreview() {
  const services = [
    {
      title: 'Custom Website Development',
      text: 'From personal blogs to functional business sites, we create tailor-made websites that reflect your brand and meet your goals.',
    },
    {
      title: 'E-commerce & Online Shops',
      text: 'We build online stores with secure payments, stock management, and smooth checkout to help you sell without limits.',
    },
    {
      title: 'SEO & Performance Optimization',
      text: 'Get found on Google and keep visitors engaged with fast, mobile-friendly, and search-optimized websites.',
    },
    {
      title: 'Web Maintenance and  Support',
      text: 'Regular updates, backups, and technical support to keep your website secure and performing well all year round.',
    },
  ];

  return (
    <div className='service-preview-container'>
      <div className='service-preview-box'>
        <div className='preview-box-left'>
          <h2>A preview look at what we offer and how we deliver</h2>
          <p>For a more in-depth look at the process</p>
          <a href="/about/creative-process" className="benefits-button" aria-label="Start your project">
            Process
          </a>
        </div>

        <div className='preview-box-right'>
          {services.map((service, index) => (
            <div className='service-preview-card' key={index}>
              <h3 className='preview-card-title'>{service.title}</h3>
              <p className='preview-card-text'>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPreview;
