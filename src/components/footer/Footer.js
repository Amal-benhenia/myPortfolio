import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <Footer>
    <a className='footer_logo'>AMAL</a>
    <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#testimonials"></a>Testimonials</li>
    <li><a href="#contact">Contact</a></li>
    </ul>
    <div className='footer_socials'>
    <a href="https://www.facebook.com/amal.benhenia.39/"><FaFacebookF/></a>
    <a href="https://www.instagram.com/amal_benhenia/?hl=fr"><FiInstagram/></a>
    <a href="https://twitter.com/henia_amal"><IoLogoTwitter/></a>
    </div>
    </Footer>
  )
}

export default Footer