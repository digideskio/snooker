'use strict';

angular.module('app')
  .directive('addPlayer', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/_add-player.html',
      controller: function ($scope, $location, Game) {
        $scope.playerName = '';
        $scope.targetScore = Game.DEFAULT_TARGET;

        $scope.addPlayer = function() {
          Game.addPlayer($scope.playerName, $scope.targetScore);
          $scope.playerName = '';
          $scope.targetScore = Game.DEFAULT_TARGET;
        };

      }
    };
  });
