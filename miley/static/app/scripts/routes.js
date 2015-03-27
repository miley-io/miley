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
    })
    .state('Login', {
      url: '/login',
      controller: 'LoginCtrl as login',
      templateUrl: 'partials/login'
    });

  $urlRouterProvider.otherwise('/');

}

module.exports = Routes;
