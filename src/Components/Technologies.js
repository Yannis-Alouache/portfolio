import React from 'react'
import Skill from './Skill'

function Technologies({ technologies }) {
  return (
    <div className='container detail-section'>
      <h2 className='section-title'>Technologies utilisées</h2>
      <div className='skill-chips'>
        {technologies.map(technologie => (
          <Skill
            key={technologie.id}
            name={technologie.name}
            icon={technologie.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Technologies
