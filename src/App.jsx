import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { showcase } from './images'
import Gallery from './assets/Gallery'

const lerp = (start, end, factor) => start + (end - start) * factor

function App() {
  const [position, setPosition] = useState({x:0, y:0})
  const targetPosition = useRef({x: 0, y: 0})

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      setPosition((prev) => ({
        x: lerp(prev.x, targetPosition.current.x, 0.1),
        y: lerp(prev.y, targetPosition.current.y, 0.1),
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
 
  return (
    <>
    <section className="wrapper" >
      {showcase.map(({name, identifier}, idx) => (
        <Gallery name={name} id={identifier}  key={idx} position={position}/>
      ))}
      {/* <Card /> */}
    </section>
      
    </>
  )
}

export default App
