const Portfolio = require('../models/portfolioModel');

const portfolioController = {
  // Get portfolio summary
  getSummary: async (req, res) => {
    try {
      const summary = await Portfolio.findOne().select('summary');
      res.json({
        success: true,
        data: summary || { summary: 'Portfolio summary not available' }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching portfolio summary',
        error: error.message
      });
    }
  },

  // Get competencies/skills
  getCompetencies: async (req, res) => {
    try {
      const competencies = await Portfolio.findOne().select('competencies');
      res.json({
        success: true,
        data: competencies || { competencies: [] }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching competencies',
        error: error.message
      });
    }
  },

  // Get projects
  getProjects: async (req, res) => {
    try {
      const projects = await Portfolio.findOne().select('projects');
      res.json({
        success: true,
        data: projects || { projects: [] }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching projects',
        error: error.message
      });
    }
  },

  // Get certifications
  getCertifications: async (req, res) => {
    try {
      const certifications = await Portfolio.findOne().select('certifications');
      res.json({
        success: true,
        data: certifications || { certifications: [] }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching certifications',
        error: error.message
      });
    }
  }
};

module.exports = portfolioController; 