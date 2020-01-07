const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

//Welcome Page
router.get('/', (req, res) => res.render('welcome'));
//Dachboard
router.get('/dashboard', (req, res) => res.render('dashboard'));
module.exports = router;
