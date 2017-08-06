"use strict";

const bundle = require("./lib/bundle");

bundle([{
    id: "iife",
    file: "",
    name: "IIFE",
    fn: code => code
}]);
