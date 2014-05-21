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
        templateUrl: 'views/home.html'
      })
      .when('/rules', {
        templateUrl: 'views/rules.html'
      })
      .when('/new', {
        templateUrl: 'views/new-game.html',
        controller: 'NewGameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
