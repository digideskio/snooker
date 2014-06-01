'use strict';

angular.module('app')
  .directive('scoreboard', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/_scoreboard.html',
      scope: {
        leadText: '=lead'
      },
      controller: function ($scope, $location, Game) {
        $scope.currentPlayerId = Game.currentPlayerId;
        $scope.players = Game.players;

        $scope.scorePlayer = function(idx) {
          $location.path('/game/score/' + idx);
        };
      }
    };
  });
