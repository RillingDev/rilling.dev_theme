"use strict";

/**
 * Concat & Babel JS
 */

const gulp = require("gulp");
const babel = require("gulp-babel");

module.exports = function() {
    gulp.task("js", function() {
        gulp.src(`./js/app.js`)
            .pipe(babel({
                presets: ["es2016"]
            }))
            .pipe(gulp.dest("../js/"));
    });
};
