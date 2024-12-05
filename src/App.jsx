import React from 'react'
import './App.css'
import { bg } from './images'
import Card from './Card'

function App() {
  

  return (
    <>
    <section className="wrapper">
      {bg.map((img, idx) => (
        <div className="img__wrapper" key={idx}>
          <img src={img} alt={`index ${idx + 1}`} />
        </div>
      ))}
      <Card />
    </section>
      
    </>
  )
}

export default App
