var ExtractTextPlugin = require("extract-text-webpack-plugin");
var NODE_ENV = process.env.NODE_ENV || 'development';

// Have to export cause webpack requires configuration object
module.exports = {
    // Path to entry file
    entry: './public/src/app.js',

    output: {
        // Path to output files
        path: './public/build',
        filename: 'app.bundle.js'
    },

    watch: NODE_ENV === 'development',

    devtool: NODE_ENV === 'development' ? 'source-map' : null,

    module: {
        loaders: [
            {
                // Matches files by regular expression
                test: /\.jsx?$/,
                // Excludes matched files
                exclude: /(node_modules|bower_components)/,
                // List of handlers that transforms all mached files with their requires recursively
                loader: 'babel'
            },

            {
                test: /\.scss$/,
                // Works from right to left
                //loader: 'style!css!sass'
                loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap'])
            }
        ]
    },

    // Plugin that extracts css to a separated file
    plugins: [
        new ExtractTextPlugin("app.css", {
            allChunks: true
        })
    ]
};
