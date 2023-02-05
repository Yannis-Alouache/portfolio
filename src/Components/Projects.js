import React from 'react'
import Project from './Project'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system'

import projects from "../data/projects.json"

function Projects() {
  return (
    <section className='projects'>
      <Container className="self-center" maxWidth='lg'>
          <Grid container spacing={10}>
            {projects.map(project => (
              <Grid item xs={12} xl={6} sm={6} key={project.name}>
                <Project name={project.name} tag={project.tag} image={project.image} link={project.link}/>
              </Grid>
            ))}
          </Grid>
        </Container>
    </section>
  )
}

export default Projects