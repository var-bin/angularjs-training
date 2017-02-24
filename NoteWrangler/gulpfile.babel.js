// gulpfile.js

"use strict";

import gulp from "gulp";
import path from "path";
import htmlmin from "gulp-htmlmin";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import babel from "gulp-babel";
import flatten from "gulp-flatten";

const DEST_PRODUCTION = path.join(__dirname, "app/public");
const DEST_PRODUCTION_JS = path.join(DEST_PRODUCTION, "js");
const DEST_PRODUCTION_CSS = path.join(DEST_PRODUCTION, "css");
const DEST_PRODUCTION_TEMPLATES = path.join(DEST_PRODUCTION, "templates");

const APP_DIR = path.join(__dirname, "app");

let vendorsJs = {
  production: [
    "./bower_components/**/*.min.js",
    "!./bower_components/bootstrap/**",
    "!./bower_components/jquery/external/**",
    "!./bower_components/jquery/**/*.slim.*"
  ],
  development: [
    "./bower_components/angular/angular.js",
    "./bower_components/angular-resource/angular-resource.js",
    "./bower_components/angular-route/angular-route.js",
    "./bower_components/jquery/dist/jquery.js",
  ]
};

gulp.task("default", () => {
  console.log("default task");
});

gulp.task("html-min", (cb) => {
  gulp.src("index.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(rename("index.min.html"))
    .pipe(gulp.dest("."));

    cb();
});

gulp.task("cp-vendor-js", (cb) => {
  return gulp.src(vendorsJs.production)
    .pipe(flatten())
    .pipe(gulp.dest(DEST_PRODUCTION_JS + "/vendors"));
  cb();
});

gulp.task("cp-vendor-js-dev", (cb) => {
  return gulp.src(vendorsJs.development)
    .pipe(flatten())
    .pipe(gulp.dest(APP_DIR + "/js/vendors"));
  cb();
});

gulp.task("cp-vendor-css", (cb) => {
  return gulp.src("./bower_components/bootstrap/dist/css/bootstrap.min.css")
    .pipe(gulp.dest(DEST_CSS));
    cb();
});

gulp.task("uglify-js", ["cp-vendor-js"], (cb) => {
  return gulp.src(["./app/js/**/*.js", "!./app/js/vendors/*.js"])
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest(DEST_PRODUCTION_JS));
  cb();
});
