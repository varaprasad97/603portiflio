const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Public routes
router.post('/submit', contactController.submitContact);

// Admin routes (protected)
router.get('/admin/contacts', contactController.getAllContacts);
router.patch('/admin/contacts/:id', contactController.updateContactStatus);

module.exports = router; 