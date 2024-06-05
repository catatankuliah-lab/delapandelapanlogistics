const mysql = require('mysql');

const dbConfig = {
    host: 'kalaitu.org',
    user: 'u1561176_megan',
    password: 'megan10095',
    database: 'u1561176_rbk'
};

const connection = mysql.createConnection(dbConfig);

connection.connect((error) => {
    if (error) {
        console.error('Gagal terhubung ke MySQL:', error);
        return;
    }
    console.log('Berhasil terhubung ke MySQL');
});

module.exports = connection;

