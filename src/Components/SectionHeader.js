import React from 'react'
import Reveal from './Reveal'

function SectionHeader({ title, sub }) {
  return (
    <Reveal className='section-head'>
      <h2 className='section-title'>{title}</h2>
      {sub && <p className='section-sub'>{sub}</p>}
    </Reveal>
  )
}

export default SectionHeader
