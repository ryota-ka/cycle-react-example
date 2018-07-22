const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    output: {
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'templates/index.ejs',
        }),
    ],
    resolve: {
        extensions: ['.js', '.html', '.ts', '.tsx'],
    },
};
