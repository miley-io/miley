'use strict';

var services = require('./_index.js');
var AppSettings = require('../config.js');

/**
 * @ngInject
 */
function Mission($q, $http) {

  var _default = {
    type: 'User',
    email: ""
  }

  return {
    reset: function() {
      return _default;
    },
    
    get: function(uname, mslug) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: AppSettings.apiPath + '/orgs/' + uname + '/missions/' + mslug,
        withCredentials: true,
        dataType: "json"
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(err, status) {
        deferred.reject(err, status);
      })
      return deferred.promise;
    },
    
    milestones: function(mission_id) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: AppSettings.apiPath + '/missions/' + mission_id + '/milestones',
        withCredentials: true,
        dataType: "json"
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(err, status) {
        deferred.reject(err, status);
      })
      return deferred.promise;      
    }
  }
}

services.service('Mission', Mission);
