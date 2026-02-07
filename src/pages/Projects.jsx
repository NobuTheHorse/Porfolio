import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Web Application Project',
      description: 'A full-stack web application built with React and modern web technologies. Features include user authentication, data management, and responsive design.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills. Built with React and modern UI/UX principles.',
      technologies: ['React', 'React Router', 'CSS'],
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Academic Project',
      description: 'A project developed during my academic studies, demonstrating problem-solving skills and technical knowledge.',
      technologies: ['Various Technologies'],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'OJT Project',
      description: 'A project developed during my On-the-Job Training internship, applying real-world development practices.',
      technologies: ['React', 'Node.js', 'Database'],
      status: 'In Progress'
    }
  ]

  return (
    <div className="projects">
      <div className="projects-container">
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">
          Here are some of the projects I've been working on during my studies 
          and internship.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <button className="btn-project">View Details</button>
                <button className="btn-project btn-secondary">GitHub</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

