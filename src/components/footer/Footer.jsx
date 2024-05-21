import { Link } from 'react-router-dom'
import './Footer.css'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  let ul1 = useRef(null)
  let ul2 = useRef(null)
  let ul3 = useRef(null)
  let ul4 = useRef(null)
  useLayoutEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          start: 'top top top',
          end: 'bottom -=100%',
          pin: true
        }
      })
      tl.fromTo(
        ul1.current,
        {opacity: 0, x: -500, duration: 1.5 },
        { opacity: 1, x: 0 ,duration: 1.5 }
      )
      .fromTo(
        ul2.current,
        {opacity: 0, y: -500, duration: 1.5 },
        { opacity: 1, y: 0,duration: 1.5 }
      )
      .fromTo(
        ul3.current,
        {opacity: 0, y: 500, duration: 1.5 },
        { opacity: 1, y: 0,duration: 1.5 }
      )
      .fromTo(
        ul4.current,
        {opacity: 0, x: -500, duration: 1.5 },
        { opacity: 1, x: 0,duration: 1.5 }
      )
  },[])
  return (
    <div>
      <footer className="footer">
          <div className='links'>
          <ul ref={ul1}>
            <li><strong>Phone Numeber👇</strong></li>
            <li>+998996949044</li>
          </ul>
          <ul ref={ul2}>
            <li><strong>Git Hub👇</strong></li>
            <li><Link to='https://github.com/ikrom2008?tab=repositories'>ikrom2008</Link></li>
          </ul>
          <ul ref={ul3}>
            <li><strong>Telegram👇</strong></li>
            <li><Link to='https://t.me/DEATHANGEL_admin'>Ikrom</Link></li>
          </ul>
          <ul ref={ul4}>
            <li><strong>Gmail👇</strong></li>
            <li><Link to='https://ikrombohodirov@gmail.com'>ikrombohodirov@gmail.com</Link></li>
          </ul>
          </div>
      </footer>
    </div>
  )
}

export default Footer
