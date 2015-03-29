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
    }

  }
}

services.service('Mission', Mission);
