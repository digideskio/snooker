'use strict';

angular
  .module('snookerApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/new-game.html',
        controller: 'NewGameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
