describe('App E2E Tests', function() {

  var expectedMsg = 'Home';

  beforeEach(function() {
    browser.get('/');
  });

  it('should display: ' + expectedMsg, function() {
    expect(element(by.css('h2')).getText()).toEqual(expectedMsg);
  });

});
