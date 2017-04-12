"use strict";

const gulp = require("gulp");
const task_js = require("./tasks/js");
const task_js_dist = require("./tasks/js-dist");
const task_css = require("./tasks/css");
const task_bootstrap = require("./tasks/bootstrap");

gulp.task("js", [], task_js);
gulp.task("js-dist", [], task_js_dist);
gulp.task("css", task_css);
gulp.task("bootstrap", task_bootstrap);

gulp.task("watch", function () {
    gulp.watch(["./scss/**/*.scss"], ["css"]);
    gulp.watch(["./scss/bootstrap.scss","./scss/_variables.scss"], ["bootstrap", "css"]);
    gulp.watch(["./js/**/*.js"], ["js"]);
});

gulp.task("build", ["bootstrap", "css", "js"]);
gulp.task("dist", ["bootstrap", "css", "js-dist"]);
gulp.task("default", ["dist"]);
