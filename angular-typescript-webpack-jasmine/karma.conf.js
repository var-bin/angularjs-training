"use strict";

const webpackConfig = require("./webpack/webpack.test.js");

process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ["ChromeHeadless"],
        singleRun: true,
        files: [
            "src/test.ts"
        ],
        preprocessors: {
            "src/test.ts": ["webpack"]
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
        reporters: [
            "dots",
            "spec",
            "coverage"
        ],
        coverageReporter: {
            reporters: [
                {
                    dir: "reports/coverage/",
                    subdir: ".",
                    type: "html",
                },
                {
                    type: "teamcity"
                }
            ]
        }
    });
};
