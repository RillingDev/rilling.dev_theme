"use strict";

/**
 * Copies Bower dependencies
 */

const gulp = require("gulp");
const mainBowerFiles = require("main-bower-files");
const filter = require("gulp-filter");

module.exports = function() {
    return gulp.task("bower", function() {
        const filterJs = filter("**/*.js");
        const filterCss = filter("**/*.css");
        const filterFonts = filter(["**/*.eot", "**/*.otf", "**/*.ttf", "**/*.woff", "**/*.woff2", "**/*.svg"]);

        const bowerInclude = function(filter, dest) {
            return gulp
                .src(mainBowerFiles())
                .pipe(filter)
                .pipe(gulp.dest(dest));
        };

        bowerInclude(filterJs, "../js/lib");
        bowerInclude(filterCss, "../css/lib");
        bowerInclude(filterFonts, "../css/fonts");
    });
};
