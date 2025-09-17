import React from 'react';
import { SiPython, SiJavascript, SiC, SiHtml5, SiCss3, SiReact, SiNumpy, SiTensorflow, SiFastapi, SiArduino, SiGit} from 'react-icons/si';
import { FaChartLine, FaDatabase, FaRobot} from 'react-icons/fa';
import { DiCode,DiTerminal} from 'react-icons/di';
import './skill.css';

const Skills = () => {
  const programmingLanguages = [
    { name: 'Python', percentage: 70, icon: <SiPython /> },
    { name: 'JavaScript', percentage: 50, icon: <SiJavascript /> },
    { name: 'C Programming', percentage: 10, icon: <SiC /> },
  ];

  const frameworks = [
    { name: 'HTML', percentage: 90, icon: <SiHtml5 /> },
    { name: 'CSS', percentage: 85, icon: <SiCss3 /> },
    { name: 'React', percentage: 10, icon: <SiReact /> },
    { name: 'NumPy', percentage: 70, icon: <SiNumpy /> },
    { name: 'Tkinter', percentage: 80, icon: <DiCode /> },
  ];

  const dataScience = [
    { name: 'Machine Learning', percentage: 30, icon: <FaRobot /> },
    { name: 'Data Visualization', percentage: 70, icon: <FaChartLine /> },
    { name: 'Data Analysis', percentage: 65, icon: <DiTerminal /> },
    { name: 'Model Training', percentage: 50, icon: <SiTensorflow /> },
  ];

  const tools = [
    { name: 'API Integration', percentage: 40, icon: <SiFastapi /> },
    { name: 'Arduino/IOT', percentage: 85, icon: <SiArduino /> },
    { name: 'Git', percentage: 75, icon: <SiGit /> },
    { name: 'Database Management', percentage: 60, icon: <FaDatabase /> },
  ];

  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>My Skills</h1>
      </div>
      <div className="skills-row">
        <div className="skills-container">
          <h2 className="skills-title">Programming Languages</h2>
          <div className="skills-list">
            {programmingLanguages.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-container">
          <h2 className="skills-title">Frameworks & Libraries</h2>
          <div className="skills-list">
            {frameworks.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="skills-row">
        <div className="skills-container">
          <h2 className="skills-title">Data Science & AI</h2>
          <div className="skills-list">
            {dataScience.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-container">
          <h2 className="skills-title">Tools & Technologies</h2>
          <div className="skills-list">
            {tools.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;