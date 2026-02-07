import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="background-waves">
        <svg className="wave-svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradientAbout" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.35)" />
            </linearGradient>
          </defs>
          <path d="M0,750 Q150,650 300,680 Q500,720 700,650 Q900,580 1100,600 L1200,580" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" fill="none" />
          <path d="M0,740 Q160,640 310,670 Q510,710 710,640 Q910,570 1110,590 L1200,570" stroke="rgba(255, 255, 255, 0.28)" strokeWidth="1" fill="none" />
          <path d="M0,730 Q140,630 290,660 Q490,700 690,630 Q890,560 1090,580 L1200,560" stroke="rgba(255, 255, 255, 0.26)" strokeWidth="1" fill="none" />
          <path d="M0,720 Q170,620 320,650 Q520,690 720,620 Q920,550 1120,570 L1200,550" stroke="rgba(255, 255, 255, 0.24)" strokeWidth="1" fill="none" />
          <path d="M0,710 Q155,610 305,640 Q505,680 705,610 Q905,540 1105,560 L1200,540" stroke="rgba(255, 255, 255, 0.22)" strokeWidth="1" fill="none" />
          <path d="M600,550 Q750,450 850,480 Q950,510 1050,480 Q1100,460 1200,420" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1" fill="none" />
          <path d="M610,555 Q760,455 860,485 Q960,515 1060,485 Q1110,465 1200,425" stroke="rgba(255, 255, 255, 0.33)" strokeWidth="1" fill="none" />
          <path d="M590,545 Q740,445 840,475 Q940,505 1040,475 Q1090,455 1200,415" stroke="rgba(255, 255, 255, 0.34)" strokeWidth="1" fill="none" />
          <path d="M605,552 Q755,452 855,482 Q955,512 1055,482 Q1105,462 1200,422" stroke="rgba(255, 255, 255, 0.32)" strokeWidth="1" fill="none" />
          <path d="M595,548 Q745,448 845,478 Q945,508 1045,478 Q1095,458 1200,418" stroke="rgba(255, 255, 255, 0.31)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <div className="profile-picture">
              <span>👤</span>
            </div>
          </div>
          
          <div className="about-text">
            <p className="about-quote">
              I love to inspire, because I know what it's like to be inspired. 
              Seeing design work and having fun, that's what it's all about.
            </p>
            
            <div className="about-description">
              <p>
                I'm currently an undergraduate IT student passionate about 
                technology and software development. Through my academic journey 
                and OJT internship, I've been developing my skills in various 
                programming languages and technologies.
              </p>
              <p>
                I enjoy building web applications, solving complex problems, and 
                continuously learning new technologies. My goal is to become a 
                skilled software developer and contribute to innovative projects.
              </p>
            </div>
            
            <div className="education-section">
              <h3>Education</h3>
              <div className="education-item">
                <h4>Bachelor of Science in Information Technology</h4>
                <p>Currently pursuing undergraduate degree</p>
                <p className="education-status">Status: In Progress</p>
              </div>
            </div>

            <div className="interests-section">
              <h3>Interests & Hobbies</h3>
              <ul className="interests-list">
                <li>Web Development</li>
                <li>Software Engineering</li>
                <li>Problem Solving</li>
                <li>Learning New Technologies</li>
                <li>Open Source Contributions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

