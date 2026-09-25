import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Technologies from '../Components/Technologies'
import Gallery from '../Components/Gallery'

function ProjectDetail(props) {
  const {
    name,
    description,
    link,
    technologies,
    gallery,
    github
  } = props

  return (
    <>
      <Navbar />
      <Banner name={name} description={description} link={link} github={github} />
      <Technologies technologies={technologies} />
      <Gallery gallery={gallery} />
    </>
  )
}

export default ProjectDetail
