import { useLayoutEffect, useRef } from 'react';
import './Main.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

function Main() {
   gsap.registerPlugin(ScrollTrigger);
  const dog1 = useRef();
  const dog2 = useRef();
  const dog3 = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: 'top top',
        end: 'bottom -=100%',
        toggleClass: 'square-act',
        pin: true,
      }
    })

     tl.fromTo(
      dog1.current,
      { opacity: 0, x: -500, duration: 1.5 },
      { opacity: 1, x: 0, rotation: 25 ,duration: 1.5 }
    ).fromTo(
      dog2.current,
      { opacity: 0, x: 500 ,duration: 1.5},
      { opacity: 1, x: 0, rotation: -25,duration: 1.5 }
    ).fromTo(
      dog3.current,
      { opacity: 0, y: -500,duration: 1.5 },
      { opacity: 1, y: 0, rotation: 15,duration: 1.5}
    );
  },[]);

  return (
    <div>
      <main className="main">
        <section className='main'>
          <img
            ref={dog1}
            src="https://www.akc.org/wp-content/uploads/2015/10/puppy-500x500.jpg"
            alt=""
          />
          <img
            ref={dog2}
            src="https://i.pinimg.com/736x/bb/6d/e8/bb6de80e6bae8d2f6f5e460d242b6628.jpg"
            alt=""
          />
          <img
            ref={dog3}
            src="https://www.lovethispic.com/uploaded_images/162035-Puppy-Stare.jpg"
            alt=""
          />
          <div className='goresume'>
          <h2>My Resume👇</h2>
          <Link to='https://www.canva.com/design/DAGF459evsg/55Ihvzemq-g-vum0PKhWSA/view?utm_content=DAGF459evsg&utm_campaign=designshare&utm_medium=link&utm_source=editor'>
          <button>Go to resume</button>
          </Link>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default Main;
