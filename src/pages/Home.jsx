import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <p className="hero-subtitle">Undergraduate IT Student</p>
          <p className="hero-description">
            Welcome to my portfolio! I'm currently pursuing my IT degree and 
            working on various projects to enhance my skills and knowledge in 
            software development and technology.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>👨‍💻</span>
          </div>
        </div>
      </section>

      <section className="skills-preview">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3>Web Development</h3>
            <p>React, HTML, CSS, JavaScript</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🔧</div>
            <h3>Programming</h3>
            <p>Problem solving and coding</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Mobile-first approach</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

