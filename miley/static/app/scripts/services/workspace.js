'use strict';

var services = require('./_index.js');
var AppSettings = require('../config.js');

/**
 * @ngInject
 */
function Workspace($q, $http) {
  return {
    roadmaps: {},

    default: function() {
      return {
        roadmaps: {}
      }
    },
    
    missions: function(user) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: AppSettings.apiPath + '/missions',
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

services.service('Workspace', Workspace);
