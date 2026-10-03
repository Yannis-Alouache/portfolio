import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react'

function Banner({ name, description, link, github }) {
  return (
    <section className='detail-hero'>
      <div className='container'>
        <Link to='/' className='back-link'>
          <ArrowLeft size={15} weight='bold' /> Retour aux projets
        </Link>
        <h1 className='detail-title'>{name}</h1>
        <p className='detail-desc'>{description}</p>
        <div className='detail-actions'>
          {link ? (
            <a className='btn btn-primary' href={link} target='_blank' rel='noreferrer'>
              Visiter le site <span className='arrow'><ArrowUpRight size={16} weight='bold' /></span>
            </a>
          ) : (
            <span className='tag'>Non hébergé pour le moment</span>
          )}
          {github && (
            <a className='btn btn-ghost' href={github} target='_blank' rel='noreferrer'>
              Voir sur GitHub <span className='arrow'><ArrowUpRight size={16} weight='bold' /></span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Banner
