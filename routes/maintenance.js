const express = require('express');
const router = express.Router();

// Definisikan rute untuk halaman maintenance
router.get('/', (req, res) => {
    res.send('Halaman maintenance');
});

module.exports = router;
