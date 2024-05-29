import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function Section2({textenter,textleave}) {
  gsap.registerPlugin(ScrollTrigger);
  const football = useRef();
    const pubg = useRef();
    const it = useRef();
    const  [text]  = useTypewriter({
      words: ['Football', 'Game', 'IT'],
      loop: {},
      typeSpeed: 100,
      deleteSpeed: 50
    });
    useLayoutEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          start: 'top top top top top',
          end: 'bottom -=500%',
          toggleClass: 'main',
          pin: true,
        }
      })
       tl.from(
        football.current,
        { opacity: 0,y: 600, x: -700, duration: 1.5},
        { opacity: 1,y: 0, x: 0, rotation: 195 ,duration: 1.5}
      ).fromTo(
        pubg.current,
        { opacity: 0,y:-500, x: 500 ,duration: 1.5},
        { opacity: 1,y: 0, x: 0, rotation: -25,duration: 1.5 }
      ).fromTo(
        it.current,
        { opacity: 0, y: 500, x: 350,duration: 1.5 },
        { opacity: 1, y: 0,x: 0, rotation: 15,duration: 1.5}
      );
    },[]);
  return (
    <>
    <section className='section2'>
      <h2 onMouseEnter={textenter} onMouseLeave={textleave}>About</h2>
      <div>
        <div className='hobbies'>
        <h3 onMouseEnter={textenter} onMouseLeave={textleave}>My Favourite Hobbies👇</h3>
        <p onMouseEnter={textenter} onMouseLeave={textleave}><span><Cursor cursorStyle='✌️' cursorColor='gold'/></span>{text}<span><Cursor cursorStyle='✌️' cursorColor='gold' /></span></p>
        
        </div>
        <div>
        <img ref={football} src="https://storage.googleapis.com/pod_public/1300/169545.jpg" alt="" />
        <img ref={pubg} src="https://gameland.gg/wp-content/uploads/2024/02/pubg.jpg" alt="" />
        <img ref={it} src="https://jobs.theguardian.com/getasset/ce653764-ad15-4ccc-b4ce-bfafa4b56449/" alt="" />
        </div>
      </div>
    </section>
    </>
    
  )
}

export default Section2