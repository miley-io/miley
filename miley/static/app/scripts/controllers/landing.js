'use strict';

var mileyControllers = require('./_index');

/**
 * @ngInject
 */

function LandingCtrl($stateParams, $timeout) {

  // ViewModel
  var landing = this;

  landing.title = "home";

}

mileyControllers.controller('LandingCtrl', LandingCtrl);
