"use strict";

const gulp = require("gulp");
const task_js = require("./tasks/js");
const task_js_dist = require("./tasks/js-dist");
const task_css = require("./tasks/css");
const task_bootstrap = require("./tasks/bootstrap");

gulp.task("js", [], task_js);
gulp.task("js-dist", [], task_js_dist);
gulp.task("css", task_css);
gulp.task("bootstrap:prepareCfg", task_bootstrap.pre_cfg);
gulp.task("bootstrap:prepareVars", task_bootstrap.pre_vars);
gulp.task("bootstrap", ["bootstrap:prepareCfg", "bootstrap:prepareVars"], task_bootstrap.main);

gulp.task("watch", function () {
    gulp.watch("./scss/**/*.scss", ["bootstrap", "css"]);
    gulp.watch("./js/**/*.js", ["js"]);
});

gulp.task("dev", ["connect", "watch"]);
gulp.task("build", ["bootstrap", "css", "js"]);
gulp.task("dist", ["bootstrap", "css", "js-dist"]);
gulp.task("default", ["build"]);
