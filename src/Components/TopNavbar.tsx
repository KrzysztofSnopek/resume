import { useRef } from 'react'
import '../Styles/TopNavbar.css'
import { About } from './About'
import { Works } from './Works'
import { Contact } from './Contact'
import { Home } from './Home'
import { ScrollToTopButton } from './ScrollToTopButton'
import { DownloadButton } from './DownloadButton'
import { GiProgression } from 'react-icons/gi'


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
    <div>
      <ScrollToTopButton />
      
      <nav className='nav-grid'>
        <div className='grid-item'>
          <button className='nav-non-btn'><GiProgression /></button>
        </div>
        <div className='grid-item'>
          <button className='nav-btn' onClick={() => scrollToComponent(homeRef)}>Home</button>
        </div>
        <div className='grid-item'>
          <button className='nav-btn' onClick={() => scrollToComponent(aboutRef)}>About</button>
        </div>
        <div className='grid-item'>
          <button className='nav-btn' onClick={() => scrollToComponent(worksRef)}>Works</button>
        </div>
        <div className='grid-item'>
          <button className='nav-btn' onClick={() => scrollToComponent(contactRef)}>Contact</button>
        </div>  
        <div className='grid-item'></div>
        <div className='grid-item last-item'>
          <DownloadButton />
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
    </div>
  )
}
