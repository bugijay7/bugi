import React, { useEffect } from 'react';
import AboutHero from '../components/About/AboutHero';
import AboutHighlight from '../components/About/AboutHighlight';
import AboutServices from '../components/About/AboutServices';
import Cta from '../components/Home/Cta';
import AboutCta from '../components/About/AboutCta';
import AboutSkill from '../components/About/AboutSkill';
import AboutProcess from '../components/About/AboutProcess';

function About() {
  // -------------------
  // SEO using useEffect
  // -------------------
  useEffect(() => {
    // Set document title
    document.title = "About Yohan Labs | Professional Web Design & Development in Nairobi";

    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn about Yohan Labs, a Nairobi-based web design and development agency. We create modern, scalable, and user-friendly websites for businesses looking to grow online."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Learn about Yohan Labs, a Nairobi-based web design and development agency. We create modern, scalable, and user-friendly websites for businesses looking to grow online.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      <AboutHero />
      <AboutHighlight />
      <AboutProcess />
      <AboutSkill />
      <AboutServices />
      <AboutCta />
    </div>
  );
}

export default About;
