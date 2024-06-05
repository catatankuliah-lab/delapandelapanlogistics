const path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/js/dashboard/dashboard_index.js',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js',
    },
};