import React from 'react'
import { TopNavbar } from './TopNavbar'
import { About } from './About'
import { Works } from './Works'
import { Contact } from './Contact'

export function Home() {
  return (
    <>
      <TopNavbar />
      <div>Home</div>
      <About />
      <Works />
      <Contact />
    </>
  )
}
