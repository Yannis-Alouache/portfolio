import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext.js'

function Banner({ name, description, link, github }) {
  const { t } = useLanguage()

  return (
    <section className='detail-hero'>
      <div className='container'>
        <Link to='/' className='back-link'>
          <ArrowLeft size={15} weight='bold' /> {t.detail.back}
        </Link>
        <h1 className='detail-title'>{name}</h1>
        <p className='detail-desc'>{t.details[name] ?? description}</p>
        <div className='detail-actions'>
          {link ? (
            <a className='btn btn-primary' href={link} target='_blank' rel='noreferrer'>
              {t.detail.visit} <span className='arrow'><ArrowUpRight size={16} weight='bold' /></span>
            </a>
          ) : (
            <span className='tag'>{t.detail.notHosted}</span>
          )}
          {github && (
            <a className='btn btn-ghost' href={github} target='_blank' rel='noreferrer'>
              {t.detail.viewGithub} <span className='arrow'><ArrowUpRight size={16} weight='bold' /></span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Banner
