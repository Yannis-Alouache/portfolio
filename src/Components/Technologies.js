import React from 'react'
import Skill from './Skill'

function Technologies({ technologies }) {
  return (
    <div className='container detail-section'>
      <span className='overline'>Stack</span>
      <h2 className='section-title' style={{ fontSize: '28px' }}>
        Technologies utilisées
      </h2>
      <div className='skill-chips'>
        {technologies.map(technologie => (
          <Skill
            key={technologie.id}
            name={technologie.name}
            icon={technologie.image}
            invert={technologie.invert}
          />
        ))}
      </div>
    </div>
  )
}

export default Technologies
