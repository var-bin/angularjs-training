# angular-typescript-webpack

AngularJS + Typescript + Webpack build with Karma and wallaby tests support.
And this all with sourcemaps in production support!!

### Install

```sh
npm i webpack typings typescript -g
git clone git@github.com/brechtbilliet/angular-typescript-webpack.git
cd angular-typescript-webpack
npm install
npm start
```

Then it will automatically open the app in your browser

To run tests

```sh
npm test
```

Coverage

```sh
open reports/coverage/index.html
```

Build
```sh
npm install
npm run build
```


### Features

- [x] Build basic [AngularJS](https://angularjs.org) app with [Webpack](https://webpack.js.org)
- [x] Simple twitter application
- [x] [SASS](http://sass-lang.com) support
  - [] In production mode extract styles to it own bundle
- [x] Fully tested with [Jasmine](https://jasmine.github.io)
- [x] Coverage report
- [x] [Typescript](https://www.typescriptlang.org) support:
  - [x] [TSLint](https://palantir.github.io/tslint) support
- [x] ES6 modules support via TypeScript compiler
- [x] [Wallaby.js](https://wallabyjs.com) support
- [x] [Karma](https://karma-runner.github.io) support
  - [x] Running tests in [ChromeHeadless](https://github.com/karma-runner/karma-chrome-launcher)
  - [] Running tests in [FirefoxHeadless](https://github.com/karma-runner/karma-firefox-launcher) (optional)
- [x] Optimized build packages:
  - [x] dev mode
  - [] production mode
  - [] test mode
- [x] Minimal and straightforward setup
- [] Scafolding support:
  - [] [Yeoman](http://yeoman.io) (optional)
- [x] Watches code and refreshes browser with latest changes automatically via [HRM](https://webpack.js.org/guides/hot-module-replacement/)
- [x] Sourcemap support in develop and profile modes
- [] Inspect bundles:
  - [] [Bundle Buddy](https://github.com/samccone/bundle-buddy) `npm run bb`
  - [] Analyzing Build Statistics via [Official Analyse Tool](http://webpack.github.io/analyse/) `npm run analyse`
- [] Travis CI
