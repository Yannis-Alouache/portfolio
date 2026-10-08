import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import {
  ArrowRight,
  DownloadSimple,
  MapPin,
  GithubLogo,
  LinkedinLogo,
  FilePdf,
} from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext.js'
import avatar from '../Assets/Images/avatar.png'
import resume from '../Assets/Pdf/CV.pdf'

function Herobanner() {
  const { t } = useLanguage()
  const yearsOfXp = Math.max(1, new Date().getFullYear() - 2023)

  return (
    <section className='hero'>
      <div className='container hero-grid'>
        <div>
          <div className='hero-badge'>
            <span className='dot' />
            {t.hero.badge}
          </div>

          <h1 className='hero-title'>Yannis Alouache</h1>

          <p className='hero-sub'>{t.hero.sub}</p>

          <div className='hero-actions'>
            <ScrollLink to='projects' smooth offset={-80} duration={600} className='btn btn-primary'>
              {t.hero.ctaProjects} <span className='arrow'><ArrowRight size={16} weight='bold' /></span>
            </ScrollLink>
            <a href={resume} target='_blank' rel='noreferrer' className='btn btn-ghost'>
              <DownloadSimple size={16} weight='bold' /> {t.hero.ctaResume}
            </a>
          </div>
        </div>

        <div className='profile-card'>
          <div className='profile-top'>
            <img className='profile-avatar' alt={t.hero.avatarAlt} src={avatar} />
            <div>
              <div className='profile-name'>{t.hero.role}</div>
              <div className='profile-role'>Spring Boot, Angular, NestJS</div>
              <div className='profile-meta'>
                <MapPin size={12} weight='bold' /> Lille, France
              </div>
            </div>
          </div>

          <div className='profile-stats'>
            <div className='profile-stat'>
              <div className='stat-value'>8</div>
              <div className='stat-label'>{t.hero.statProjects}</div>
            </div>
            <div className='profile-stat'>
              <div className='stat-value'>3</div>
              <div className='stat-label'>{t.hero.statFreelance}</div>
            </div>
            <div className='profile-stat'>
              <div className='stat-value'>{yearsOfXp}+</div>
              <div className='stat-label'>{t.hero.statYears}</div>
            </div>
          </div>

          <div className='profile-links'>
            <a
              className='profile-link'
              href='https://github.com/Yannis-Alouache'
              target='_blank'
              rel='noreferrer'
            >
              <GithubLogo size={15} weight='bold' /> GitHub
            </a>
            <a
              className='profile-link'
              href='https://www.linkedin.com/in/yannis-alouache/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedinLogo size={15} weight='bold' /> LinkedIn
            </a>
            <a className='profile-link' href={resume} target='_blank' rel='noreferrer'>
              <FilePdf size={15} weight='bold' /> CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herobanner
