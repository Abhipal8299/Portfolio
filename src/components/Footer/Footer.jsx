import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <a href="#" className =" footer__logo">Abhi-Portfolio</a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook />
        </a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Abhi-portfolio</small>
      </div>
    </footer>
  )
}

export default Footer
