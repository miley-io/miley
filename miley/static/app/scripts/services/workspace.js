'use strict';

var services = require('./_index.js');
var AppSettings = require('../config.js');

/**
 * @ngInject
 */
function Workspace($q, $http) {
  var _default = [];

  return {
    workspace: _default,

    default: function() {
      return _default;
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
      }).error(function(err, status) {
        deferred.reject(err, status);
      });
      return deferred.promise;
    }
  }
}

services.service('Workspace', Workspace);
