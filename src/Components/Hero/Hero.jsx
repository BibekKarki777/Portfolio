import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <div className="hero-content">
        <div className="hero-text">
          <h1><span>I'm Bibek Karki,</span> Computer Science Student</h1>
          <p>I make clean, simple web pages with HTML, CSS, JavaScript, and React. I’ve built a Hospital Management app (Tkinter), a Smart Air Quality Monitoring System (IOT), and Work Monitoring System(Python). Looking for real-world project work and internships.</p>
          <div className="hero-action">
            <div className="hero-connect"><span></span> <FontAwesomeIcon icon={faDownload} style={{paddingRight:"10px"}}/>Download CV </div>
            <div className="hero-resume"><span></span>View Projects</div>
          </div>
        </div>
        <div className="hero-image">
          <img src={profile_img} alt="Profile Image" />
        </div>
      </div>
    </div>
  )
}

export default Hero