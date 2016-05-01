"use strict";
var pathToGraveTheme = "../grav-admin/user/themes/f-rilling";

module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require("time-grunt")(grunt);

    // Automatically load required Grunt tasks
    require("jit-grunt")(grunt, {});

    // Configurable paths for the srclication
    var srcConfig = {
        src: require("./bower.json").srcPath || "src",
        dist: "dist"
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: srcConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            styles: {
                files: ["src/less/main.less", "src/less/main/*.less", "src/less/blocks/*.less"],
                tasks: [
                    "less:dist",
                    "cssmin"
                ]
            },
            bootstrap: {
                files: ["src/less/bootstrap.less", "src/less/variables.less", "src/js/Bootstrap_Gruntfile.less"],
                tasks: [
                    "bootstrap",
                    "build"
                ]
            }
        },


        // Add vendor prefixed styles
        less: {
            dist: {
                options: {
                    //sourceMap:true,
                    paths: ["css"],
                    plugins: [
                        new(require("less-plugin-autoprefix"))({
                            browsers: ["last 2 versions"]
                        }),
                        new(require("less-plugin-clean-css"))()
                    ],
                },
                files: {
                    "css/main.css": ["src/less/main.less"]
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/main.min.css': ['css/main.css'],
                    'css/compiled.min.css': ['css/bootstrap.css', 'css/main.css']
                }
            }
        },
        cssbeautifier: {
            files: ["css/main.css"]
        },


        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        /*ngAnnotate: {
          dist: {
            files: [{
              expand: true,
              cwd: "src/app/app.js",
              src: "*.js",
              dest: ".tmp/concat/js"
            }]
          }
        },*/


        // Copies remaining files to places other tasks can use
        copy: {
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "src",
                    dest: ".",
                    src: [
                        "fonts/*.ttf",
                    ]
                }]
            },
            bootstrap: {
                //Copy bootstrap files, use grunt dist in the Bootstrap dir to build
                files: [{
                    "bower_components/bootstrap/less/variables.less": ["src/less/variables.less"],
                    "bower_components/bootstrap/less/bootstrap.less": ["src/less/bootstrap.less"],
                    "bower_components/bootstrap/Gruntfile.js": ["src/js/Bootstrap_Gruntfile.js"]
                }]
            },
            bootstrap_end: {
                //Copy bootstrap files, use grunt dist in the Bootstrap dir to build
                files: [{
                    "css/bootstrap.css": ["bower_components/bootstrap/dist/css/bootstrap.css"],
                    "css/bootstrap.css.map": ["bower_components/bootstrap/dist/css/bootstrap.css.map"],
                    "css/bootstrap.min.css": ["bower_components/bootstrap/dist/css/bootstrap.min.css"],
                    "js/bootstrap.js": ["bower_components/bootstrap/dist/js/bootstrap.js"],
                    "js/bootstrap.min.js": ["bower_components/bootstrap/dist/js/bootstrap.min.js"]
                }]
            },
            /*fontawesome: {
              files: [{
                expand: true,
                dot: true,
                cwd: "bower_components/font-awesome",
                dest: "dist",
                src: [
                  "fonts/*.ttf",
                  "css/*.ttf",
                ]
              }]
            },*/
            export: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: ".",
                    dest: pathToGraveTheme,
                    src: [
                        "fonts",
                        "css"
                    ]
                }]
            }
        },

        exec: {
            dist: {
                cwd: "bower_components/bootstrap",
                stdout: true,
                stderr: true,
                command: "grunt dist"
            }
        },



        //Magic speedup thingy
        concurrent: {
            build: [
                "less",
                "copy:fonts",
                "copy:bootstrap_end"
            ],
            finish: [
                "cssmin",
                "cssbeautifier"
            ]
        }

    });

    grunt.registerTask("bootstrap", [
        "copy:bootstrap",
        "exec"
    ]);

    grunt.registerTask("build", [
        "concurrent:build",
        "concurrent:finish",
    ]);

    grunt.registerTask("default", [
        "build"
    ]);
};
