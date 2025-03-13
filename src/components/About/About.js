import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="about-description">
            Hello! I'm John, a passionate MERN stack developer based in New York City. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
          </p>
          <p className="about-description">
            Shortly after graduating from <span className="highlight">Computer Science at NYU</span>, I joined a startup where I worked on a wide variety of interesting and meaningful projects on a daily basis.
          </p>
          <p className="about-description">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="about-skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Next.js</li>
          </ul>
        </motion.div>
        
        <motion.div className="about-image-container" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <img src="/profile.jpg" alt="John Doe" className="about-image" />
          <div className="about-image-border"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;