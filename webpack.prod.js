const TerserWebpackPlugin = require("terser-webpack-plugin");
const {merge} = require('webpack-merge');
const base = require('./webpack.base');

const config = merge(base, {
    mode: "production",
    optimization: {
        minimizer: [new TerserWebpackPlugin()],
    },
})
module.exports = config;