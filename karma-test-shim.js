/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// /*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {
};

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return /\.spec\.js$/.test(path);
}

function isBuiltFile(path) {
  var builtPath = '/base/';
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);

// Load our SystemJS configuration.

var packages = {
  'app':              { defaultExtension: 'js' },
  'clarity-angular':  { main: 'index.js', defaultExtension: 'js' },
  'rxjs':             { main: 'Rx.js', defaultExtension: 'js' }
};

System.config({
  baseURL: '/base',
  map: {
    'app':              '/base/dist/dev/app',
    'clarity-angular':  'node_modules/clarity-angular',
    'rxjs':             'node_modules/rxjs',
    // angular bundles
    '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
    '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
    '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
    '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',

    // angular testing umd bundles
    '@angular/core/testing': 'node_modules/@angular/core/bundles/core-testing.umd.js',
    '@angular/common/testing': 'node_modules/@angular/common/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'node_modules/@angular/http/bundles/http-testing.umd.js',
    '@angular/router/testing': 'node_modules/@angular/router/bundles/router-testing.umd.js',
    '@angular/forms/testing': 'node_modules/@angular/forms/bundles/forms-testing.umd.js'
  },
  packages: packages
});

Promise.all([
  System.import('@angular/core/testing'),
  System.import('@angular/platform-browser-dynamic/testing')
]).then(function (providers) {
  var testing = providers[0];
  var testingBrowser = providers[1];

  testing.TestBed.initTestEnvironment(
    testingBrowser.BrowserDynamicTestingModule,
    testingBrowser.platformBrowserDynamicTesting()
  );

}).then(function() {
  // Finally, load all spec files.
  // This will run the tests directly.
  return Promise.all(
    allSpecFiles.map(function (moduleName) {
      return System.import(moduleName);
    }));
}).then(__karma__.start, __karma__.error);


