'use strict';

var controllers = require('./_index');

/**
 * @ngInject
 */
function LandingCtrl() {
  this.title = "home";
}

controllers.controller('LandingCtrl', LandingCtrl);
