import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Technologies from '../Components/Technologies'
import Gallery from '../Components/Gallery'

function ProjectDetail(props) {
  let {
    name,
    description,
    link,
    technologies,
    gallery,
    informations
  } = props

  return (
    <>
      <Navbar />
      <section className='projectDetail'>
        <Banner name={name} description={description} />
        <Technologies technologies={technologies} />
        <Gallery gallery={gallery} />
      </section>
    </>
  )
}

export default ProjectDetail