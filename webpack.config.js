var path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        publicPath: "/assets/",
        path: './bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {inline: true},
    devtool: 'inline-source-map'
};