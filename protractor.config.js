/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
exports.config = {
  baseUrl: 'http://localhost:4000/',

  specs: ['**/*e2e-spec.js'],

  capabilities: {
    'browserName': 'chrome'
  },

  directConnect: true,

  framework: 'jasmine2',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000,
    showColors: true,
    showTiming: true,
    print: function() {}
  },

  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: true }));
    browser.ignoreSynchronization = false;
  },

  useAllAngular2AppRoots: true
}
