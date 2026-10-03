import React from 'react'
import { ArrowRight } from '@phosphor-icons/react'

function Project({ name, description, tags, badge, image, link }) {
  return (
    <a className='project-card' href={link}>
      <div className='project-media'>
        <img alt={name} src={require('../Assets/Images/' + image)} loading='lazy' />
      </div>
      <div className='project-body'>
        <div className='project-head'>
          <h3 className='project-name'>{name}</h3>
          {badge && (
            <span className={`project-badge ${badge === 'Freelance' ? 'freelance' : ''}`}>
              {badge}
            </span>
          )}
        </div>
        <p className='project-desc'>{description}</p>
        <div className='project-tags'>
          {tags.map(tag => (
            <span className='tag' key={tag}>{tag}</span>
          ))}
        </div>
        <span className='project-cta'>
          Voir le projet <ArrowRight size={14} weight='bold' />
        </span>
      </div>
    </a>
  )
}

export default Project
