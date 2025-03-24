import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

/**
 * Experience section component to showcase work history
 */
const Experience = () => {
  // Work experience data
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: 'Jan 2022 - Present',
      description: 'Lead the frontend development team in building responsive and accessible web applications. Implemented modern React patterns and optimized performance across multiple projects.',
      responsibilities: [
        'Architected and developed scalable frontend solutions',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with UX/UI designers to implement pixel-perfect designs',
        'Improved application performance by 40% through code optimization'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: 'Mar 2019 - Dec 2021',
      description: 'Worked on full-stack development for e-commerce and SaaS applications. Designed and implemented RESTful APIs and integrated third-party services.',
      responsibilities: [
        'Developed and maintained multiple web applications using React and Node.js',
        'Created and optimized database schemas and queries',
        'Implemented authentication and authorization systems',
        'Deployed and maintained applications on AWS infrastructure'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'WebCraft Agency',
      period: 'Jun 2017 - Feb 2019',
      description: 'Started as an intern and grew into a full-time role. Worked on various client projects including corporate websites and web applications.',
      responsibilities: [
        'Developed responsive websites using HTML, CSS, and JavaScript',
        'Collaborated with the design team to implement visual elements',
        'Maintained and updated existing client websites',
        'Assisted in troubleshooting and fixing bugs'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey and career highlights</p>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary-300 dark:bg-secondary-700"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Individual experience item component
 */
const ExperienceItem = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="md:w-1/2"></div>
      <div className="hidden md:flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center text-white z-10">
          <Briefcase size={20} />
        </div>
      </div>
      <div className={`md:w-1/2 bg-white dark:bg-secondary-900 p-6 rounded-lg shadow-md ${isEven ? 'md:mr-6' : 'md:ml-6'}`}>
        <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{experience.title}</h3>
        <h4 className="text-lg font-semibold mb-2">{experience.company}</h4>
        <div className="flex items-center text-secondary-600 dark:text-secondary-400 mb-4">
          <Calendar size={16} className="mr-2" />
          <span>{experience.period}</span>
        </div>
        <p className="mb-4 text-secondary-700 dark:text-secondary-300">{experience.description}</p>
        <ul className="list-disc list-inside text-secondary-600 dark:text-secondary-400 space-y-1">
          {experience.responsibilities.map((responsibility, i) => <li key={i}>{responsibility}</li>)}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;