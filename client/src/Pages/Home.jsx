import React, { useEffect } from 'react';
import Hero from '../components/Home/Hero';
import Highlights from '../components/Home/Highlights';
import WorkPreview from '../components/Home/WorkPreview';
import Cta from '../components/Home/Cta';
import Solution from '../components/Home/Solution';
import Benefits from '../components/Home/Benefits';
import ServicesPreview from '../components/Home/ServicesPreview';

function Home() {
  // -------------------
  // SEO using useEffect
  // -------------------
  useEffect(() => {
    // Set document title
    document.title = "Professional Web Design & Development in Nairobi, Kenya | Yohan Labs";

    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Yohan Labs provides professional web design and development in Nairobi, Kenya. Modern, fast, and scalable websites for businesses looking to grow online."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Yohan Labs provides professional web design and development in Nairobi, Kenya. Modern, fast, and scalable websites for businesses looking to grow online.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      <Hero />
      <Solution />
      <ServicesPreview />
      <Benefits />
      <Highlights />
      <WorkPreview />
      <Cta />
    </div>
  );
}

export default Home;
