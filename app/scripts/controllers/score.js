'use strict';

angular.module('snookerApp')
  .controller('ScoreCtrl', function ($scope, $routeParams) {
    $scope.game = JSON.parse(localStorage.getItem('snookerGame'));
    $scope.player = $scope.game && $scope.game.players[$routeParams.playerId];

    $scope.addToScore = function(points) {
      $scope.player.score += points;
    };

    $scope.resetScore = function() {
      $scope.player.score = 0;
    };

  });
