import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode, FaCertificate, FaBriefcase, FaTools, FaCode, FaCloud, FaDatabase } from 'react-icons/fa';
import Education from './components/Education';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left mb-4 md:mb-0"
            >
              <h1 className="text-3xl font-bold text-blue-900">Akumarthi Vara Prasad</h1>
              <p className="text-gray-600">Tadepalligudem, Andhra Pradesh</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex space-x-4"
            >
              <a href="mailto:pavankumar@gmail.com" className="text-amber-600 hover:text-amber-800 transition-colors">
                <FaEnvelope className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/pavan-kumar" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-800 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://github.com/pavankumar" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-800 transition-colors">
                <FaGithub className="text-2xl" />
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center space-x-8 py-4"
          >
            {['About', 'Education', 'Projects', 'Certifications', 'Internships'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -2 }}
                className="cursor-pointer hover:text-amber-400 transition-colors"
              >
                <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>

      <main>
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-700 leading-relaxed max-w-3xl space-y-4"
          >
            <p>
              A dedicated Computer Science student at Sasi Institute of Technology and Engineering College with a CGPA of 8.0/10, 
              specializing in full-stack development and cloud technologies. I combine strong theoretical knowledge with 
              practical implementation to deliver robust solutions.
            </p>
            
            <p>
              Proficient in architecting scalable applications using React.js and Node.js, with expertise in SQL and MongoDB 
              database solutions. Active participant in competitive programming and hackathons, complemented by certifications 
              in Google Analytics, AWS Cloud, and Generative AI.
            </p>

            <p>
              Passionate about cloud computing and DevOps methodologies, focused on creating efficient, scalable solutions 
              that drive business value. Committed to continuous learning and contributing to transformative projects in 
              the technology landscape.
            </p>
          </motion.p>
        </motion.section>

        <Education />
        <Skills />

        {/* Projects Section */}
        <motion.section
          id="projects"
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
            <FaLaptopCode className="inline-block mr-3" />
            Projects
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300"
            ></motion.span>
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4 text-lg"
          >
            {[
              { 
                icon: <FaLaptopCode />, 
                title: "Telemedicine System", 
                content: "Developed a comprehensive telemedicine platform enabling remote healthcare consultations. Implemented secure video conferencing, appointment scheduling, and electronic health records management.",
                tech: ["React.js", "Node.js", "WebRTC", "MongoDB"]
              },
              { 
                icon: <FaLaptopCode />, 
                title: "Personal Portfolio", 
                content: "Created a modern, responsive portfolio website showcasing professional experience, skills, and projects. Implemented smooth animations, interactive elements, and a contact form with backend integration.",
                tech: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js"]
              },
              { 
                icon: <FaLaptopCode />, 
                title: "Mental Health Application", 
                content: "Developed a mental health support application with mood tracking, meditation guides, and community support features. Implemented secure user authentication and real-time chat functionality.",
                tech: ["React Native", "Firebase", "Redux", "Node.js"]
              }
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start bg-white p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl text-blue-900 mt-1 mr-4">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-3">{item.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-blue-900 mb-12 relative inline-block"
          >
            <FaCertificate className="inline-block mr-3" />
            Certifications
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300"
            ></motion.span>
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4 text-lg"
          >
            {[
              { 
                icon: <FaCertificate />, 
                title: "Google Analytics Academy", 
                content: "Completed comprehensive training in Google Analytics, mastering data analysis and reporting techniques",
                date: "2023"
              },
              { 
                icon: <FaCertificate />, 
                title: "AWS Cloud Internship", 
                content: "Successfully completed AWS Cloud internship, gaining hands-on experience with cloud services",
                date: "2023"
              },
              { 
                icon: <FaCertificate />, 
                title: "Fundamentals of Generative AI", 
                content: "An online non-credit course authorized by Amazon Web Services and offered through Coursera",
                date: "June 2025"
              },
              { 
                icon: <FaCertificate />, 
                title: "AI Infrastructure and Operations", 
                content: "An online non-credit course authorized by NVIDIA and offered through Coursera",
                date: "April 2025"
              }
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start bg-white p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl text-blue-900 mt-1 mr-4">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-2">{item.content}</p>
                  <span className="text-amber-600 font-medium">{item.date}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Internships Section */}
        <motion.section
          id="internships"
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
            <FaBriefcase className="inline-block mr-3" />
            Internships
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300"
            ></motion.span>
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4 text-lg"
          >
            {[
              { 
                icon: <FaBriefcase />, 
                title: "AWS Cloud Internship", 
                content: "Gained hands-on experience with AWS services, including EC2, S3, and cloud architecture",
                duration: "3 months"
              }
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start bg-white p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl text-blue-900 mt-1 mr-4">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-2">{item.content}</p>
                  <span className="text-amber-600 font-medium">{item.duration}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© 2024 Pavan Kumar. All rights reserved.</p>
            <div className="flex space-x-6">
              <motion.a
                href="mailto:pavankumar@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                <FaEnvelope className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pavan-kumar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://github.com/pavankumar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;