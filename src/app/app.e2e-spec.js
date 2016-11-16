/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
describe('App E2E Tests', function() {

  var expectedMsg = 'Home';

  beforeEach(function() {
    browser.get('/');
  });

  it('should display: ' + expectedMsg, function() {
    expect(element(by.css('h2')).getText()).toEqual(expectedMsg);
  });

});
