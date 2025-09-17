import React, { useState } from 'react';
import './certificate.css';
import sql from '../../assets/sql.jpg';
import numpy from '../../assets/numpy.png';
import frontend from '../../assets/frontend.jpg';
import python from '../../assets/python.png';
import design_thinking from '../../assets/design_thinking.png';
import school from '../../assets/school.png';
import college from '../../assets/college.png';
import university from '../../assets/University.png';
import aws from '../../assets/aws.png';
import git from '../../assets/git.png';
import prompt from '../../assets/prompt.png';

// Import React Icons
import { SiHtml5, SiCss3, SiJavascript,SiPython, SiReact, SiGit, SiBootstrap, SiNumpy} from 'react-icons/si';


const Certificate = () => {
  const [activeSection, setActiveSection] = useState('education');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const [education] = useState([
    {
      id: 1,
      issuerImage: school,
      title: "Primary Level Education",
      description: "I have completed my primary level education from Sainik Awasiya Mahavidyalaya School, Sallaghari, Bhaktapur. It is a school run by Nepalese Army. I completed my SLC from this school securing 3.7 GPA."
    },
    {
      id: 2,
      issuerImage: college,
      title: "Secondary Level Education",
      description: "I have completed my secondary level education from Sainik Awasiya Mahavidyalaya School, Sallaghari, Bhaktapur. It is a school run by Nepalese Army. I completed my +2 level from this school securing 3.8 GPA"
    },
    {
      id: 3,
      issuerImage: university,
      title: "Higher Education",
      description: "I am currently pursuing my Bachelor's degree in AI from Sunway College, Nepal. I am in my first year of study and looking forward to learning more about computer science, AI and its applications."
    }
  ]);

  const [certificates] = useState([
    {
      id: 1,
      title: "SQL for Data Science",
      issuer: "Sololearn",
      issuerImage: sql,
      certificateImage: sql 
    },
    {
      id: 2,
      title: "Numpy for Data Science",
      issuer: "Programiz",
      issuerImage: numpy,
      certificateImage: numpy
    },
    {
      id: 3,
      title: "Frontend for Beginners",
      issuer: "Sololearn",
      issuerImage: frontend,
      certificateImage: frontend
    },
    {
      id: 4,
      title: "Python Basics",
      issuer: "Programiz",
      issuerImage: python,
      certificateImage: python
    },
    {
      id: 5,
      title: "Design Thinking",
      issuer: "IBM",
      issuerImage: design_thinking,
      certificateImage: design_thinking
    },
    {
      id: 6,
      title: "AWS Concepts",
      issuer: "DataCamp",
      issuerImage: aws,
      certificateImage: aws
    },
    {
      id: 7,
      title: "Git Concepts",
      issuer: "DataCamp",
      issuerImage: git,
      certificateImage: git
    },
    {
      id: 8,
      title: "Understanding Prompt Engineering",
      issuer: "DataCamp",
      issuerImage: prompt,
      certificateImage: prompt
    },
  ]);

  const Tech = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "ReactJS", icon: <SiReact /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "NumPy", icon: <SiNumpy /> }
  ];

 
  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  const renderEducation = () => (
    <div className="education-grid">
      {education.map(education => (
        <div key={education.id} className="education-card">
          <div className='education-img'>
            <img src={education.issuerImage} alt="" />
          </div>
          <div className='education-content'>
            <h3>{education.title}</h3>
            <p>{education.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertificates = () => (
    <div className="certificates-grid">
      {certificates.map(certificate => (
        <div key={certificate.id} className="certificate-card">
          <div className="certificate-header">
            <h3>{certificate.title}</h3>
          </div>
          <div className="issuer-info">
            <img 
              src={certificate.issuerImage} 
              alt={certificate.issuer}
              className="issuer-image"
            />
            <p className="issuer">Issued by: {certificate.issuer}</p>
          </div>
          <div className="certificate-hover">
            <button 
              className="view-button"
              onClick={() => handleViewCertificate(certificate)}
            >
              View Certificate
            </button>
          </div>
        </div>
      ))}
    </div>
  );


 const renderTechStack = () => (
    <div className="techstack-glass-container">
      <div className="techstack-section">
        <div className="techstack-items-row">
          {Tech.map((tech, index) => (
            <div key={index} className="techstack-item">
              <div className="techstack-icon">{tech.icon}</div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="certificate-container">
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <button 
              className={activeSection === 'education' ? 'active' : ''}
              onClick={() => setActiveSection('education')}
            >
              Education
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'certificates' ? 'active' : ''}
              onClick={() => setActiveSection('certificates')}
            >
              Certificates
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'techstack' ? 'active' : ''}
              onClick={() => setActiveSection('techstack')}
            >
              Tech Stack
            </button>
          </li>
        </ul>
      </nav>

      <div className="content-section">
        <h2 className="section-title">
          {activeSection === 'education' && 'My Education'}
          {activeSection === 'certificates' && 'My Certificates'}
          {activeSection === 'techstack' && 'My Tech Stack'}
        </h2>
        
        {activeSection === 'education' && renderEducation()}
        {activeSection === 'certificates' && renderCertificates()}
        {activeSection === 'techstack' && renderTechStack()}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <h3>{selectedCertificate.title}</h3>
            <p>Issued by: {selectedCertificate.issuer}</p>
            <img 
              src={selectedCertificate.certificateImage} 
              alt={selectedCertificate.title}
              className="certificate-full-image"
            />
            <button className="close-button" onClick={handleCloseModal}>
              Back to Certificates
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;