"use strict";

/**
 * Synch ./bower.json and ./app/package.json with the main package.json
 */

const gulp = require("gulp");
const sync = require("gulp-config-sync");

module.exports = function() {
    gulp.task("sync", function() {
        gulp.src("bower.json")
            .pipe(sync())
            .pipe(gulp.dest("."));
    });
};
