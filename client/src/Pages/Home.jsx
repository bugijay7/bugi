import React from 'react'
import Hero from '../components/Home/Hero'
import Highlights from '../components/Home/Highlights'
import WorkPreview from '../components/Home/WorkPreview'
import Cta from '../components/Home/Cta'
import Solution from '../components/Home/Solution'
import Benefits from '../components/Home/Benefits'
import ServicesPreview from '../components/Home/ServicesPreview'

function Home() {
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
  )
}

export default Home


