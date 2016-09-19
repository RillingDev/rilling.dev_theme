"use strict";

/**
 * Clean public directory
 */

const gulp = require("gulp");
const clean = require("gulp-clean");

module.exports = function() {
    return gulp.task("clean", function() {
        return gulp.src(["../js", "../css"], {
                read: false
            })
            .pipe(clean());
    });
};
