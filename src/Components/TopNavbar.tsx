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
    window.scrollTo({
      top: compRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div>
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
      </div>
    </div>
  )
}
