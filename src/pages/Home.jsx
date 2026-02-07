import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullTextRef = useRef("I'm a bit nerdy")

  // Background Waves Component
  const BackgroundWaves = () => (
    <div className="background-waves">
      <svg className="wave-svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.35)" />
          </linearGradient>
        </defs>
        {/* Flowing wave lines from bottom-left, curving up and right, then down */}
        <path d="M0,750 Q150,650 300,680 Q500,720 700,650 Q900,580 1100,600 L1200,580" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" fill="none" />
        <path d="M0,740 Q160,640 310,670 Q510,710 710,640 Q910,570 1110,590 L1200,570" stroke="rgba(255, 255, 255, 0.48)" strokeWidth="1.5" fill="none" />
        <path d="M0,730 Q140,630 290,660 Q490,700 690,630 Q890,560 1090,580 L1200,560" stroke="rgba(255, 255, 255, 0.46)" strokeWidth="1.5" fill="none" />
        <path d="M0,720 Q170,620 320,650 Q520,690 720,620 Q920,550 1120,570 L1200,550" stroke="rgba(255, 255, 255, 0.44)" strokeWidth="1.5" fill="none" />
        <path d="M0,710 Q155,610 305,640 Q505,680 705,610 Q905,540 1105,560 L1200,540" stroke="rgba(255, 255, 255, 0.42)" strokeWidth="1.5" fill="none" />
        {/* Dense curved section in center-right (ribbon effect) */}
        <path d="M600,550 Q750,450 850,480 Q950,510 1050,480 Q1100,460 1200,420" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="1.5" fill="none" />
        <path d="M610,555 Q760,455 860,485 Q960,515 1060,485 Q1110,465 1200,425" stroke="rgba(255, 255, 255, 0.53)" strokeWidth="1.5" fill="none" />
        <path d="M590,545 Q740,445 840,475 Q940,505 1040,475 Q1090,455 1200,415" stroke="rgba(255, 255, 255, 0.54)" strokeWidth="1.5" fill="none" />
        <path d="M605,552 Q755,452 855,482 Q955,512 1055,482 Q1105,462 1200,422" stroke="rgba(255, 255, 255, 0.52)" strokeWidth="1.5" fill="none" />
        <path d="M595,548 Q745,448 845,478 Q945,508 1045,478 Q1095,458 1200,418" stroke="rgba(255, 255, 255, 0.51)" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  )

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullTextRef.current.length) {
        setTypedText(fullTextRef.current.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  const selectedWork = [
    {
      id: 1,
      title: 'Web Application Project',
      category: 'Web Development',
      description: 'A full-stack web application built with React and modern web technologies.'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'A personal portfolio website showcasing projects and skills.'
    },
    {
      id: 3,
      title: 'Academic Project',
      category: 'Software Development',
      description: 'A project developed during academic studies, demonstrating technical knowledge.'
    }
  ]

  const workedWith = [
    {
      id: 1,
      company: 'Company Name',
      role: 'Software Developer',
      period: '2024 - Current',
      location: 'Location'
    },
    {
      id: 2,
      company: 'OJT Internship',
      role: 'Web Developer Intern',
      period: '2023 - 2024',
      location: 'Location'
    }
  ]

  return (
    <div className="home">
      <BackgroundWaves />
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <span className="name-highlight">Emmhan!</span>
          </h1>
          <h2 className="hero-subtitle">
            {typedText}
            <span className={`typing-cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </h2>
          <p className="hero-tagline">
            Passionately creating innovative digital experiences, rooted in user needs.
          </p>
        </div>
      </section>

      <section className="selected-work-section">
        <div className="section-header">
          <h2 className="section-title">Selected projects</h2>
          <span className="work-count">({selectedWork.length})</span>
        </div>
        <div className="work-grid">
          {selectedWork.map((work) => (
            <Link key={work.id} to="/projects" className="work-item">
              <div className="work-content">
                <h3 className="work-title">{work.title}</h3>
                <p className="work-category">{work.category}</p>
                <p className="work-description">{work.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/projects" className="see-all-link">
          See all work
        </Link>
      </section>

      <section className="worked-with-section">
        <div className="section-header">
          <h2 className="section-title">Worked with</h2>
          <span className="work-count">({workedWith.length})</span>
        </div>
        <div className="worked-with-list">
          {workedWith.map((work) => (
            <div key={work.id} className="worked-item">
              <div className="worked-company">{work.company}</div>
              <div className="worked-role">{work.role}</div>
              <div className="worked-period">{work.period}</div>
              <div className="worked-location">{work.location}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

