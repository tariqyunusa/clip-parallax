import React from 'react'

const Gallery = ({name, id, position}) => {
  return (
    <section className='gallery'>
      <div className="img_container">
        <img src={`/${name}.jpg`} alt="" />
      </div>
      <div className="card" style={{left: position.x, top: position.y}}>
        <img src={`/${name}1.jpg`} alt="" />
      </div>
    </section>
  )
}

export default Gallery
