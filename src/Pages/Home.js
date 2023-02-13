import React from 'react'
import Navbar from '../Components/Navbar'
import Herobanner from "../Components/Herobanner";
import Projects from "../Components/Projects";
import ContactMe from "../Components/ContactMe"
import Skills from "../Components/Skills";

function Home() {
  return (
    <>
        <Navbar />
        <Herobanner />
        <Skills />
        <Projects />
        <ContactMe />
    </>
  )
}

export default Home