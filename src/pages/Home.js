import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Skills from '../components/sections/Skills';
import Testimonials from '../components/sections/Testimonials';

/**
 * Home page component that combines all sections of the portfolio
 */
const Home = () => {
  return (
    <div className="pt-16">
      {/* Main sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      
      {/* Back to top button could be added here */}
    </div>
  );
};

export default Home;