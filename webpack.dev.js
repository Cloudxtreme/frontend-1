const webpack = require('webpack');

module.exports = {
    debug:   true,
    devtool: 'eval',
    entry:  [
        'bootstrap-loader',
        'font-awesome-loader',
        './src'
    ],
    output: {
        path:     'builds',
        filename:  'web.js',
        publicPath: 'builds/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:      'main', // Move dependencies to our main file
            children:  true, // Look for common dependencies in all children,
            minChunks: 2, // How many times a dependency must come up before being extracted
        }),
    ],
    module: {
        loaders: [
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
        ],
    },
};
