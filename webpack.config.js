const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8086,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader', 
                    'postcss-loader'
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:
            './public/index.html',
        }),
    ],
};