import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Home/Hero';
import Highlights from '../components/Home/Highlights';
import WorkPreview from '../components/Home/WorkPreview';
import Cta from '../components/Home/Cta';
import Solution from '../components/Home/Solution';
import Benefits from '../components/Home/Benefits';
import ServicesPreview from '../components/Home/ServicesPreview';

function Home() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Professional Web Design & Development in Nairobi, Kenya | Yohan Labs</title>
        <meta
          name="description"
          content="Yohan Labs provides professional web design and development in Nairobi, Kenya. Modern, fast, and scalable websites for businesses looking to grow online."
        />
      </Helmet>

      {/* Page Content */}
      <div>
        <Hero />
        <Solution />
        <ServicesPreview />
        <Benefits />
        <Highlights />
        <WorkPreview />
        <Cta />
      </div>
    </>
  );
}

export default Home;
