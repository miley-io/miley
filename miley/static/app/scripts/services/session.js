'use strict';

var services = require('./_index.js');
var AppSettings = require('../config.js');

/**
 * @ngInject
 */
function Session($q, $http) {
  var _default = {
    username: null,
    logged: false,
    clearance: 1,
    email: ""
  };

  return {
    session: _default,

    new: function() {
      return _default;    
    },

    register: function(creds) {
      var deferred = $q.defer();      
      $http({
        method: 'POST',
        url: AppSettings.apiPath + '/auth/register?service=miley',
        data: creds,
        withCredentials: true
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(err, status) {
        deferred.reject(err, status);
      });
      return deferred.promise;
    },

    sendActivationEmail: function() {
      var deferred = $q.defer();      
      $http({
        method: 'POST',
        url: AppSettings.apiPath + '/auth/activate?service=miley',
        withCredentials: true
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(err, status) {
        deferred.reject(err, status);
      });
      return deferred.promise;
    },

    login: function(creds) {
      var deferred = $q.defer();      
      $http({
        method: 'POST',
        url: AppSettings.apiPath + '/auth/login?service=miley',
        data: creds,
        withCredentials: true
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
        crossDomain : true,
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
    },

    missions: function() {
      return [];
    }
  }
}

services.service('Session', Session);
