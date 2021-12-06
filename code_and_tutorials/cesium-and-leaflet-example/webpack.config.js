"use strict";
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
require("dotenv").config({ path: './.env'})

module.exports = (_env, args) => ({
  mode: args.mode === "production" ? "production" : "development",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: args.mode === "production" ? [] : [],
          }
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ["url-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify(""),
      "process.env": JSON.stringify(process.env)
    }),
    new CopyPlugin({
      patterns: [
        { from: "node_modules/cesium/Build/Cesium/Workers", to: "Workers" },
        { from: "node_modules/cesium/Build/Cesium/ThirdParty", to: "ThirdParty" },
        { from: "node_modules/cesium/Build/Cesium/Assets", to: "Assets" },
        { from: "node_modules/cesium/Build/Cesium/Widgets", to: "Widgets" },
      ],
    }),
    new HtmlPlugin({
      template: "index.html"
    }),
    ...(args.mode === "production" ? [] : []),
  ],
});