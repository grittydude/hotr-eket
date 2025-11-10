import React from 'react'
import './navbar.css'
import logo from '../../assets/hotr-logo.png'
import { useState } from 'react'
import { useEffect } from 'react'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <a href=""><li>About</li></a>
        <a href=""><li>Gallery</li></a>
        <a href=""><li>Events</li></a>
        <a href=""><li>Contact</li></a>
        <li><button className='btn'>Send a testimony</button> </li>
      </ul>
      
    </nav>
  )
}

export default Navbar
