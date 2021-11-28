const path = require('path');

module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts'],
        alias: {
            "@Components": path.resolve(__dirname, 'src/components/'),
        },
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};