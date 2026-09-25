import React from 'react'

function Skill({ name, icon, invert }) {
  return (
    <span className='skill-chip'>
      {icon && (
        <img className={invert ? 'invert' : ''} alt={name} src={icon} loading='lazy' />
      )}
      {name}
    </span>
  )
}

export default Skill
