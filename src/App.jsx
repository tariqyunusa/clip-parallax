import React from 'react'
import './App.css'
import { showcase } from './images'
import Gallery from './assets/Gallery'


function App() {
  return (
    <>
    <section className="wrapper">
      {showcase.map(({name, identifier}, idx) => (
        <Gallery name={name} id={identifier}  key={idx}/>
      ))}
      {/* <Card /> */}
    </section>
      
    </>
  )
}

export default App
