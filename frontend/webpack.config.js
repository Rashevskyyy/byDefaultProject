const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  entry: {
    start: [
        "@babel/polyfill",
        path.resolve(__dirname, "./logic/logicPage/index.js"),
      ],
    autorization: [
      "@babel/polyfill",
      path.resolve(__dirname, "./logic/logicPage/autorizationPage.js"),
    ],
    registration: [
      "@babel/polyfill",
      path.resolve(__dirname, "./logic/logicPage/registrationPage.js"),
    ],
    main: [
      "@babel/polyfill",
      path.resolve(__dirname, "./logic/logicPage/mainPage.js"),
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 2282,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./client/index.html",
        filename: "index.html",
        chunks: ["start"],
      }),
    new HtmlWebpackPlugin({
      template: "./client/autorizationPage.html",
      filename: "autorizationPage.html",
      chunks: ["autorization"],
    }),
    new HtmlWebpackPlugin({
        template: "./client/registrationPage.html",
        filename: "registrationPage.html",
        chunks: ["registration"],
      }),
    new HtmlWebpackPlugin({
      template: "./client/mainPage.html",
      filename: "mainPage.html",
      chunks: ["main"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./img", to: "dist/img" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg|jfif)/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
