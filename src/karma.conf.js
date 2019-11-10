// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const ci = require('ci-info');
process.env.CHROME_BIN = require('puppeteer').executablePath();
process.env.CHROME_PATH = '/usr/bin/google-chrome';
console.log(process.env.CHROME_BIN);
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [ci.isCI ? 'ChromeJenkins' : 'Chrome'],
    hostname: 'localhost',
    listenAddress: 'localhost',
    customLaunchers: {
      ChromeJenkins: {
        base: 'Chrome',
        flags: [
            '--headless',],
      },
    },
    singleRun: ci.isCI,
    concurrency: Infinity
  });
};

