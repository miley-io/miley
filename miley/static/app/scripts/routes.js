'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Home', {
      url: '/',
      templateUrl: 'partials/landing',
      controller: 'landing'
      /*
        views: {
          'landing': {
            templateUrl: 'partials/landing',
            controller: 'landing'
          },
          'workspace': {
            templateUrl: 'partials/workspace',
            controller: 'workspace'
          }
        }
      */
    })
    .state('Login', {
      url: '/login',
      controller: 'login',
      templateUrl: 'partials/auth/login'
    })
    .state('Signup', {
      url: '/signup',
      controller: 'signup',
      templateUrl: 'partials/auth/signup'
    })
    .state('Roadmap', {
      url: '/roadmap', // to become /:user/:mission
      controller: 'roadmap',
      templateUrl: 'partials/roadmap/base'
    });
  
  $urlRouterProvider.otherwise('/');
}

module.exports = Routes;
