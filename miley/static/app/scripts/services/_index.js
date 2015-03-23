'use strict';

var angular = require('angular');

module.exports = angular.module('app.services', []);

// Define the list of services here
require('./user.js');
require('./inviteRequest.js');
