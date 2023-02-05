import { Link } from '@mui/material'
import React from 'react'

function Project(props) {
  const { name, tag, image, link } = props

  return (
    <>
      <Link sx={{textDecoration: "none"}} href={link}>
        <div className="project">
          <div className='wrapper'>
              <img className='image' alt="project" src={require('../Assets/Images/' + image)} />
              <h1>{name}</h1>
              <p>{tag}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Project