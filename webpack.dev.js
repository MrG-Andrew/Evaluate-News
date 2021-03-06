const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'development',
    devtool: 'source-map',

    devServer: {
        port: 3000,
        watchContentBase:true,
    },

    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),

        new CleanWebpackPlugin({
            verbose: true,
            dry: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}