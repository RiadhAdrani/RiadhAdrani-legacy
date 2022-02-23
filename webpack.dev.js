const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const serve = JSON.parse(process.env.WEBPACK_SERVE || false);

module.exports = merge(common, {
     mode: "development",
     output: {
          filename: "main.js",
          path: path.resolve(__dirname, "dist"),
          publicPath: "/",
     },
     plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
     module: {
          rules: [{ test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }],
     },
     devServer: {
          hot: true,
          liveReload: false,
          static: {
               directory: path.join(__dirname, "public"),
          },
          historyApiFallback: true,
     },
});
