"use strict";

/**
 * Compile SCSS
 */

const gulp = require("gulp");
const sass = require("gulp-sass");

module.exports = function () {
    return gulp
        .src("./scss/app.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("../css"));
};
