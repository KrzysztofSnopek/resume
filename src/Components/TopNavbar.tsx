import { useRef, useState } from 'react'
import '../Styles/TopNavbar.css'
import { About } from './About'
import { Works } from './Works'
import { Contact } from './Contact'
import { Home } from './Home'
import { ScrollToTopButton } from './ScrollToTopButton'
import { DownloadButton } from './DownloadButton'

export function TopNavbar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);
  const [buttonClass, setButtonClass] = useState(false)

  function handleClick () {
    setButtonClass(buttonClass => !buttonClass)
  }

  let toggleClassName = buttonClass ? 'active' : ""

  const scrollToComponent = (compRef: any) => {
    if (buttonClass === true){
      window.scrollTo({
        top: compRef.current.offsetTop-300,
        behavior: "smooth"
      })
      setButtonClass(false)
    } 
    else {
    window.scrollTo({
      top: compRef.current.offsetTop-75,
      behavior: "smooth"
    })
    }
  }

  return (
    <div className='whole-app'>
      <ScrollToTopButton />

      <nav className={`navbar ${toggleClassName}`}>
        <div>
          <a href='#' className='nav-non-btn'>Krzysztof Snopek</a>
        </div>

        <a className={`toggle-btn ${toggleClassName}`} onClick={handleClick}>
          <span className="single-bar"></span>
          <span className="single-bar"></span>
          <span className="single-bar"></span>
        </a>

        <div className={`nav-links ${toggleClassName}`}>
          <ul>
            <li>
               <a className='nav-btn' onClick={() => scrollToComponent(homeRef)}>Home</a>
            </li>
            <li>
              <a className='nav-btn' onClick={() => scrollToComponent(aboutRef)}>About</a>
            </li>
            <li>
              <a className='nav-btn' onClick={() => scrollToComponent(worksRef)}>Works</a>
            </li>
            <li>
              <a className='nav-btn' onClick={() => scrollToComponent(contactRef)}>Contact</a>
            </li>  
            <li>
              <DownloadButton />   
            </li>        
          </ul>
        </div>
      </nav>

      <div className={`page-content ${toggleClassName}`}>
        <div className='section' ref={homeRef}>
          <Home />
        </div>
        <div className='section' ref={aboutRef}>
          <About />
        </div>
        <div className='section' ref={worksRef}>
          <Works />
        </div>
        <div className='section' ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  )
}
