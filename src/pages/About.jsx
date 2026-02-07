import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="page-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-image">
            <div className="profile-picture">
              <span>👤</span>
            </div>
          </div>
          
          <div className="about-text">
            <h2>Hello! I'm an IT Student</h2>
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

