import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/About/AboutHero';
import AboutHighlight from '../components/About/AboutHighlight';
import AboutServices from '../components/About/AboutServices';
import Cta from '../components/Home/Cta';
import AboutCta from '../components/About/AboutCta';
import AboutSkill from '../components/About/AboutSkill';
import AboutProcess from '../components/About/AboutProcess';

function About() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>About Yohan Labs | Professional Web Design & Development in Nairobi</title>
        <meta
          name="description"
          content="Learn about Yohan Labs, a Nairobi-based web design and development agency. We create modern, scalable, and user-friendly websites for businesses looking to grow online."
        />
      </Helmet>

      {/* Page Content */}
      <div>
        <AboutHero />
        <AboutHighlight />
        <AboutProcess />
        <AboutSkill />
        <AboutServices />
        <AboutCta />
        <Cta />
      </div>
    </>
  );
}

export default About;
