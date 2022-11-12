import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/TopNavbar.css'
import { About } from './About'
import { Works } from './Works'
import { Contact } from './Contact'
import { Home } from './Home'


export function TopNavbar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToComponent = (compRef: any) => {
    window.scrollTo({
      top: compRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <>
      <nav className='nav-grid'>
        <div className='grid-item'>
          Logo
        </div>
        <div className='grid-item'>
          <button onClick={() => scrollToComponent(homeRef)}>Home</button>
        </div>
        <div className='grid-item'>
          <button onClick={() => scrollToComponent(aboutRef)}>About</button>
        </div>
        <div className='grid-item'>
          <button onClick={() => scrollToComponent(worksRef)}>Works</button>
        </div>
        <div className='grid-item'>
          <button onClick={() => scrollToComponent(contactRef)}>Contact</button>
        </div>  
        <div className='grid-item'></div>
        <div className='grid-item last-item'>
          Download CV
        </div>
      </nav>

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={worksRef}>
        <Works />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  )
}
