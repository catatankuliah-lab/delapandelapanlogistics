const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rute untuk halaman login
router.get('/login', authController.showLoginPage);
router.post('/login', authController.processLogin);

// Rute untuk halaman registrasi
router.get('/register', authController.showRegisterPage);
router.post('/register', authController.processRegister);

// Rute untuk halaman logout
router.get('/logout', authController.logout);

module.exports = router;
