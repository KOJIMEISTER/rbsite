const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: "./public/assets/js/main.js",
    output: {
        filename: 'bundle.[contenthash].js', // Output bundle with cache busting
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean the output directory before emit
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map', // Source maps
    devServer: {
      static: './dist',
      hot: true,
      open: true, // Automatically open the browser
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i, // Matches .sass and .scss files
                use: [
                  isProduction
                    ? MiniCssExtractPlugin.loader // Extract CSS in production
                    : 'style-loader', // Inject CSS into the DOM in development
                  'css-loader', // Translates CSS into CommonJS
                  'sass-loader', // Compiles Sass to CSS
                ],
            },
            {
                test: /\.css$/i, // If you have regular CSS files
                use: [
                  isProduction
                    ? MiniCssExtractPlugin.loader
                    : 'style-loader',
                  'css-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Template HTML file
            filename: 'index.html',
          }),
          // Only add MiniCssExtractPlugin in production
          ...(isProduction
            ? [
                new MiniCssExtractPlugin({
                  filename: '[name].[contenthash].css',
                }),
              ]
            : [])
    ],
    optimization: {
        splitChunks: {
          chunks: 'all', // Code splitting
        },
    }
}