import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutHighlight from '../components/About/AboutHighlight'
import AboutServices from '../components/About/AboutServices'
import Cta from '../components/Home/Cta'
import AboutPreview from '../components/About/AboutPreview'

function About() {
  return (
    <div>
        <AboutHero />
        <AboutHighlight />
        <AboutServices />
        <AboutPreview />
        <Cta />
    </div>
  )
}

export default About