'use strict';

var mileyServices = require('./_index.js');
var AppSettings = require('../config.js');

/**
 * @ngInject
 */
function User($q, $http) {

  return {
    reset: function() {
      return {
        type: "User",
        email: ""
      }
    },
    
    session: function() {    
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: AppSettings.apiPath + '/session'
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(data) {
        deferred.reject(err, status);
      })
      
      return deferred.promise;
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
      }).error(function(data) {
        deferred.reject(err, status);
      })
      
      return deferred.promise;
    }
  }
}

mileyServices.service('User', User);
