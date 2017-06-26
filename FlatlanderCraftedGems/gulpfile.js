const gulp = require("gulp");
const fs = require("fs");
const path = require("path");
const rename = require("gulp-rename");

const PATH_TO_VENDORS = path.normalize(__dirname, "/vendors");
const PATH_TO_CSS = path.normalize(__dirname, "/public/css");
const PATH_TO_JS = path.normalize(__dirname, "/public/js");

const DEV_DEPENCIES = {
  css: {
    bootstrap: {
      src: path.normalize(PATH_TO_VENDORS, "/bootstrap/dist/css/bootstrap.min.css"),
      dirname: path.normalize(PATH_TO_CSS, "/bootstrap/dist/css/"),
      filename: "bootstrap.min.css",
      dest: PATH_TO_CSS
    }
  },
  js: {
    angular: {
      src: path.normalize(PATH_TO_VENDORS, "/angular/angular.min.js"),
      dirname: path.normalize(PATH_TO_JS, "angular/"),
      filename: "angular.min.js",
      dest: PATH_TO_JS
    },
    jquery: {
      src: path.normalize(PATH_TO_VENDORS, "/jquery/dist/jquery.min.js"),
      dirname: path.normalize(PATH_TO_JS, "jquery/dist/"),
      filename: "jquery.min.js",
      dest: PATH_TO_JS
    }
  }
};

gulp.task("default", function() {
  return gulp.src("./vendors/angular/angular.min.js")
    .pipe(rename("angular.min.js"))
    .pipe(gulp.dest("./public/js/"));
});

gulp.task("copyVendors", () => {
  let keys = Object.keys(DEV_DEPENCIES);

  keys.forEach( (vendor) => {
    console.log(DEV_DEPENCIES[vendor]);
  });
});
