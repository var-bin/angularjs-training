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

const APP_CSS_PATH = path.join(__dirname, "app/css");
const APP_JS_PATH = path.join(__dirname, "app/js");

gulp.task("inject-html", (cb) => {
  let srcCss = gulp.src(APP_CSS_PATH + "/*.css", {read: false});
  let srcVendorsJS = gulp.src([APP_JS_PATH + "/vendors/*.js", "!" + APP_JS_PATH +"/vendors/angular.min.js"], {read: false});
  let appJs = gulp.src(APP_JS_PATH + "/*.js", {read: false});
  let controllersJs = gulp.src(APP_JS_PATH + "/controllers/*.js", {read: false});
  let directivesJs = gulp.src(APP_JS_PATH + "/directives/*.js", {read: false});
  let servicesJs = gulp.src(APP_JS_PATH + "/services/*.js", {read: false});

  gulp.src("./app/index.template.html")
    .pipe(inject(srcCss, {
      removeTags: true
    }))
    .pipe(inject(srcVendorsJS, {
      starttag: "<!-- inject:js-libs -->",
      removeTags: true
    }))
    .pipe(inject(appJs, {
      starttag: "<!-- inject:js-app -->",
      removeTags: true
    }))
    .pipe(inject(controllersJs, {
      starttag: "<!-- inject:controllers -->",
      removeTags: true
    }))
    .pipe(inject(directivesJs, {
      starttag: "<!-- inject:directives -->",
      removeTags: true
    }))
    .pipe(inject(servicesJs, {
      starttag: "<!-- inject:services -->",
      removeTags: true
    }))
    .pipe(replace("/app/", ""))
    .pipe(rename("index.html"))
    .pipe(gulp.dest("app/"));
  cb();
});

gulp.task("default", () => {
  console.log("default task");
});
