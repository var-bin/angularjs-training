// gulpfile.js

"use strict";

import gulp from "gulp";
import path from "path";
import fs from "fs";

import htmlmin from "gulp-htmlmin";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import babel from "gulp-babel";
import flatten from "gulp-flatten";
import concatCss from "gulp-concat-css";
import csso from "gulp-csso";
import inject from "gulp-inject";
import replace from "gulp-replace";
import browserify from "browserify";
import source from "vinyl-source-stream";
import gutil from "gulp-util";
import tap from "gulp-tap";
import buffer from "gulp-buffer";
import sourcemaps from "gulp-sourcemaps";
import concat from "gulp-concat";

const APP_PATH = path.join(__dirname, "app");
const APP_CSS_PATH = path.join(APP_PATH, "css");
const APP_JS_PATH = path.join(APP_PATH, "js");
const INDEX_TEMPLATE_PATH = path.join(APP_PATH, "index.template.html");
const DEST_PATH = path.join(APP_PATH, "assets");

gulp.task("inject-html", (cb) => {
  let srcCss = gulp.src(APP_CSS_PATH + "/*.css", {read: false});
  let appJs = gulp.src(APP_JS_PATH + "/*.js", {read: false});
  let allJS = gulp.src(DEST_PATH + "/*.js", {read: false});
  let directivesJs = gulp.src(APP_JS_PATH + "/directives/*.js", {read: false});
  let servicesJs = gulp.src(APP_JS_PATH + "/services/*.js", {read: false});

  gulp.src(INDEX_TEMPLATE_PATH)
    .pipe(inject(srcCss, {
      removeTags: true
    }))
    .pipe(inject(allJS, {
      starttag: "<!-- inject:all-js -->",
      removeTags: true
    }))
    .pipe(inject(appJs, {
      starttag: "<!-- inject:js-app -->",
      removeTags: true
    }))
    .pipe(replace("/app/", ""))
    .pipe(rename("index.html"))
    .pipe(gulp.dest(APP_PATH));
  cb();
});


function getDirectories(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

gulp.task("concat-js", (cb) => {
  let directories = getDirectories(APP_JS_PATH);

  directories.map( (dirName) => {
    return gulp.src([path.join(APP_JS_PATH, dirName, "/*.js"), "!" + path.join(APP_JS_PATH, dirName, "/angular.js")])
      // concat into dirName.bundle.js
      .pipe(concat(dirName + ".bundle.js"))
      // write to output
      .pipe(gulp.dest(DEST_PATH));
  });

  cb();
});

gulp.task("transpile",  (cb) => {
  let assetsJS = gulp.src(path.join(DEST_PATH, "/*.bundle.js"), {read: false});

  assetsJS
    .pipe(tap( (file) => {
      gutil.log("bundling " + file.path)

      file.contents = browserify(file.path, {
        debug: true
      })
      .transform("babelify", {
        presets: ["env", "es2015"]
      })
      .bundle();
    }))
    // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
    .pipe(buffer())
    .pipe(gulp.dest(DEST_PATH));
  cb();
});

gulp.task("copy-css", (cb) => {
  let bootstrapCss = path.normalize("bower_components/bootstrap/dist/css/bootstrap.css");

  return gulp.src(bootstrapCss)
    .pipe(gulp.dest(APP_CSS_PATH));

  cb();
});

gulp.task("default", ["concat-js", "transpile"]);
