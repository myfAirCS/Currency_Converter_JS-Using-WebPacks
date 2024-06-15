const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map', // Generate source maps for easier debugging

    devServer: {// Serve content from this directory
        port:8000
    },
});
