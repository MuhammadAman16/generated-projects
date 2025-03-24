import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

/**
 * About section component with personal information
 */
const About = () => {
  // Define key facts about yourself
  const keyFacts = [
    {
      icon: <Code size={24} />,
      title: "Developer",
      description: "5+ years of experience in full-stack development with a focus on modern web technologies."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Experience",
      description: "Worked with startups and established companies to deliver high-quality software solutions."
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Education",
      description: "Bachelor's degree in Computer Science with continuous learning through courses and certifications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Here's a brief introduction about who I am and what I do</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* About image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="https://source.unsplash.com/random/600x800/?workspace" alt="My workspace" className="rounded-lg shadow-lg w-full h-auto" />
          </motion.div>

          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-6 text-secondary-700 dark:text-secondary-300">I'm a passionate full-stack developer with expertise in building modern web applications. I love solving complex problems and creating intuitive user experiences.</p>
            <p className="text-lg mb-8 text-secondary-700 dark:text-secondary-300">When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.</p>
            
            {/* Key facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {keyFacts.map((fact, index) => (
                <div key={index} className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg">
                  <div className="text-primary-600 dark:text-primary-400 mb-3">{fact.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-400">{fact.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;