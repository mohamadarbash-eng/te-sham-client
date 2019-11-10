// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const ci = require('ci-info');

module.exports = function (config) {
  process.env.CHROME_BIN = require('puppeteer').executablePath();
  process.env.NO_PROXY = 'localhost, 0.0.0.0/4201, 0.0.0.0/9876';
  process.env.no_proxy = 'localhost, 0.0.0.0/4201, 0.0.0.0/9876';
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
    hostname:'localhost',
    customLaunchers: {
      ChromeJenkins: {

        base: 'google-chrome-stable',
        flags: [
          '--disable-gpu',
          '--no-sandbox',
            '--headless',
            '--remote-debugging-port=9222',
          '--proxy-bypass-list=*',
          '--proxy-server=\'http:localhost:9876\''],
      },
    },
    singleRun: ci.isCI,
    concurrency: Infinity
  });
};

