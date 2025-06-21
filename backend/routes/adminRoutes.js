const express = require('express');
const router = express.Router();

// Admin routes will be added here
router.get('/dashboard', (req, res) => {
  res.json({ message: 'Admin dashboard endpoint' });
});

module.exports = router; 