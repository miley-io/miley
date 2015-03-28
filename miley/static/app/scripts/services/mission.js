'use strict';

var services = require('./_index.js');
var AppSettings = require('../config.js');

/**
 * @ngInject
 */
function Mission($q, $http) {

  return {
    reset: function() {
      return {
        type: "User",
        email: ""
      }
    },
    
    get: function(mid) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: AppSettings.apiPath + '/missions/' + mid,
        withCredentials: true,
        dataType: "json"
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(data) {
        deferred.reject(err, status);
      })
      
      return deferred.promise;
    },
    
    milestones: function() {

    },

    tasks: function() {

    }
  }
}

services.service('Mission', Mission);
