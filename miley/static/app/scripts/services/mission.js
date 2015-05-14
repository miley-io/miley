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
    },

    milestone: function(mission_id, milestone_id) {
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

    task: function(mid, msid, tid) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: AppSettings.apiPath + '/missions/' + mid + '/milestones/' + msid + '/tasks/' + tid,
        withCredentials: true,
        dataType: "json"
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(err, status) {
        deferred.reject(err, status);
      })
      return deferred.promise;
    },

    step: function(mid, msid, tid, sid) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: AppSettings.apiPath + '/missions/' + mid + '/milestones/' + msid + '/tasks/' + tid + '/steps/' + sid,
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
