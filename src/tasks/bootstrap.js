"use strict";

/**
 * Builds & Copies Bootstrap
 */

const gulp = require("gulp");
const sass = require("gulp-sass");
const cssBeautify = require("gulp-cssbeautify");

module.exports = function() {
    gulp.task("bootstrap", function() {
        gulp
            .src(["./scss/bootstrap.scss", "./scss/_variables.scss"])
            .pipe(gulp.dest("./node_modules/bootstrap/scss"));

        gulp
            .src("./node_modules/bootstrap/scss/bootstrap.scss")
            .pipe(sass().on("error", sass.logError))
            .pipe(cssBeautify())
            .pipe(gulp.dest("../css/lib/"));
    });
};
