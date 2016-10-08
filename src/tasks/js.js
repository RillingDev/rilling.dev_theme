"use strict";

/**
 * Concat & Babel JS
 */

const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

module.exports = function() {
    gulp.task("js", function() {
        gulp.src(`./js/app.js`)
            .pipe(babel({
                presets: ["es2015"]
            }))
            .pipe(uglify())
            .pipe(gulp.dest("../js/"));
    });
};
