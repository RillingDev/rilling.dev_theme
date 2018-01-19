const CACHE = "./.cache/";

const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

const _plugins = [
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
];

const _module = {
    rules: []
};

if (process.env.NODE_ENV === "production") {
    _plugins.push(
        new UglifyJsPlugin({
            cache: path.join(CACHE, "uglifyjs/")
        })
    );

    _module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: "babel-loader",
            options: {
                cacheDirectory: path.join(CACHE, "babel/")
            }
        }
    });
}

module.exports = {
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname, "../js/"),
        publicPath: "../js/",
        filename: "app.js"
    },
    module: _module,
    plugins: _plugins
};
