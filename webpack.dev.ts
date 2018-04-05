import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: {
        game: './src/Game.ts'
    },
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: '[name].js'
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
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    stats: false,
    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]
};

export default config;