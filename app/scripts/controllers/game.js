'use strict';

angular.module('snookerApp')
  .controller('GameCtrl', function ($scope, $location, Game) {

    $scope.scorePlayer = function(idx) {
      $location.path('/game/score/' + idx);
    };

    $scope.game = Game;
  });
