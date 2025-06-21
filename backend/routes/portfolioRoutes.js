const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.get('/summary', portfolioController.getSummary);
router.get('/competencies', portfolioController.getCompetencies);
router.get('/projects', portfolioController.getProjects);
router.get('/certifications', portfolioController.getCertifications);

module.exports = router;