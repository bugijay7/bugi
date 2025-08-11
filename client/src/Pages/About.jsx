import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutHighlight from '../components/About/AboutHighlight'
import AboutServices from '../components/About/AboutServices'
import Cta from '../components/Home/Cta'
import AboutCta from '../components/About/AboutCta'
import AboutSkill from '../components/About/AboutSkill'
import AboutProcess from '../components/About/AboutProcess'

function About() {
  return (
    <div>
        <AboutHero />
        <AboutHighlight />
        <AboutProcess />
         <AboutSkill />
        <AboutServices />
        <AboutCta />
        <Cta />
    </div>
  )
}

export default About