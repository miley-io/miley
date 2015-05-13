'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Workspace', {
      url: '/',
      views: {
        'public': {
          templateUrl: 'partials/public/landing',
          controller: 'LandingCtrl as landing'
        },
        'private': {
          templateUrl: 'partials/private/workspace',
          controller: 'WorkspaceCtrl as workspace'
        }
      }
    })
    .state('Login', {
      url: '/login',
      views: {
        'public': {
          templateUrl: 'partials/public/auth/login',
          controller: 'LoginCtrl as auth'
        },
        'private': {
          controller: function($state) { $state.go('Home'); }
        }
      }
    })
    .state('Logout', {
      url: '/logout',
      views: {
        'private': {
          controller: 'LogoutCtrl'
        }
      }
    })
    .state('Signup', {
      url: '/signup',
      views: {
        'public': {
          templateUrl: 'partials/public/auth/signup',
          controller: 'SignupCtrl as signup'
        },
        'private': {
          controller: function($state) { $state.go('Home'); }
        }
      }
    })
    .state('Workspace.Mission', {
      url: ':uname/:mslug',
      views: {
        'public': {
          controller: function($state) { $state.go('Login'); }
        },
        'private': {
          templateUrl: 'partials/private/workspace',
          controller: 'WorkspaceCtrl as workspace'
        },        
        'workspace_window': {
          templateUrl: 'partials/private/mission/base',
          controller: 'MissionCtrl as mission',
          resolve: {
            _mission: function($state, $stateParams, Mission) {
              var uname = $stateParams.uname;
              var mslug = $stateParams.mslug;
              return Mission.get(uname, mslug).then(function(mission) {
                return mission;
              }, function() {
                $state.go('Login');
              })
            }
          }
        }
      }
    })
    .state('Workspace.Mission.Milestone', {
      url: '/M:msid',
      views: {
        'roadmap_window': {
          templateUrl: 'partials/private/mission/milestone',
          controller: 'MilestoneCtrl as milestone'
        }
      }
    })
    .state('Workspace.Mission.Milestone.Task', {
      url: '/T:tid',
      views: {
        'milestone_window': {
          templateUrl: 'partials/private/mission/task',
          controller: function($scope, $stateParams, Mission) {
            var mid = $scope.mission.id;
            var msid = $stateParams.msid;
            var tid = $stateParams.tid;
            console.log(mid);
            console.log(msid);
            console.log(tid);
            Mission.task(mid, msid, tid).then(function(task) {
              $scope.task = task;
            })
          }
        }
      }
    });
  
  $urlRouterProvider.otherwise('/');
}

module.exports = Routes;
