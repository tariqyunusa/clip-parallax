import React from 'react'

const Gallery = ({name, id}) => {
  return (
    <section className='gallery'>
      <div className="img_container">
        <img src={`/${name}.jpg`} alt="" />
      </div>
      <div className="card">
        <img src={`/${name}1.jpg`} alt="" />
      </div>
    </section>
  )
}

export default Gallery
