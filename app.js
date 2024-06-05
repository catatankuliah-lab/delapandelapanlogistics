const express = require('express');
const path = require('path');
const app = express();
// const bodyParser = require('body-parser');
// const connection = require('./config/dbConfig');
const port = 3000;

// Set EJS sebagai template engine
app.set('view engine', 'ejs');

// Konfigurasi untuk melayani file statis
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

// Definisikan rute untuk halaman utama
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Hello World!' });
});

// Gunakan rute untuk halaman auth dari file terpisah
const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

// Gunakan rute untuk halaman maintenance dari file terpisah
const maintenanceRouter = require('./routes/maintenance');
app.use('/maintenance', maintenanceRouter);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
