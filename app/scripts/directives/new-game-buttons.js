'use strict';

angular.module('app')
  .directive('newGameButtons', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/_new-game-buttons.html',
      controller: function ($scope, $location, Game) {
        $scope.players = Game.players;

        $scope.resetScores = function() {
          Game.resetScores();
        };

        $scope.resetTargets = function() {
          Game.resetTargets();
        };
      }
    };
  });
