import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="contact">
      <div className="background-waves">
        <svg className="wave-svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradientContact" x1="0%" y1="0%" x2="100%" y2="100%">
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
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="page-title">Contact</h1>
          <p className="page-subtitle">
            I'd love to hear from you! Feel free to reach out for any inquiries, 
            collaboration opportunities, or just to say hello.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>your.email@example.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>+63 XXX XXX XXXX</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Philippines</p>
              </div>
            </div>
            <div className="social-links">
              <h3>Connect with me</h3>
              <div className="social-icons">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  LinkedIn
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  GitHub
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

