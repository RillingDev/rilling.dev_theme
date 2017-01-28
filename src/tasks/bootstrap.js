"use strict";

/**
 * Builds & Copies Bootstrap
 */

const gulp = require("gulp");
const sass = require("gulp-sass");
const cssBeautify = require("gulp-cssbeautify");

module.exports = {
    pre_cfg: function () {
        return gulp
            .src("./scss/_variables.scss")
            .pipe(gulp.dest("./node_modules/bootstrap/scss"));
    },
    pre_vars: function () {
        return gulp
            .src("./scss/bootstrap.scss")
            .pipe(gulp.dest("./node_modules/bootstrap/scss/"));
    },
    main: function () {
        return gulp
            .src("./node_modules/bootstrap/scss/bootstrap.scss")
            .pipe(sass().on("error", sass.logError))
            .pipe(cssBeautify())
            .pipe(gulp.dest("../css/lib/"));
    }
};
