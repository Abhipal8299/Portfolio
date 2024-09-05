import React from 'react'
import './Nav.css'
import { IoMdHome } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
// import { FaServicestack } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useState } from 'react';

function Nav() {
  const[activeNav,setActiveNav] = useState('#')
  return (
  <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoMdHome />
    </a>
    <a href="#about"  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiUser />
    </a>
    <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook />
    </a>
    {/* <a href="#services"  onClick={() => setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><FaServicestack />
    </a> */}
    <a href="#contact"  onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><IoMdContact />
    </a>
  </nav>
  )
}

export default Nav
