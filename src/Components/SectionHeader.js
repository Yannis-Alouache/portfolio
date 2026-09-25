import React from 'react'
import Reveal from './Reveal'

function SectionHeader({ overline, title, highlight, sub }) {
  return (
    <Reveal className='section-head'>
      <span className='overline'>{overline}</span>
      <h2 className='section-title'>
        {title} {highlight && <span className='grad-text'>{highlight}</span>}
      </h2>
      {sub && <p className='section-sub'>{sub}</p>}
    </Reveal>
  )
}

export default SectionHeader
