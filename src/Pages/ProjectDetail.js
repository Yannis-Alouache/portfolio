import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Technologies from '../Components/Technologies'
import Gallery from '../Components/Gallery'
import { Link, Typography } from '@mui/material'
import { Container } from '@mui/system'

function ProjectDetail(props) {
  let {
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
      <section className='projectDetail'>
        <Banner name={name} description={description} link={link}/>
        <Technologies technologies={technologies} />
        <Gallery gallery={gallery} />
        <Container maxWidth="lg">
          <Typography variant='h4'>Github</Typography>
          <Link href={github}>{github}</Link>
        </Container>
      </section>
    </>
  )
}

export default ProjectDetail