'use strict';    

var angular = require('angular');

module.exports = angular.module('miley.controllers', []);

// Define the list of controllers here
require('./landing.js');
require('./login.js');
require('./logout.js');
require('./signup.js');
require('./workspace.js');
require('./mission.js');
require('./milestone.js');
