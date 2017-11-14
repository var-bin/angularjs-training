// Karma configuration
// Generated on Wed Oct 18 2017 16:40:50 GMT+0300 (FLE Daylight Time)
process.env.CHROME_BIN = require('puppeteer').executablePath();

import webpackConfig from "./webpack.test";

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './module5/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'angularjs-controllers/src/test.ts',
    ],


    // list of files to exclude
    exclude: [
      'node_modules',
      'angularjs-controllers/lib',
      'angularjs-controllers/build',
      'angularjs-controllers/src/app.ts',
      'angularjs-controllers/src/app.module.ts'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'angularjs-controllers/src/test.ts': ['webpack']
    },

    mime: {
      "text/x-typescript": ["ts", "tsx"]
    },

    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true
      }
    },

    webpack: webpackConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
