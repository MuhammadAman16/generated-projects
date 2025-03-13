import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.p 
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          John Doe.
        </motion.h1>
        
        <motion.h2 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I build things for the web.
        </motion.h2>
        
        <motion.p className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          I'm a <span className="highlight">MERN Stack Developer</span> specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </motion.p>
        
        <motion.button className="btn hero-btn" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}><Link to="projects" smooth={true} duration={500} offset={-70}>View My Work</Link></motion.button>
      </div>
      <div className="scroll-down"><Link to="about" smooth={true} duration={500} offset={-70}><FontAwesomeIcon icon={faArrowDown} bounce /></Link></div>
    </section>
  );
};

export default Hero;