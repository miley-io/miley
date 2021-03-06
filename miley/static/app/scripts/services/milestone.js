'use strict';

var services = require('./_index.js');
var AppSettings = require('../config.js');

/**
 * @ngInject
 */
function Milestone($q, $http) {

  var _default = {
    type: 'User',
    email: ""
  }

  return {
    reset: function() {
      return _default;
    },

    get: function(mission_id, milestone_id) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: AppSettings.apiPath + '/missions/' + mission_id + '/milestones/' + milestone_id,
        withCredentials: true,
        dataType: "json"
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(err, status) {
        deferred.reject(err, status);
      })
      return deferred.promise;
    },
    
    tasks: function() {
      return []
    }
  }
}

services.service('Milestone', Milestone);
