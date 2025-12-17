import React, { useEffect } from 'react';
import WorkHero from '../components/Work/WorkHero';
import WorkHighlighht from '../components/Work/WorkHighlights';
import Cta from '../components/Home/Cta';

function Work() {
  // -------------------
  // SEO using useEffect
  // -------------------
  useEffect(() => {
    // Set document title
    document.title = "Portfolio & Projects | Yohan Labs - Web Design in Nairobi";

    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore Yohan Labs' hand-picked portfolio and projects. Modern, responsive, and professional web design & development services in Nairobi, Kenya."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore Yohan Labs' hand-picked portfolio and projects. Modern, responsive, and professional web design & development services in Nairobi, Kenya.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className='bg-[#1c1205]'>
      <WorkHero />
      <WorkHighlighht />
      <Cta /> 
    </div>
  );
}

export default Work;
