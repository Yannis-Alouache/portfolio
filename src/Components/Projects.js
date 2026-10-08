import React from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import Project from './Project'
import projects from '../data/projects.json'
import { useLanguage } from '../i18n/LanguageContext.js'

function Projects() {
  const { t } = useLanguage()

  return (
    <section className='section' id='projects'>
      <div className='container'>
        <SectionHeader
          title={t.projects.title}
          sub={t.projects.sub}
        />
        <div className='projects-grid'>
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 2) * 110}>
              <Project {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
