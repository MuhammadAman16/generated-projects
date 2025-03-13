import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  // Skills data with categories and proficiency levels
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5 & CSS3', proficiency: 90 },
        { name: 'JavaScript (ES6+)', proficiency: 85 },
        { name: 'React.js', proficiency: 85 },
        { name: 'Redux', proficiency: 80 },
        { name: 'Responsive Design', proficiency: 90 },
        { name: 'Material UI', proficiency: 75 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', proficiency: 80 },
        { name: 'Express.js', proficiency: 85 },
        { name: 'MongoDB', proficiency: 80 },
        { name: 'RESTful APIs', proficiency: 85 },
        { name: 'GraphQL', proficiency: 70 },
        { name: 'Firebase', proficiency: 75 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', proficiency: 85 },
        { name: 'Webpack', proficiency: 75 },
        { name: 'Jest & Testing Library', proficiency: 70 },
        { name: 'Docker', proficiency: 65 },
        { name: 'AWS', proficiency: 60 },
        { name: 'Agile Methodology', proficiency: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills & Technologies
      </motion.h2>
      
      <div className="skills-container">
        {skillsData.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex} 
            className="skills-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h3 className="skills-category-title">{category.category}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <SkillItem 
                  key={skillIndex} 
                  skill={skill} 
                  delay={skillIndex * 0.1} 
                />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Individual skill item component with animation
const SkillItem = ({ skill, delay }) => {
  return (
    <motion.li 
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <FontAwesomeIcon icon={faAngleRight} className="skill-icon" />
      <div style={{ width: '100%' }}>
        <div className="skill-name">{skill.name}</div>
        <div className="skill-progress-container">
          <motion.div 
            className="skill-progress-bar"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.3 }}
          />
        </div>
      </div>
    </motion.li>
  );
};

export default Skills;