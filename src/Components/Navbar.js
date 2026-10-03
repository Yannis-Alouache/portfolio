import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { X } from '@phosphor-icons/react'
import mainLogo from '../Assets/Images/logo.png'

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navItems = [
    { label: 'Compétences', to: 'skills' },
    { label: 'IA', to: 'ia' },
    { label: 'Projets', to: 'projects' },
  ]

  const mobileNavItems = [...navItems, { label: 'Contact', to: 'contact' }]

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
            {!isHome && <a className='nav-link' href='/'>Accueil</a>}
            <a className='nav-link' href='https://github.com/Yannis-Alouache' target='_blank' rel='noreferrer'>
              GitHub
            </a>
            {isHome && (
              <ScrollLink className='btn btn-primary btn-sm nav-cta' to='contact' {...scrollProps}>
                Me contacter
              </ScrollLink>
            )}
          </div>

          <button className='nav-burger' onClick={() => setOpen(true)} aria-label='Ouvrir le menu'>
            <span /><span /><span />
          </button>
        </nav>
      </header>

      {open && (
        <>
          <div className='drawer-backdrop' onClick={() => setOpen(false)} />
          <div className='mobile-drawer' role='dialog' aria-label='Menu de navigation'>
            <div className='mobile-head'>
              <span className='nav-brand'>
                <img className='nav-logo' alt='' src={mainLogo} />
                Menu
              </span>
              <button className='mobile-close' onClick={() => setOpen(false)} aria-label='Fermer le menu'>
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
            {!isHome && <a className='mobile-link' href='/'>Accueil</a>}
            <a className='mobile-link' href='https://github.com/Yannis-Alouache' target='_blank' rel='noreferrer'>
              GitHub
            </a>
            <a className='mobile-link' href='https://www.linkedin.com/in/yannis-alouache/' target='_blank' rel='noreferrer'>
              LinkedIn
            </a>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
