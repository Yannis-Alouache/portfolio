import React from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import Project from './Project'
import projects from '../data/projects.json'

function Projects() {
  return (
    <section className='section' id='projects'>
      <div className='container'>
        <SectionHeader
          overline='Portfolio'
          title='Projets'
          highlight='sélectionnés'
          sub="Des sites livrés pour des clients freelance et des projets personnels qui m'ont fait grandir. Cliquez sur une carte pour explorer le projet en détail."
        />
        <div className='projects-grid'>
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 2) * 130}>
              <Project {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
