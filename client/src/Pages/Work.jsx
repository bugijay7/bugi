import React from 'react'
import WorkHero from '../components/Work/WorkHero'
import WorkHighlighht from '../components/Work/WorkHighlights'
import Cta from '../components/Home/Cta'

function Work() {
  return (
    <div className='bg-[#090909]'>
      <WorkHero />
      <WorkHighlighht  />
      <Cta /> 
    </div>
  )
}

export default Work