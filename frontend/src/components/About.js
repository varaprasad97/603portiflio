import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';

const About = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.section
      id="about"
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
        About Me
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <motion.div
          variants={itemVariants}
          className="space-y-6"
        >
          <motion.p 
            className="text-lg text-gray-700 leading-relaxed"
            whileHover={{ color: "#4B5563" }}
          >
            I am a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
            My journey in software development has equipped me with expertise in creating responsive, user-friendly web applications 
            and implementing robust backend solutions.
          </motion.p>

          <motion.p 
            className="text-lg text-gray-700 leading-relaxed"
            whileHover={{ color: "#4B5563" }}
          >
            With a keen eye for detail and a commitment to writing clean, efficient code, I strive to deliver high-quality 
            solutions that meet both user needs and business objectives. I am constantly learning and adapting to new technologies 
            to stay at the forefront of web development.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { icon: <FaUser />, text: "Full Stack Developer" },
            { icon: <FaCode />, text: "Clean Code Enthusiast" },
            { icon: <FaLaptopCode />, text: "Problem Solver" },
            { icon: <FaServer />, text: "Backend Specialist" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)"
              }}
              className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <motion.div 
                className="text-2xl text-blue-900 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <motion.span 
                className="text-gray-700 font-medium"
                whileHover={{ color: "#1E40AF" }}
              >
                {item.text}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About; 