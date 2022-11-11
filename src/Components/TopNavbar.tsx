import React from 'react'
import '../Styles/TopNavbar.css'


export function TopNavbar() {
  return (
    <nav className='nav-grid'>
      <div className='grid-item'>
        Logo
      </div>
      <div className='grid-item'>
        Home
      </div>
      <div className='grid-item'>
        About
      </div>
      <div className='grid-item'>
        Works
      </div>
      <div className='grid-item'>
        Contact
      </div>  
      <div className='grid-item'></div>
      <div className='grid-item last-item'>
        Download CV
      </div>
    </nav>
  )
}
