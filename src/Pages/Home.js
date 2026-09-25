import React from 'react'
import Navbar from '../Components/Navbar'
import ScrollProgress from '../Components/ScrollProgress'
import Herobanner from '../Components/Herobanner'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import ContactMe from '../Components/ContactMe'

function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Herobanner />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  )
}

export default Home
