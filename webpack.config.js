var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Have to export cause webpack requires configuration object
module.exports = {
    // Path to entry file
    entry: './src/app.js',

    output: {
        // Path to output files
        path: './build',
        filename: 'app.bundle.js'
    },

    watch: true,

    devtool: 'source-map',

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
