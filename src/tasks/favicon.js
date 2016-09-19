"use strict";

/**
 * Copy Favicon/icon
 */

const gulp = require("gulp");

module.exports = function() {
    return gulp.task("favicon", function() {
        gulp
            .src("./src/img/favicon.png")
            .pipe(gulp.dest("./app"));
    });
};
