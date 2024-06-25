const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

const prodConfig = {
    mode: 'production',
    devtool: 'source-map', // Generate source maps for easier debugging

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    plugins:[
        new MiniCssExtractPlugin({}),
        new ESLintWebpackPlugin({
            extensions:['.js','.ts']
        }),
        new StylelintWebpackPlugin({
                        files: '**/*.(s(c|a)ss|css)'
        }
        )
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    }
};

module.exports = merge(common, prodConfig);
