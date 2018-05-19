const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const PRODUCTION_ENABLED = NODE_ENV === "production";
const CACHE_PATH = path.resolve(__dirname, "./.cache/");

const optimizationUglify = new UglifyJsPlugin({
    cache: path.join(CACHE_PATH, "uglifyjs/"),
    parallel: true,
    sourceMap: true
});

const pluginEnv = new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
});

const ruleBabel = {
    test: /\.js$/,
    use: {
        loader: "babel-loader",
        options: {
            cacheDirectory: path.join(CACHE_PATH, "babel/")
        }
    }
};

module.exports = {
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname, "../js/"),
        publicPath: "../js/",
        filename: "app.js"
    },
    mode: NODE_ENV,
    optimization: {
        minimizer: [optimizationUglify]
    },
    plugins: [pluginEnv],
    module: {
        rules: PRODUCTION_ENABLED ? [ruleBabel] : []
    }
};
