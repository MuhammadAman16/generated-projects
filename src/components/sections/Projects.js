import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

/**
 * Projects section component to showcase portfolio work
 */
const Projects = () => {
  // Filter categories for projects
  const categories = ['All', 'Web', 'Mobile', 'UI/UX', 'Other'];
  const [activeFilter, setActiveFilter] = useState('All');

  // Project data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
      image: 'https://source.unsplash.com/random/600x400/?ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web',
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1.example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A mobile application for managing tasks, setting reminders, and tracking productivity.',
      image: 'https://source.unsplash.com/random/600x400/?tasks',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile',
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2.example.com'
    },
    {
      id: 3,
      title: 'Dashboard UI Design',
      description: 'A modern dashboard interface design with data visualization components and responsive layouts.',
      image: 'https://source.unsplash.com/random/600x400/?dashboard',
      technologies: ['Figma', 'Adobe XD', 'CSS'],
      category: 'UI/UX',
      githubUrl: 'https://github.com/yourusername/project3',
      liveUrl: 'https://project3.example.com'
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'A web application that provides real-time weather forecasts based on user location or search.',
      image: 'https://source.unsplash.com/random/600x400/?weather',
      technologies: ['JavaScript', 'API Integration', 'CSS'],
      category: 'Web',
      githubUrl: 'https://github.com/yourusername/project4',
      liveUrl: 'https://project4.example.com'
    },
    {
      id: 5,
      title: 'Machine Learning Model',
      description: 'A machine learning model for predicting stock prices based on historical data and market trends.',
      image: 'https://source.unsplash.com/random/600x400/?data',
      technologies: ['Python', 'TensorFlow', 'Pandas'],
      category: 'Other',
      githubUrl: 'https://github.com/yourusername/project5',
      liveUrl: null
    },
    {
      id: 6,
      title: 'Social Media App',
      description: 'A social networking application with user profiles, posts, comments, and real-time messaging.',
      image: 'https://source.unsplash.com/random/600x400/?social',
      technologies: ['React', 'Firebase', 'Socket.io'],
      category: 'Web',
      githubUrl: 'https://github.com/yourusername/project6',
      liveUrl: 'https://project6.example.com'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Check out some of my recent work</p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Individual project card component
 */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-secondary-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-2 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-4 mt-4">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
            aria-label="View GitHub repository"
          >
            <Github size={20} />
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;