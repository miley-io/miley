/*global angular */

'use strict';

describe('Unit: Settings', function() {

  var settings;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the directive
    angular.mock.inject(function(AppSettings) {
      settings = AppSettings;
    });
  });

  it('should exist', function() {
    expect(settings).toBeDefined();
  });

  it('should have an application name', function() {
    expect(settings.appTitle).toEqual('Example Application');
  });

});
