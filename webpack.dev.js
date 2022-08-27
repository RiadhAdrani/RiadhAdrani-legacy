const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

const mode = "development";

module.exports = merge(common, {
    mode,
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
        new webpack.DefinePlugin({
            "typeof window": JSON.stringify("object"),
            "process.env.NODE_ENV": JSON.stringify(mode),
        }),
    ],
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
