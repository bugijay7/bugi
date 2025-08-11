import React from 'react'
import Hero from '../components/Home/Hero'
import Highlights from '../components/Home/Highlights'
import WorkPreview from '../components/Home/WorkPreview'
import Cta from '../components/Home/Cta'
import Solution from '../components/Home/Solution'

function Home() {
  return (
    <div className='bg-gray-200'>
        <Hero />
        <Solution />
        <Highlights />
        <WorkPreview />
        <Cta />
    </div>
  )
}

export default Home