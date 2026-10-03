import React from 'react'
import Navbar from '../Components/Navbar'
import Herobanner from '../Components/Herobanner'
import Skills from '../Components/Skills'
import AiWorkflow from '../Components/AiWorkflow'
import Projects from '../Components/Projects'
import ContactMe from '../Components/ContactMe'

function Home() {
  return (
    <>
      <Navbar />
      <Herobanner />
      <Skills />
      <AiWorkflow />
      <Projects />
      <ContactMe />
    </>
  )
}

export default Home
