const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  summary: {
    type: String,
    default: 'Full-stack developer with expertise in React, Node.js, and modern web technologies.'
  },
  competencies: {
    type: [String],
    default: [
      'JavaScript/TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'SQL',
      'Python',
      'Docker',
      'Git',
      'AWS'
    ]
  },
  projects: {
    type: [{
      title: String,
      description: String,
      technologies: [String],
      githubUrl: String,
      liveUrl: String
    }],
    default: [
      {
        title: 'E-Commerce Platform',
        description: 'Built a full-stack app with React, Node.js, and SQL for online shopping.',
        technologies: ['React', 'Node.js', 'Express', 'SQL'],
        githubUrl: 'https://github.com/example/ecommerce',
        liveUrl: 'https://ecommerce-demo.com'
      },
      {
        title: 'AI Chatbot',
        description: 'Developed a chatbot using Python and cloud APIs for real-time user interaction.',
        technologies: ['Python', 'OpenAI API', 'Flask'],
        githubUrl: 'https://github.com/example/chatbot',
        liveUrl: 'https://chatbot-demo.com'
      }
    ]
  },
  certifications: {
    type: [{
      name: String,
      issuer: String,
      date: Date,
      credentialUrl: String
    }],
    default: [
      {
        name: 'Git Essentials',
        issuer: 'Coursera',
        date: new Date('2023-01-15'),
        credentialUrl: 'https://coursera.org/verify/example1'
      },
      {
        name: 'Containerization with Docker',
        issuer: 'Udemy',
        date: new Date('2023-03-20'),
        credentialUrl: 'https://udemy.com/certificate/example2'
      },
      {
        name: 'AI Infrastructure Basics',
        issuer: 'edX',
        date: new Date('2023-06-10'),
        credentialUrl: 'https://edx.org/certificate/example3'
      },
      {
        name: 'Large Language Models',
        issuer: 'DeepLearning.AI',
        date: new Date('2023-09-05'),
        credentialUrl: 'https://deeplearning.ai/certificate/example4'
      }
    ]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Portfolio', portfolioSchema);