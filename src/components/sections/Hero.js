import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

/**
 * Hero section component for the landing page
 */
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-secondary-900 dark:to-secondary-800 -z-10"></div>
      
      {/* Content container */}
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary-600 dark:text-primary-400">Hello, I'm</span>
              <br />
              Your Name
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary-600 dark:text-secondary-300 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-lg text-secondary-600 dark:text-secondary-400">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Contact Me <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="/resume.pdf" download className="btn btn-outline">
                Download CV <Download size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <img src="https://source.unsplash.com/random/600x600/?portrait" alt="Developer" className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white dark:border-secondary-700 shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;