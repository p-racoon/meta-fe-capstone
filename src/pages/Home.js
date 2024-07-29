import React from 'react'
import IntroBanner from '../components/IntroBanner/IntroBanner'
import Specials from '../components/Specials/Specials'
import Testimonials from '../components/Testimonials/Testimonials'
import About from '../components/About/About'


function Home() {
  return (
    <div>
      <IntroBanner/>
      <Specials/>
      <Testimonials/>
      <About/>
    </div>
  )
}

export default Home
