import React from 'react';
import { Helmet } from 'react-helmet-async';
import WorkHero from '../components/Work/WorkHero';
import WorkHighlighht from '../components/Work/WorkHighlights';
import Cta from '../components/Home/Cta';

function Work() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Portfolio & Projects | Yohan Labs - Web Design in Nairobi</title>
        <meta
          name="description"
          content="Explore Yohan Labs' hand-picked portfolio and projects. Modern, responsive, and professional web design & development services in Nairobi, Kenya."
        />
      </Helmet>

      {/* Page Content */}
      <div className='bg-[#1c1205]'>
        <WorkHero />
        <WorkHighlighht />
        <Cta /> 
      </div>
    </>
  );
}

export default Work;
