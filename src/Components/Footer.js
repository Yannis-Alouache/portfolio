import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer-inner'>
        <span>© {new Date().getFullYear()} Yannis Alouache</span>
        <span>
          Conçu et développé avec <span className='footer-heart'>♥</span> en React
        </span>
        <div className='footer-links'>
          <a href='https://github.com/Yannis-Alouache' target='_blank' rel='noreferrer'>
            GitHub
          </a>
          <a href='https://www.linkedin.com/in/yannis-alouache/' target='_blank' rel='noreferrer'>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
