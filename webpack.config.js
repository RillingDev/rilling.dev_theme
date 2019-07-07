const { resolve } = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/ts/index.ts",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "source/js")
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".ts"]
    },
    optimization: {
        minimizer: [new TerserPlugin()]
    }
};
