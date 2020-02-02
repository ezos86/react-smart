const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/app/App.tsx', 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.png']
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            query: {
                                name:'assets/[name].[ext]'
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                    progressive: true
                                },
                                gifsicle: {
                                    interlaced: true
                                },
                                optipng: {
                                    optimizationLevel: 7
                                }
                            }
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/, 
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'app', 'index.html'),
            inject: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
