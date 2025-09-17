import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="Profile Image" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I’m Bibek Karki, a first-year Computer Science student from Kathmandu, Nepal. I like turning ideas into working products and simple demos. I build web pages with HTML, CSS, JavaScript, and React, and I’m comfortable with Python for small scripts and desktop apps (Tkinter). I’ve worked on a Hospital Management app, a Smart Air Quality Monitoring System(IoT), and TraceOn (a work-monitoring project).</p>
                    <p>Right now, I’m improving my React skills, practicing clean UI, and learning how to write readable, well-commented code. I’m open to internships, collaboration, and real-world project work where I can contribute front-end pages, simple APIs, or small IoT integrations.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width: "60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width: "40%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Python</p>
                        <hr style={{width: "70%"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About