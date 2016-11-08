module.exports = function (config) {

  var appBase = 'dist/dev/app/';      // transpiled app JS files

  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.min.js',

      // Reflect and Zone.js
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Angular 2 itself and the testing library
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

      'karma-test-shim.js',

      // Clarity libraries loaded by Karma
      { pattern: 'node_modules/clarity-angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/clarity-ui/clarity-ui.min.css', included: false, watched: false },

      // transpiled application & spec code paths loaded via module imports
      { pattern: appBase + '**/*.js', included: false, watched: true },

      // asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: appBase + '**/*.html', included: false, watched: true },
      { pattern: appBase + '**/*.css', included: false, watched: true },

      // paths for debugging with source maps in dev tools
      //{ pattern: appBase + '**/*.ts', included: false, watched: true },
      { pattern: appBase + '**/*.js.map', included: false, watched: false }
    ],

    //// proxied base paths for loading assets
    proxies: {
      // required for loading the html files
      "/app/": '/base/dist/dev/app/'
    },

    exclude: [],

    preprocessors: {
      'dist/**/!(*spec).js': ['coverage']
    },

    reporters: ['spec', 'coverage'],

    // Istanbul Coverage Reporter configuration
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json', subdir: '.', file: 'coverage-final.json' },
        { type: 'html' }
      ]
    },

    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '_test-output/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },

    port: 9877,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  })
}
