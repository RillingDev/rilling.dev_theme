"use strict";

const gulp = require("gulp");
const tasks = require("gulp-task-loader")("tasks");


gulp.task("watch", function() {
    gulp.watch("./img/*.*", ["favicon"]);
    gulp.watch(["./scss/bootstrap.scss", "./scss/_variables.scss"], ["bootstrap", "css"]);

    gulp.watch("./scss/**/*.scss", ["css"]);
    gulp.watch("./**/*.pug", ["html"]);
    gulp.watch("./js/**/*.js", ["js"]);
});


gulp.task("dev", ["connect", "watch"]);
gulp.task("build", [ "css", "js"]);
gulp.task("dist", ["sync", "bootstrap", "favicon", "build"]);
gulp.task("default", ["dist"]);
