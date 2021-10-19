const {merge} = require('webpack-merge')
const base = require('./webpack.base')

const config = merge(base,{
    mode: "development",
    devServer: {
        port: 9000,
        open: true,
        hot: true,
        compress: true,
        client: {
            overlay: true
        }
    },
});

module.exports = config;