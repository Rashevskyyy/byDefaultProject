const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    login: [
      "@babel/polyfill",
      path.resolve(__dirname, "./logicPages/authLogic.js"),
    ],
    registration: [
      "@babel/polyfill",
      path.resolve(__dirname, "./logicPages/registrLogic.js"),
    ],
    main: [
      "@babel/polyfill",
      path.resolve(__dirname, "./logicPages/mainLogic.js"),
    ],
    welcome: [
      "@babel/polyfill",
      path.resolve(__dirname, "./logicPages/welcomeLogic.js"),
    ]
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
      template: "html/index.html",
      filename: "index.html",
      chunks: ["welcome"],
    }),
    new HtmlWebpackPlugin({
      template: "html/mainPage.html",
      filename: "mainPage.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "html/createAccount.html",
      filename: "createAccount.html",
      chunks: ["registration"],
    }),
    new HtmlWebpackPlugin({
      template: "html/signIn.html",
      filename: "signIn.html",
      chunks: ["login"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "img/", to: "img" }],
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
