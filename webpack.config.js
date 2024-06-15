// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const stylesHandler = 'style-loader';

const config = {
    mode:'production',
    devtool:'source-map',
    entry: ['./src/index.ts','./src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src','index.html'),
        }),

    ],
    resolve:{
        extensions:['.ts','.js']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
                
            },
            {
                test:/\.ts$/,
                use:['ts-loader'],
                include:[path.resolve(__dirname,'src')]
            }

        ],
    },
};

module.exports = () => {

    return config;
};
