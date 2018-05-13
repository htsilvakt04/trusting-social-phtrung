let path = require('path');
let HTML = require('html-webpack-plugin');
let webpack = require('webpack');

let config  = {
    entry: [ 'whatwg-fetch', 'babel-polyfill', './src/index.js' ],
    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: 'silvas.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new HTML({
            template: './public/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true
    }

};

module.exports = config;