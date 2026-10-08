import React from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext.js'

const BADGE_KEYS = {
  Freelance: 'freelance',
  'Projet perso': 'personal',
  'Projet étudiant': 'student',
}

function Project({ name, description, tags, badge, image, link }) {
  const { t } = useLanguage()
  const badgeKey = BADGE_KEYS[badge]
  const badgeLabel = badgeKey ? t.projects.badges[badgeKey] : badge

  return (
    <a className='project-card' href={link}>
      <div className='project-media'>
        <img alt={name} src={require('../Assets/Images/' + image)} loading='lazy' />
      </div>
      <div className='project-body'>
        <div className='project-head'>
          <h3 className='project-name'>{name}</h3>
          {badgeLabel && (
            <span className={`project-badge ${badgeKey === 'freelance' ? 'freelance' : ''}`}>
              {badgeLabel}
            </span>
          )}
        </div>
        <p className='project-desc'>{t.projects.descriptions[name] ?? description}</p>
        <div className='project-tags'>
          {tags.map(tag => (
            <span className='tag' key={tag}>{t.projects.tags[tag] ?? tag}</span>
          ))}
        </div>
        <span className='project-cta'>
          {t.projects.cta} <ArrowRight size={14} weight='bold' />
        </span>
      </div>
    </a>
  )
}

export default Project
