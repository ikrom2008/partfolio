import React, { useRef } from 'react';
import './Hero.css';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function Hero() {
  const comp = useRef(null);
  const title1 = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const welcome = useRef(null);
  const welcome2 = useRef(null);
  const welcome3= useRef(null);
  const intro = useRef(null);
  const  [text]  = useTypewriter({
    words: ['Developer', 'Programmer', 'Designer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50
  });
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(intro.current, {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
        
      }).from([title1.current, title2.current, title3.current], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
       
      }).to([title1.current, title2.current, title3.current], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
        
      }).to(intro.current, {
        xPercent: "-100",
        duration: 1.3,
      }).from([welcome.current,welcome2.current,welcome3.current], {
        opacity: 0,
        y: "+=30",
        duration: 1.5,
        
      });
    }, comp)
    return () => ctx.revert()

  }, []);

  return (
    <div className='bighero' style={{ position: 'relative' }} ref={comp}>
      <div className='texts' ref={intro}>
        <h1 ref={title1}>FRONTEND DEVELOPER</h1>
        <h1 ref={title2}>HTML CSS</h1>
        <h1 ref={title3}>REACT JS , JavaScript</h1>
      </div>
      <div className="hero">
        <h1 style={{ color: 'white' }} className='text-9xl text-gray-100' ref={welcome}>Welcome.</h1>
        <h2 ref={welcome2}>Hi, It's <span style={{color: 'aqua'}}>Ikrom</span></h2>
        <h3 ref={welcome3} style={{ margin: '50px' }}>I'm a{" "} <span style={{ fontWeight: 'bold', color: 'green' }}>{text}</span><span><Cursor cursorStyle='</>' cursorColor='gold' /></span></h3>
      </div>
    </div>
  );
}

export default Hero;
