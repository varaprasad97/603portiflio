import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const socialLinks = [
    {
      icon: <FaEnvelope />,
      href: "mailto:pavankumar@gmail.com",
      label: "Email"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/pavan-kumar",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/pavankumar",
      label: "GitHub"
    }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-8 sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-4xl font-bold text-white mb-4 hover:text-amber-400 transition-colors duration-300"
        >
          Akumarthi Vara Prasad
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-200 mb-2 hover:text-white transition-colors duration-300"
        >
          Tadepalligudem, Andhra Pradesh
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-6 mb-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-amber-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <span className="sr-only">{link.label}</span>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {link.icon}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-4 inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300"
        >
          Visitors: <span id="counter-value" className="font-bold text-amber-400">0</span>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;