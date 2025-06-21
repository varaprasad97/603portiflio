import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Sasi Institute of Technology and Engineering",
      duration: "2020 - 2024",
      details: "CGPA: 8.5/10",
      icon: <FaGraduationCap />
    },
    {
      degree: "Intermediate Education",
      school: "Narayana Junior College",
      duration: "2018 - 2020",
      details: "Percentage: 95%",
      icon: <FaBook />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.section
      id="education"
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
        Education
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
        className="space-y-8"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)"
            }}
            className="bg-white p-6 rounded-xl shadow-lg relative"
          >
            <motion.div 
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {edu.icon}
            </motion.div>
            <div className="ml-8">
              <motion.h3 
                className="text-xl font-semibold text-blue-900"
                whileHover={{ color: "#1E40AF" }}
              >
                {edu.degree}
              </motion.h3>
              <motion.p 
                className="text-gray-600 mt-1"
                whileHover={{ color: "#4B5563" }}
              >
                {edu.school}
              </motion.p>
              <motion.div 
                className="flex items-center mt-2 text-sm text-gray-500"
                whileHover={{ color: "#6B7280" }}
              >
                <span>{edu.duration}</span>
                <span className="mx-2">•</span>
                <span>{edu.details}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education; 