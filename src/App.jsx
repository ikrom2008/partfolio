import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Fullpages from './components/fullpages/Fullpages'
import { useEffect, useState } from 'react'
import {color, motion} from 'framer-motion'
function App() {
  const [mosueps,setMouseps] = useState({
    x:0,
    y:0
  })
  const [mousevr,setMousevr] = useState('default')
  useEffect(() => {
    const mousemove = e => {
        setMouseps({
          x: e.clientX,
          y: e.clientY
        })
    }
    window.addEventListener('mousemove' , mousemove)

    return () => {
      window.removeEventListener('mousemove',mousemove)
    }
  },[])
  const variants = {
    default: {
      x: mosueps.x -16,
      y: mosueps.y -16,
      width: 32,
      height: 32,
      backgroundColor: 'black',
    },
    text:{
      x: mosueps.x -16,
      y: mosueps.y -16,
      width: 70,
      height: 70,
      backgroundColor: 'yellow',
      mixBlendMode: 'difference'
    },
    bigtext:{
      x: mosueps.x -16,
      y: mosueps.y -16,
      width: 150,
      height: 150,
      backgroundColor: 'yellow',
      mixBlendMode: 'difference'
    }
  }
  const textenter = () => setMousevr('text')
  const textleave = () => setMousevr('default')
  const bigtextenter = () => setMousevr('bigtext')
  return (
    <>
    <div className='container'>
      <motion.div className='cursor' variants={variants} animate={mousevr}/>
      
      <Routes>
        <Route path='/' element={
        <div>
          <Fullpages bigtextenter={bigtextenter} textenter={textenter} textleave={textleave} />
        </div>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    </>
  )
}

export default App
