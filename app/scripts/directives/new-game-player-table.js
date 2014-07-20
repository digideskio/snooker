'use strict';

angular.module('app')
  .directive('newGamePlayerTable', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/_new-game-player-table.html',
      controller: function ($scope, $location, Game) {
        $scope.players = Game.players;

        $scope.removePlayer = function(idx) {
          Game.removePlayer(idx);
        };

        $scope.editPlayer = function(idx) {
          var player = Game.removePlayer(idx);
          $scope.playerName = player.name;
          $scope.targetScore = player.target;
        };

        $scope.shufflePlayers = function() {
          Game.shufflePlayers();
        };

      }
    };
  });
