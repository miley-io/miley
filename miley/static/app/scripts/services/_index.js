'use strict';

var angular = require('angular');

module.exports = angular.module('miley.services', []);

// Define the list of services here
require('./session.js');
require('./workspace.js');
require('./mission.js');
require('./milestone.js');
