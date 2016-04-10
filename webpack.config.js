const webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var production = process.env.NODE_ENV === 'production';

var loaders = [ ];

var plugins = [];


if (!production) {
    /** Development  **/
    loaders = loaders.concat([
        {
            test:   /\.js/,
            loader: 'babel',
            include: __dirname + '/src',
            exclude: /node_modules/
        },
        {
            test:   /\.html/,
            loader: 'html',
        },
        // presentation
        {
            test:   /\.css/,
            loaders: ['style', 'css'],
        },
        {
            test:   /\.scss/,
            loaders: ['style', 'css', 'sass'],
        },
        {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url?limit=10000"
        },
        {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            loader: 'file'
        },
        // add jquery to globals
        {
            test: /bootstrap-sass\/assets\/javascripts\//,
            loader: 'imports?jQuery=jquery'
        },
    ]);

    plugins = plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({
            name:      'main', // Move dependencies to our main file
            children:  true, // Look for common dependencies in all children,
            minChunks: 2, // How many times a dependency must come up before being extracted
        }),
    ]);
}

if (production) {
    /** Production Loaders **/
    loaders = loaders.concat([
        {
            test:   /\.js/,
            loader: 'babel',
            include: __dirname + '/src',
        },
        {
            test:   /\.html/,
            loader: 'html',
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
    ]);

    /** Production Plugins **/
    plugins = plugins.concat([
        // clean up the builds/ folder before compiling
        new CleanPlugin('builds'),
        // pipe all css into one file
        new ExtractTextPlugin('[name]-[hash].css', { allChunks: true }),
        // This plugin looks for similar chunks and files
        // and merges them for better caching by the user
        new webpack.optimize.DedupePlugin(),

        // This plugins optimizes chunks and modules by
        // how much they are used in your app
        new webpack.optimize.OccurenceOrderPlugin(),

        // This plugin prevents Webpack from creating chunks
        // that would be too small to be worth loading separately
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 51200, // ~50kb
        }),

        // This plugin minifies all the Javascript code of the final bundle

        new webpack.optimize.UglifyJsPlugin({
            mangle:   true,
            compress: {
                warnings: false, // Suppress uglification warnings
            },
        }),

        // This plugins defines various variables that we can set to false
        // in production to avoid code related to them from being compiled
        // in our final bundle
        new webpack.DefinePlugin({
            __SERVER__:      !production,
            __DEVELOPMENT__: !production,
            __DEVTOOLS__:    !production,
            'process.env':   {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ]);
}



module.exports = {
    debug:   !production,
    devtool: production ? false : 'eval',
    entry:  [
        'bootstrap-loader',
        'font-awesome-loader',
        './src',
    ],
    output: {
        path:     'builds',
        filename:  production ? '[name]-[hash].js' : 'web.js',
        publicPath: 'builds/',
    },
    plugins: plugins,
    module: {
        loaders: loaders,
    },
};