const fs = require('fs');
const path = require('path');

const babelSettings = JSON.parse(fs.readFileSync('.babelrc'));

module.exports = {

    entry: './js/index.js',

    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.(html|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: babelSettings
                }
            },

            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'svelte-loader'
            }
        ]
    },

    //devtool: 'inline-source-map',

    devServer: {
        contentBase: __dirname, 
        publicPath: '/js',
        compress: false,
        port: 3000
    }
}