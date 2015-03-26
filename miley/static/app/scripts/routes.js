'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Landing', {
      url: '/',
      controller: 'LandingCtrl as landing',
      templateUrl: 'partials/landing'
    });

  $urlRouterProvider.otherwise('/');

}

module.exports = Routes;
