import React from 'react'
import './Main.css'
function Section3({textenter,textleave}) {
  return (
    <>
    <section className='section3'>
      <h2 onMouseEnter={textenter} onMouseLeave={textleave}>My Projects</h2>
      
    </section>
    </>
    
  )
}

export default Section3
