// gulpfile.js

"use strict";

import gulp from "gulp";
import path from "path";
import fs from "fs";

import htmlmin from "gulp-htmlmin";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
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
import uncss from "gulp-uncss";
import eslint from "gulp-eslint";
import del from "del";
import gulpIf from "gulp-if";

const APP_PATH = path.join(__dirname, "app");
const APP_CSS_PATH = path.join(APP_PATH, "css");
const APP_JS_PATH = path.join(APP_PATH, "js");
const INDEX_TEMPLATE_PATH = path.join(APP_PATH, "index.template.html");
const DEST_PATH = path.join(APP_PATH, "assets");
const DEST_PATH_JS = path.join(DEST_PATH, "js");
const DEST_PATH_CSS = path.join(DEST_PATH, "css");
const DEST_PATH_FONTS = path.join(DEST_PATH, "fonts");
const TEMPLATES_PATH = path.join(APP_PATH, "templates/**/*.html");

const IS_PRODUCTION = !process.env.NODE_ENV || process.env.NODE_ENV == "production";

function getDirectories(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

gulp.task("inject-html", (cb) => {
  let srcCss = gulp.src([DEST_PATH_CSS + "/*.css", "!" + DEST_PATH_CSS + "/*.min.css"], {read: false});
  let appJs = gulp.src([APP_JS_PATH + "/*.js", APP_JS_PATH + "/*.min.js"], {read: false});
  let allJS = gulp.src([DEST_PATH_JS + "/*.js", "!" + DEST_PATH_CSS + "/*.min.js"], {read: false});

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
    .pipe(gulpIf(IS_PRODUCTION, htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      quoteCharacter: "\""
    })))
    .pipe(gulpIf(IS_PRODUCTION, rename("index.min.html")))
    .pipe(gulp.dest(DEST_PATH));
  cb();
});

gulp.task("clean:js", () => {
  return del(DEST_PATH_JS);
});

gulp.task("concat-js", (cb) => {
  let directories = getDirectories(APP_JS_PATH);

  directories.map( (dirName) => {
    return gulp.src([path.join(APP_JS_PATH, dirName, "/*.js"), "!" + path.join(APP_JS_PATH, dirName, "/angular.js")])
      // concat into dirName.bundle.js
      .pipe(concat(dirName + ".bundle.js"))
      // write to output
      .pipe(gulp.dest(DEST_PATH_JS));
  })

  cb();
});

gulp.task("eslint", (cb) => {
  let allJS = gulp.src([path.join(APP_JS_PATH, "**/*.js"), "!" + path.join(APP_JS_PATH, "vendors/*.js"), path.join(__dirname, "gulpfile.babel.js")]);

  allJS
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());

  cb();
});

gulp.task("transpile", (cb) => {
  let assetsJS = gulp.src(path.join(DEST_PATH_JS, "/*.bundle.js"));

  assetsJS
    .pipe(tap( (file) => {
      gutil.log("bundling " + file.path)

      file.contents = browserify(file.path, {
        debug: true
      })
      .transform("babelify")
      .bundle();
    }))
    // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
    .pipe(buffer())
    .pipe(gulp.dest(DEST_PATH_JS));

  cb();
});

gulp.task("copy-css", () => {
  let bootstrapCss = path.normalize("bower_components/bootstrap/dist/css/bootstrap.css");

  return gulp.src(bootstrapCss)
    .pipe(gulp.dest(APP_CSS_PATH));
});

gulp.task("minify-css", (cb) => {
  let allCss = gulp.src(path.join(APP_CSS_PATH, "/*.css"));

  allCss
    .pipe(concatCss("styles.css"))
    .pipe(gulp.dest(DEST_PATH_CSS))
    .pipe(uncss({
      html: [INDEX_TEMPLATE_PATH, TEMPLATES_PATH]
    }))
    .pipe(csso({
      restructure: false,
      sourceMap: true,
      debug: true
    }))
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest(DEST_PATH_CSS));

  cb();
});

gulp.task("copy-fonts", (cb) => {
  let bootstrapFonts = gulp.src(path.normalize("bower_components/bootstrap/fonts/glyphicons*"));

  bootstrapFonts
    .pipe(gulp.dest(DEST_PATH_FONTS));
  cb();
});

gulp.task("assets", ["copy-css", "copy-fonts", "minify-css", "transpile", "inject-html"]);

gulp.task("default", ["clean:js", "concat-js", "transpile"]);
