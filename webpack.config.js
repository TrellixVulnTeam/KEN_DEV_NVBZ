// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

// const StylelintPlugin = require('stylelint-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = MiniCssExtractPlugin.loader

const configClient = {
    mode: isProduction || 'development',
    entry: './mainDevFolder/src/index.tsx',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        liveReload: false,
        compress: true,
        open: true,
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'dist_client/index.html', hash: false })
        // new StylelintPlugin()
    ],

    module: {
        rules: [{
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.client.json'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'javascript/auto'
            },
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                                modifyVars: {
                                    'primary-color': '#b88623 ',
                                    'link-color': '#bfbfbf',
                                    'border-radius-base': '2px'

                                },
                            }
                        }

                    }


                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }, ],
            },


            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
    }
}

const configServer = {
    mode: isProduction || 'development',
    entry: './mainDevFolder/server/index.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist_server'),
        clean: true
    },

    module: {
        rules: [{
            test: /\.ts?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                configFile: 'tsconfig.server.json'
            }
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    target: 'node',
    node: {
        __dirname: false
    },
    externals: [nodeExternals()]
}

module.exports = [configServer, configClient]