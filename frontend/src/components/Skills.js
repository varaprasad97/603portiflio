import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaTools, FaServer } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL"]
    },
    {
      title: "Frontend Development",
      icon: <FaTools />,
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "Redux", "Material-UI"]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "MongoDB"]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["SQL", "MongoDB"]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      skills: ["AWS", "Docker", "Git", "CI/CD", "Linux"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      id="technical-skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-blue-900 mb-12 relative inline-block"
      >
        Technical Skills
        <motion.span 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300"
        ></motion.span>
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)"
            }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <motion.div 
              className="flex items-center mb-4"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="text-2xl text-blue-900 mr-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {category.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-blue-900">{category.title}</h3>
            </motion.div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * skillIndex }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "#EBF5FF",
                    color: "#1E40AF"
                  }}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills; 