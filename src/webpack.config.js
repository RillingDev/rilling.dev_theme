const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const PRODUCTION_ENABLED = NODE_ENV === "production";
const CACHE = "./.cache/";



const pluginUglify = new UglifyJsPlugin({
    cache: path.join(CACHE, "uglifyjs/"),
    sourceMap: true
});
const pluginEnv = new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
});



const ruleBabel = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            cacheDirectory: path.join(CACHE, "babel/")
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
    plugins: PRODUCTION_ENABLED
        ? [pluginEnv, pluginUglify]
        : [pluginEnv],
    module: {
        rules: PRODUCTION_ENABLED
            ? [ruleBabel]
            : []
    },
};
