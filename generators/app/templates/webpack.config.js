'use strict';
var webpack = require('webpack');

module.exports = {
    entry: [
        './example/index.jsx'
    ],
    output: {
        //publicPath: 'http://localhost:9090/assets',
        path: './build',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        //needed to supress vertx warning in es6-promise (Promise polyfill)
        new webpack.IgnorePlugin(/vertx/)
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ],

    debug: true,
    devtool: 'eval',

    devServer: {
        info: true,
        quiet: false,
        stats: {
            colors: true,
            progress: true
        }
    }
}
