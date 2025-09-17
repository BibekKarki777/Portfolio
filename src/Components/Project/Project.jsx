import React from 'react'
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../../assets/image.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'

const Project = () => {
  return (
    <div id="project" className="project">
        <div className="project-title">
            <h1>My Projects</h1>
        </div>
        <div className="project-cards-container">
            <div className="project-card">
                <div className="card-image">
                    <img src={image4} alt="Hospital Management System"/>
                </div>
                <div className="card-content">
                    <h2 className="project-title">Hospital Management System</h2>
                    <div className="project-year">2023</div>
                    <p className="project-description">
                    A comprehensive desktop application for managing hospital operations, 
                    patient records, and administrative tasks.
                    </p>
                    <div className="tech-stack">
                        <span className="tech-item">Python</span>
                        <span className="tech-item">Tkinter</span>
                        <span className="tech-item">SQLite</span>
                    </div>
                    <div className="divider"></div>
                    <div className="card-footer">
                        <a href="#" className="card-btn primary-btn">
                            View Details <FontAwesomeIcon icon={faExternalLinkAlt} style={{height:"15px",width:"15px"}}/>
                        </a>
                        <a href="https://github.com/BibekKarki777/Hospital-Management-System.git" target="_blank" className="card-btn">
                            GitHub <FontAwesomeIcon icon={faGithub} style={{height:"20px",width:"20px"}} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <div className="card-image">
                    <img src={image} alt="Static Website"/>
                </div>
                <div className="card-content">
                    <h2 className="project-title">Static Website</h2>
                    <div className="project-year">2024</div>
                    <p className="project-description">
                    A responsive static website built with HTML and CSS, featuring modern design principles.
                    </p>
                    <div className="tech-stack">
                        <span className="tech-item">HTML</span>
                        <span className="tech-item">CSS</span>
                        <span className="tech-item">JavaScript</span>
                    </div>
                    <div className="divider"></div>
                    <div className="card-footer">
                        <a href="#" className="card-btn primary-btn">
                            View Details <FontAwesomeIcon icon={faExternalLinkAlt} style={{height:"15px",width:"15px"}}/>
                        </a>
                        <a href="#" target="_blank" className="card-btn">
                            GitHub <FontAwesomeIcon icon={faGithub} style={{height:"20px",width:"20px"}} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <div className="card-image">
                    <img src={image3} alt="Work Monitoring System"/>
                </div>
                <div className="card-content">
                    <h2 className="project-title">Work Monitoring System</h2>
                    <div className="project-year">2025</div>
                    <p className="project-description">
                    A Python application to monitor and track work progress with reporting features.
                    </p>
                    <div className="tech-stack">
                        <span className="tech-item">Python</span>
                        <span className="tech-item">Data Visualization</span>
                        <span className="tech-item">SQLite</span>
                    </div>
                    <div className="divider"></div>
                    <div className="card-footer">
                        <a href="#" className="card-btn primary-btn">
                            View Details <FontAwesomeIcon icon={faExternalLinkAlt} style={{height:"15px",width:"15px"}}/>
                        </a>
                        <a href="https://github.com/Utu8848/TraceOn-WMS.git" target="_blank" className="card-btn">
                            GitHub <FontAwesomeIcon icon={faGithub} style={{height:"20px",width:"20px"}} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <div className="card-image">
                    <img src={image2} alt="Smart Air Quality Monitor"/>
                </div>
                <div className="card-content">
                    <h2 className="project-title">Smart Air Quality Monitoring System</h2>
                    <div className="project-year">2023</div>
                    <p className="project-description">
                    An IoT project using Arduino and sensors to monitor air quality with data logging.
                    </p>
                    <div className="tech-stack">
                        <span className="tech-item">Arduino</span>
                        <span className="tech-item">Sensors</span>
                        <span className="tech-item">IoT</span>
                    </div>
                    <div className="divider"></div>
                    <div className="card-footer">
                        <a href="#" className="card-btn primary-btn">
                            View Details <FontAwesomeIcon icon={faExternalLinkAlt} style={{height:"15px",width:"15px"}}/>
                        </a>
                        <a href="https://github.com/BibekKarki777/Smart-Air-Quality-Monitoring.git" target="_blank" className="card-btn">
                            GitHub <FontAwesomeIcon icon={faGithub} style={{height:"20px",width:"20px"}} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Project;