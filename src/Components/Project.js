import React from 'react'

function Project(props) {
  const { name, tag, image } = props

  return (
    <>
      <div className="project">
        <div className='wrapper'>
            <img className='image' src={require('../Assets/Images/' + image)} />
            <h1>{name}</h1>
            <p>{tag}</p>
        </div>
      </div>
    </>
  )
}

export default Project