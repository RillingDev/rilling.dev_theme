const { resolve } = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

module.exports = {
    entry: "./src/main.ts",
    output: {
        filename: "main.js",
        path: resolve(__dirname, "source"),
        publicPath: "./",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        },
                    },
                ],
            },
            {
                test: /\.(woff2|woff)$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext]",
                },
            },
            {
                test: /\.svg$/,
                type: "asset/resource",
                generator: {
                    filename: "sprites/font-awesome-[name][ext]",
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts"],
    },
    plugins: [ new LicenseWebpackPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    devtool: "source-map",
};
