import React from 'react'
import Skill from './Skill'
import { useLanguage } from '../i18n/LanguageContext.js'

function Technologies({ technologies }) {
  const { t } = useLanguage()

  return (
    <div className='container detail-section'>
      <h2 className='section-title'>{t.detail.tech}</h2>
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
