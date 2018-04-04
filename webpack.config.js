'use strict';

const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        game: './src/Game.ts'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader'
            },
            {
                test: [ /\.vert$/, /\.frag$/ ],
                use: 'raw-loader'
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                include: /\.js$/,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    comments: false,
                    compress: true,
                    ie8: false,
                    ecma: 5,
                    warnings: false,
                    output: {
                        comments: false
                    }
                }
            })
        ],
        splitChunks: {
            cacheGroups: {
                commons: { 
                    test: /[\\/]node_modules[\\/]/, 
                    name: "vendors", 
                    chunks: "all" 
                }
            }
        }
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    stats: false,
    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]
};