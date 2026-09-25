import React from 'react'

function Project({ name, description, tags, badge, image, link }) {
  return (
    <a className='project-card' href={link}>
      <div className='project-media'>
        <img alt={name} src={require('../Assets/Images/' + image)} loading='lazy' />
        {badge && (
          <span className={`project-badge ${badge === 'Freelance' ? 'freelance' : ''}`}>
            {badge}
          </span>
        )}
      </div>
      <div className='project-body'>
        <div className='project-tags'>
          {tags.map(tag => (
            <span className='tag' key={tag}>{tag}</span>
          ))}
        </div>
        <h3 className='project-name'>{name}</h3>
        <p className='project-desc'>{description}</p>
        <span className='project-cta'>
          Voir le projet <span className='arrow'>→</span>
        </span>
      </div>
    </a>
  )
}

export default Project
