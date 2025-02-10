const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js", // Output bundle with cache busting
    path: path.resolve(__dirname, "./public/dist"),
    clean: true, // Clean the output directory before emit
  },
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : "inline-source-map", // Source maps
  devServer: {
    static: "./public/dist",
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
            : "style-loader", // Inject CSS into the DOM in development
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              // All default supported tags and attributes
              "...",
              {
                tag: "img",
                attribute: "data-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|jfif)$/i, // Match image file extensions
        type: "asset/resource", // Emits a separate file and exports the URL
        generator: {
          filename: "assets/images/[name][hash][ext][query]", // Output folder and naming
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template HTML file
      filename: "index.html",
    }),
    // Only add MiniCssExtractPlugin in production
    ...(isProduction
      ? [
          new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
          }),
        ]
      : []),
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // Code splitting
    },
  },
};
