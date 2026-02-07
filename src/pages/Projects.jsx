import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Web Application Project',
      category: 'Web Development',
      description: 'A full-stack web application built with React and modern web technologies. Features include user authentication, data management, and responsive design.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      details: {
        images: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop'
        ],
        overview: 'This project is a comprehensive web application that demonstrates modern web development practices. It includes a complete user authentication system, real-time data management, and a fully responsive design that works seamlessly across all devices.',
        features: [
          'User authentication and authorization',
          'Real-time data synchronization',
          'Responsive design for mobile and desktop',
          'RESTful API integration',
          'State management with React hooks'
        ],
        challenges: 'One of the main challenges was implementing real-time updates while maintaining optimal performance. This was solved by using efficient state management and optimizing API calls.',
        results: 'The application successfully handles multiple concurrent users and provides a smooth, responsive experience across all platforms.'
      }
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'A personal portfolio website showcasing my projects and skills. Built with React and modern UI/UX principles.',
      technologies: ['React', 'React Router', 'CSS'],
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      details: {
        images: [
          'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop'
        ],
        overview: 'A modern, minimalist portfolio website designed to showcase projects and skills effectively. The design focuses on clean aesthetics and user experience.',
        features: [
          'Responsive navigation',
          'Project showcase gallery',
          'Contact form integration',
          'Smooth page transitions',
          'Dark theme support'
        ],
        challenges: 'Creating a balance between visual appeal and performance was key. The solution involved optimizing images and using efficient rendering techniques.',
        results: 'The portfolio successfully presents all information in an engaging and accessible way, with fast load times and smooth interactions.'
      }
    },
    {
      id: 3,
      title: 'Academic Project',
      category: 'Software Development',
      description: 'A project developed during my academic studies, demonstrating problem-solving skills and technical knowledge.',
      technologies: ['Various Technologies'],
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      details: {
        images: [
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop'
        ],
        overview: 'An academic project that demonstrates comprehensive understanding of software development principles and problem-solving methodologies.',
        features: [
          'Algorithm implementation',
          'Data structure optimization',
          'Code documentation',
          'Testing and validation',
          'Performance analysis'
        ],
        challenges: 'The project required balancing theoretical knowledge with practical implementation. Extensive research and iterative development were key to success.',
        results: 'The project met all academic requirements and demonstrated strong technical skills and analytical thinking.'
      }
    },
    {
      id: 4,
      title: 'OJT Project',
      category: 'Full Stack Development',
      description: 'A project developed during my On-the-Job Training internship, applying real-world development practices.',
      technologies: ['React', 'Node.js', 'Database'],
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      details: {
        images: [
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop'
        ],
        overview: 'A full-stack application developed during internship, applying industry best practices and real-world development workflows.',
        features: [
          'Full-stack architecture',
          'Database design and implementation',
          'API development',
          'Frontend-backend integration',
          'Version control and collaboration'
        ],
        challenges: 'Working with a team and following industry standards was a learning experience. Regular code reviews and collaboration tools helped overcome challenges.',
        results: 'The project is currently in development, with significant progress made in core functionality and architecture.'
      }
    }
  ]

  const openDetails = (project) => {
    setSelectedProject(project)
  }

  const closeDetails = () => {
    setSelectedProject(null)
  }

  return (
    <div className="projects">
      <div className="background-waves">
        <svg className="wave-svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradientProjects" x1="0%" y1="0%" x2="100%" y2="100%">
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
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="page-title">Work</h1>
          <p className="page-subtitle">
            A collection of projects I've worked on during my studies and internship.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Project+Image'
                  }}
                />
              </div>
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <button 
                  className="view-details-btn"
                  onClick={() => openDetails(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeDetails}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDetails}>×</button>
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-category">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <span className={`modal-status ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                  {selectedProject.status}
                </span>
              </div>
              
              <div className="modal-body">
                {selectedProject.details.images && selectedProject.details.images.length > 0 && (
                  <div className="modal-images">
                    {selectedProject.details.images.map((img, index) => (
                      <img 
                        key={index}
                        src={img} 
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="modal-image"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/1200x800/1a1a1a/ffffff?text=Project+Image'
                        }}
                      />
                    ))}
                  </div>
                )}
                
                <div className="modal-section">
                  <h3>Overview</h3>
                  <p>{selectedProject.details.overview}</p>
                </div>

                <div className="modal-section">
                  <h3>Features</h3>
                  <ul>
                    {selectedProject.details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Technologies</h3>
                  <div className="modal-technologies">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="modal-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Challenges & Solutions</h3>
                  <p>{selectedProject.details.challenges}</p>
                </div>

                <div className="modal-section">
                  <h3>Results</h3>
                  <p>{selectedProject.details.results}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects

