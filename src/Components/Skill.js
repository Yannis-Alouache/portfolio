import React from 'react'

function Skill({ name, icon, Icon }) {
  return (
    <span className='skill-chip'>
      {icon && <img alt={name} src={icon} loading='lazy' />}
      {Icon && <Icon size={15} weight='regular' />}
      {name}
    </span>
  )
}

export default Skill
