// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const ci = require('ci-info');

module.exports = function (config) {
  process.env.CHROME_BIN = require('puppeteer').executablePath();
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
    captureTimeout: 210000,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout: 210000,
    browserNoActivityTimeout: 210000,
    hostname:'http://ec2-3-124-2-234.eu-central-1.compute.amazonaws.com:8081',
    listenAddress:'http://ec2-3-124-2-234.eu-central-1.compute.amazonaws.com:8081',
    customLaunchers: {
      ChromeJenkins: {

        base: 'ChromeHeadless',
        flags: ['--no-sandbox','--headless',
          '--proxy-bypass-list=*',
          '--proxy-server=\'http://ec2-3-124-2-234.eu-central-1.compute.amazonaws.com\'','--disable-web-security',  '--remote-debugging-port=9222'],
        debug: true
      },
    },
    singleRun: ci.isCI
  });
};

