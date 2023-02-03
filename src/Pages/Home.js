import React from 'react'
import Navbar from '../Components/Navbar'
import Herobanner from "../Components/Herobanner";
import Projects from "../Components/Projects";
import About from "../Components/About";
import ContactMe from "../Components/ContactMe"
import Skills from "../Components/Skills";

function Home() {
  return (
    <>
        <Navbar />
        <Herobanner />
        <Skills />
        <Projects />
        <About />
        <ContactMe />
        <br />
        <br />
        <br />
        <br />
    </>
  )
}

export default Home