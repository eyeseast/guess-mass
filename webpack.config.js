var path = require('path');

module.exports = {

    entry: './js/index.js',

    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.js'
    },

    module: {
        rules: [
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