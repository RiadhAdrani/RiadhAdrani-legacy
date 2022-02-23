const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
     mode: "production",
     output: {
          filename: "main.[contenthash].js",
          path: path.resolve(__dirname, "docs"),
          publicPath: "https://riadhadrani.github.io/recursive-website/",
     },
     optimization: {
          minimizer: [
               new CssMinimizerWebpackPlugin(),
               new TerserPlugin(),
               new HTMLWebpackPlugin({
                    template: "./public/index.html",
                    filename: "index.html",
                    minify: {
                         removeAttributeQuotes: true,
                         collapseWhitespace: true,
                         removeComments: true,
                    },
               }),
               new HTMLWebpackPlugin({
                    template: "./public/index.html",
                    filename: "404.html",
                    minify: {
                         removeAttributeQuotes: true,
                         collapseWhitespace: true,
                         removeComments: true,
                    },
               }),
          ],
     },
     plugins: [
          new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
          new CleanWebpackPlugin(),
     ],
     module: {
          rules: [
               { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
          ],
     },
});
