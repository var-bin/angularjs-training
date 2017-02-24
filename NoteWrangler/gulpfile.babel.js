// gulpfile.js

"use strict";

import gulp from "gulp";
import path from "path";

import htmlmin from "gulp-htmlmin";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import babel from "gulp-babel";
import flatten from "gulp-flatten";
import concatCss from "gulp-concat-css";
import csso from "gulp-csso";
import inject from "gulp-inject";
import replace from "gulp-replace";

const DEST_PRODUCTION = path.join(__dirname, "app/public");
const DEST_PRODUCTION_JS = path.join(DEST_PRODUCTION, "js");
const DEST_PRODUCTION_JS_VENDORS = path.join(DEST_PRODUCTION_JS, "vendors");
const DEST_PRODUCTION_CSS = path.join(DEST_PRODUCTION, "css");
const DEST_PRODUCTION_TEMPLATES = path.join(DEST_PRODUCTION, "templates");

const APP_DIR = path.join(__dirname, "app");
const DEST_DEVELOPMENT_JS = path.join(APP_DIR, "js/vendors");
const DEST_DEVELOPMENT_CSS = path.join(APP_DIR, "css");

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

let vendorsCss = {
  production: [
    "./bower_components/bootstrap/dist/css/bootstrap.css",
    "./app/css/styles.css"
  ],
  development: [
    "./bower_components/bootstrap/dist/css/bootstrap.css",
    "./bower_components/bootstrap/dist/css/bootstrap.css.map"
  ]
}

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
    .pipe(gulp.dest(DEST_PRODUCTION_JS_VENDORS));
  cb();
});

gulp.task("cp-vendor-js-dev", (cb) => {
  return gulp.src(vendorsJs.development)
    .pipe(flatten())
    .pipe(gulp.dest(DEST_DEVELOPMENT_JS));
  cb();
});

gulp.task("cp-vendor-css", (cb) => {
  gulp.src(vendorsCss.production)
    .pipe(concatCss("styles.min.css"))
    .pipe(csso())
    .pipe(gulp.dest(DEST_PRODUCTION_CSS));
  gulp.src(vendorsCss.development)
    .pipe(gulp.dest(DEST_DEVELOPMENT_CSS));
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

gulp.task("inject-html", (cb) => {
  let srcCss = gulp.src(["app/css/bootstrap.css", "app/css/styles.css"], {read: false});
  let srcVendorsJS = gulp.src("app/js/vendors/*.js");

  gulp.src("app/index.html")
    .pipe(inject(srcCss))
    .pipe(inject(srcVendorsJS, {
      starttag: "<!-- inject:vendors-libs -->"
    }))
    .pipe(replace("/app/", ""))
    .pipe(gulp.dest("app/"));
  cb();
});
