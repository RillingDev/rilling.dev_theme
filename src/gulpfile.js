"use strict";

const gulp = require("gulp");
const tasks = require("gulp-task-loader")("tasks");


gulp.task("watch", function() {
    gulp.watch("./bower.json", ["bower"]);
    gulp.watch("./src/img/*.*", ["favicon"]);
    gulp.watch(["./src/scss/bootstrap.scss", "./src/scss/_variables.scss"], ["bootstrap", "css"]);

    gulp.watch("./src/scss/**/*.scss", ["css"]);
    gulp.watch("./src/**/*.pug", ["html"]);
    gulp.watch("./src/js/**/*.js", ["js"]);
});


gulp.task("dev", ["connect", "watch"]);
gulp.task("build", [ "css", "js"]);
gulp.task("dist", ["sync", "bower", "bootstrap", "favicon", "build"]);
gulp.task("default", ["dist"]);
