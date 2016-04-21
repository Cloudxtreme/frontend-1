const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const version = require("./package.json").version;
const TARGET_URL = process.env.TARGET_URL;


module.exports = {
    debug:   false,
    devtool: false,
    entry:  [
        'bootstrap-loader/extractStyles',
        'font-awesome-loader',
        './src'
    ],
    output: {
        path:     'dist',
        filename:  version + '/latest.js',
        publicPath: TARGET_URL + '/'
    },
    plugins: [
        // clean up the builds/ folder before compiling
        new CleanPlugin('builds'),
        // pipe all css into one file
        new ExtractTextPlugin(version + '/latest.css', { allChunks: true }),
        // This plugin looks for similar chunks and files
        // and merges them for better caching by the user
        new webpack.optimize.DedupePlugin(),

        // This plugins optimizes chunks and modules by
        // how much they are used in your app
        new webpack.optimize.OccurenceOrderPlugin(),

        // This plugin prevents Webpack from creating chunks
        // that would be too small to be worth loading separately
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 51200 // ~50kb
        }),

        // This plugin minifies all the Javascript code of the final bundle

        new webpack.optimize.UglifyJsPlugin({
            mangle:   true,
            compress: {
                warnings: false // Suppress uglification warnings
            }
        }),

        // This plugins defines various variables that we can set to false
        // in production to avoid code related to them from being compiled
        // in our final bundle
        new webpack.DefinePlugin({
            __SERVER__:      false,
            __DEVELOPMENT__: false,
            __DEVTOOLS__:    false,
            'process.env':   {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                include: __dirname + '/src'
            },
            {
                test:   /\.html/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', ['css', 'sass'])
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            },
            // add jquery to globals
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
            }
        ]
    }
};