import React from 'react';
import { motion } from 'framer-motion';

/**
 * Skills section component to showcase technical abilities
 */
const Skills = () => {
  // Skill categories with their respective skills
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 70 },
      ]
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 65 },
        { name: 'AWS', level: 60 },
        { name: 'Figma', level: 70 },
        { name: 'Testing', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-secondary-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Here are my technical skills and proficiency levels</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                {category.name}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    delay={categoryIndex * 0.1 + skillIndex * 0.05} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Individual skill bar component with animation
 */
const SkillBar = ({ skill, delay }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-secondary-600 dark:text-secondary-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
          className="h-full bg-primary-600 dark:bg-primary-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default Skills;