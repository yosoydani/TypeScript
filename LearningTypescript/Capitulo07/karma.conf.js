module.exports = function (config) {
'use strict';

  config.set({
      basePath: '',
      frameworks: ['mocha', 'chai', 'sinon'],
      files : [
        { pattern: __dirname + "/bundled/test/bdd.test.js", included: true },
        { pattern: __dirname + "/node_modules/jquery/dist/jquery.min.js", included: true },
        { pattern: __dirname + "/node_modules/bootstrap/dist/js/bootstrap.min.js", included: true }
      ],
      preprocessors: {
        // in this demo we will only execute the bdd tests
        // but tdd examples are available in the /test directory
        '**/bundled/test/bdd.test.js' : 'coverage'
      },
      reporters: ['progress', 'coverage'],
      coverageReporter: {
        type : 'lcov',
        dir : __dirname + '/coverage/'
      },
      browsers: ['Chrome'], 
      plugins : [
        'karma-coverage',
        'karma-mocha',
        'karma-chai',
        'karma-sinon',
        'karma-phantomjs-launcher',
        'karma-chrome-launcher'
      ],      
      client : {
        // we can customize the mocha options
        mocha : {
          // in this demo we will only execute the bdd tests
          // but tdd examples are available in the /test directory
          ui : "bdd"
        }
      },
      port: 9876,
      colors: true,
      autoWatch: false,
      logLevel: config.DEBUG
  });
};
