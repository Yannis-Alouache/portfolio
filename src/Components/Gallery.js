import React, { useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'

function Gallery({ gallery }) {
  const [viewer, setViewer] = useState({ open: false, index: 0 })
  const images = gallery.map(item => require('../Assets/Images/' + item))

  return (
    <div className='container detail-section'>
      <span className='overline'>Aperçus</span>
      <h2 className='section-title' style={{ fontSize: '28px' }}>
        Galerie
      </h2>
      <div className='gallery-grid'>
        {gallery.map((item, index) => (
          <img
            key={item}
            src={images[index]}
            alt={`Aperçu ${index + 1}`}
            loading='lazy'
            onClick={() => setViewer({ open: true, index })}
          />
        ))}
      </div>

      {viewer.open && (
        <ImageViewer
          src={images}
          currentIndex={viewer.index}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={() => setViewer({ open: false, index: 0 })}
        />
      )}
    </div>
  )
}

export default Gallery
