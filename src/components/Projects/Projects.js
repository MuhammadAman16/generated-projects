import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  // Featured projects data
  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, shopping cart, user authentication, and payment processing. Built with React, Node.js, Express, and MongoDB.',
      image: '/projects/ecommerce.jpg',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe'],
      github: 'https://github.com/johndoe/ecommerce',
      external: 'https://ecommerce-demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking. Features drag-and-drop interface and notification system.',
      image: '/projects/taskmanager.jpg',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Material UI'],
      github: 'https://github.com/johndoe/taskmanager',
      external: 'https://taskmanager-demo.com'
    }
  ];

  // Other projects data
  const otherProjects = [
    {
      title: 'Weather Dashboard',
      description: 'A weather application that provides current weather and forecasts for any location. Features include location search, saved locations, and interactive maps.',
      tech: ['React', 'OpenWeather API', 'Leaflet', 'CSS3'],
      github: 'https://github.com/johndoe/weather-app',
      external: 'https://weather-app-demo.com'
    },
    {
      title: 'Blog Platform',
      description: 'A full-stack blog platform with user authentication, post creation/editing, comments, and admin dashboard.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/johndoe/blog-platform',
      external: 'https://blog-platform-demo.com'
    },
    {
      title: 'Recipe Finder',
      description: 'An application that allows users to search for recipes based on ingredients they have, dietary restrictions, and cuisine preferences.',
      tech: ['React', 'Spoonacular API', 'CSS Grid', 'LocalStorage'],
      github: 'https://github.com/johndoe/recipe-finder',
      external: 'https://recipe-finder-demo.com'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/johndoe/chat-app',
      external: 'https://chat-app-demo.com'
    },
    {
      title: 'Movie Database',
      description: 'A movie database application that allows users to browse movies, view details, and create watchlists.',
      tech: ['React', 'TMDB API', 'CSS3', 'LocalStorage'],
      github: 'https://github.com/johndoe/movie-database',
      external: 'https://movie-db-demo.com'
    },
    {
      title: 'Fitness Tracker',
      description: 'A fitness tracking application that allows users to log workouts, track progress, and set fitness goals.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      github: 'https://github.com/johndoe/fitness-tracker',
      external: 'https://fitness-tracker-demo.com'
    }
  ];

  return (
    <section id="projects" className="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Some Things I've Built
      </motion.h2>
      
      {/* Featured Projects */}
      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={index} project={project} index={index} />
        ))}
      </div>
      
      {/* Other Projects */}
      <motion.h3 
        className="other-projects-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Other Noteworthy Projects
      </motion.h3>
      
      <div className="projects-container">
        {otherProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const FeaturedProject = ({ project, index }) => (
  <motion.div className="featured-project" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
    <div className="featured-project-image">
      <img src={project.image} alt={project.title} />
    </div>
    <div className="featured-project-content">
      <h3 className="featured-project-title">{project.title}</h3>
      <div className="featured-project-description">{project.description}</div>
      <ul className="featured-project-tech">
        {project.tech.map((tech, i) => <li key={i}>{tech}</li>)}
      </ul>
      <div className="featured-project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <a href={project.external} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
      </div>
    </div>
  </motion.div>
);

const ProjectCard = ({ project, index }) => (
  <motion.div className="project-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
    <div className="project-top">
      <FontAwesomeIcon icon={faFolder} className="project-folder" />
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link"><FontAwesomeIcon icon={faGithub} /></a>
        <a href={project.external} target="_blank" rel="noopener noreferrer" className="project-link"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
      </div>
    </div>
    <h3 className="project-title">{project.title}</h3>
    <p className="project-description">{project.description}</p>
    <div className="project-tech">
      {project.tech.map((tech, i) => <span key={i} className="project-tech-item">{tech}</span>)}
    </div>
  </motion.div>
);

export default Projects;