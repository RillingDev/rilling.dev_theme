const { resolve } = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/ts/main.ts",
    output: {
        filename: "main.js",
        path: resolve(__dirname, "source")
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
    optimization: {
        minimizer: [new TerserPlugin()]
    }
};
