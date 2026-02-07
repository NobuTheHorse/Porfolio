import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">Portfolio</Link>
          </div>
          
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/projects" className="footer-link">Work</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>

          <div className="footer-social">
            <a href="#" className="social-link" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" className="social-link" aria-label="Instagram">Instagram</a>
            <a href="#" className="social-link" aria-label="Email">Email</a>
          </div>
        </div>

        <div className="footer-credits">
          <p>© Portfolio - {currentYear}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

