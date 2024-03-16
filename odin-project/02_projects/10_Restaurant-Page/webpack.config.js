const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js' 
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development: Restaurant Page',
            template: './src/template.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 3000,
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
        ]
    }
};