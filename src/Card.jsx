import React from 'react'
import { cards } from './images'
import './App.css'

const Card = ({x, y}) => {
  return (
    <>
        {cards.map((img, idx) => (
        <div className='card__wrapper' key={idx} >
            <img src={img} alt={`index ${idx + 1}`} />
        </div>
    ))}
    </>
  )
}

export default Card
