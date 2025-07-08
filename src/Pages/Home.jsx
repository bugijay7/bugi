import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Home/Hero'
import Highlights from '../components/Home/Highlights'
import WorkPreview from '../components/Home/WorkPreview'
import Cta from '../components/Home/Cta'

function Home() {
  return (
    <div>
        <Hero />
        <Highlights />
        <WorkPreview />
        <Cta />
    </div>
  )
}

export default Home