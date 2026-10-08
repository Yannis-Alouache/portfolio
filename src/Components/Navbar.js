import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { X } from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext.js'
import mainLogo from '../Assets/Images/logo.png'

function LangSwitch() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className='lang-switch' role='group' aria-label={t.nav.switchAria}>
      <button
        type='button'
        className={lang === 'fr' ? 'active' : ''}
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
      >
        FR
      </button>
      <button
        type='button'
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.skills, to: 'skills' },
    { label: t.nav.ai, to: 'ia' },
    { label: t.nav.projects, to: 'projects' },
  ]

  const mobileNavItems = [...navItems, { label: t.nav.contactCta, to: 'contact' }]

  const scrollProps = { spy: true, smooth: true, offset: -80, duration: 600 }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className='nav-shell'>
        <nav className='container nav'>
          <a href='/' className='nav-brand'>
            <img className='nav-logo' alt='Logo Yannis Alouache' src={mainLogo} />
            Yannis Alouache
          </a>

          <div className='nav-links'>
            {isHome && navItems.map(item => (
              <ScrollLink key={item.to} className='nav-link' to={item.to} activeClass='active' {...scrollProps}>
                {item.label}
              </ScrollLink>
            ))}
            {!isHome && <a className='nav-link' href='/'>{t.nav.home}</a>}
            <a className='nav-link' href='https://github.com/Yannis-Alouache' target='_blank' rel='noreferrer'>
              GitHub
            </a>
            {isHome && (
              <ScrollLink className='btn btn-primary btn-sm nav-cta' to='contact' {...scrollProps}>
                {t.nav.contactCta}
              </ScrollLink>
            )}
            <LangSwitch />
          </div>

          <button className='nav-burger' onClick={() => setOpen(true)} aria-label={t.nav.openMenu}>
            <span /><span /><span />
          </button>
        </nav>
      </header>

      {open && (
        <>
          <div className='drawer-backdrop' onClick={() => setOpen(false)} />
          <div className='mobile-drawer' role='dialog' aria-label={t.nav.navDialog}>
            <div className='mobile-head'>
              <span className='nav-brand'>
                <img className='nav-logo' alt='' src={mainLogo} />
                {t.nav.menu}
              </span>
              <button className='mobile-close' onClick={() => setOpen(false)} aria-label={t.nav.closeMenu}>
                <X size={20} weight='bold' />
              </button>
            </div>
            {isHome && mobileNavItems.map(item => (
              <ScrollLink
                key={item.to}
                className='mobile-link'
                to={item.to}
                smooth
                offset={-80}
                duration={600}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
            {!isHome && <a className='mobile-link' href='/'>{t.nav.home}</a>}
            <a className='mobile-link' href='https://github.com/Yannis-Alouache' target='_blank' rel='noreferrer'>
              GitHub
            </a>
            <a className='mobile-link' href='https://www.linkedin.com/in/yannis-alouache/' target='_blank' rel='noreferrer'>
              LinkedIn
            </a>
            <div className='mobile-lang'>
              <LangSwitch />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
