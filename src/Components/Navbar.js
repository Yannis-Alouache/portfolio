import React, { useState } from 'react'
import { Drawer } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import mainLogo from '../Assets/Images/logo.png'

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navItems = [
    { label: 'Compétences', to: 'skills' },
    { label: 'Projets', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ]

  const scrollProps = { spy: true, smooth: true, offset: -80, duration: 600 }

  return (
    <>
      <header className='nav-shell'>
        <nav className='nav'>
          <a href='/' className='nav-brand'>
            <img className='nav-logo' alt='Logo Yannis Alouache' src={mainLogo} />
            Yannis<span className='grad-text'>.dev</span>
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

      <Drawer
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { background: '#0d0d17', width: '280px' } }}
      >
        <div className='mobile-links'>
          <a href='/' className='mobile-link' onClick={() => setOpen(false)}>Accueil</a>
          {isHome && navItems.map(item => (
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
          <a className='mobile-link' href='https://github.com/Yannis-Alouache' target='_blank' rel='noreferrer'>
            GitHub
          </a>
        </div>
      </Drawer>
    </>
  )
}

export default Navbar
