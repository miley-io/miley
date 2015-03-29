'use strict';

var services = require('./_index.js');
var AppSettings = require('../config.js');

/**
 * @ngInject
 */
function Session($q, $http) {
  var _default = {
    logged: false,
    clearance: 1,
    email: ""
  };

  return {
    session: _default,

    new: function() {
      return _default;    
    },

    login: function(creds) {
      var deferred = $q.defer();      
      $http({
        method: 'POST',
        url: AppSettings.apiPath + '/auth/login?service=miley',
        data: creds,
        withCredentials: true,
        dataType: "json"
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(err, status) {
        deferred.reject(err, status);
      });
      return deferred.promise;
    },

    logout: function() {
      var deferred = $q.defer();      
      $http({
        method: 'GET',
        url: AppSettings.apiPath + '/auth/logout',
        withCredentials: true,
        dataType: "json"
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(err, status) {
        deferred.reject(err, status);
      });
      return deferred.promise;
    },

    get: function() {    
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: AppSettings.apiPath + '/session',
        withCredentials: true,
        dataType: "json"
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(err, status) {
        deferred.reject(err, status);
      });
      return deferred.promise;
    }
  }
}

services.service('Session', Session);
