"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

module.exports = function () {
    return gulp
        .src("./scss/bootstrap.scss")
        .pipe(sass({outputStyle: "expanded"})
        .on("error", sass.logError))
        .pipe(gulp.dest("../css/lib"));
};
