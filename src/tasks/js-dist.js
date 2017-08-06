"use strict";

const babel = require("babel-core");
const uglify = require("uglify-es");
const bundle = require("./lib/bundle");

bundle([{
    id: "iife",
    file: "",
    name: "IIFE:min",
    fn: code => uglify.minify(
        babel.transform(code, {
            compact: false
        }).code
    ).code
}]);
