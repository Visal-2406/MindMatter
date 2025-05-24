const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

// A sample protected route
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: `Welcome ${req.user.name}, this is your profile.`,
  });
});

module.exports = router;
