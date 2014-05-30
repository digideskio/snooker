'use strict';

angular.module('app')
  .controller('GameCtrl', function ($scope, $location, Game) {
    $scope.currentPlayerId = Game.currentPlayerId;
    $scope.players = Game.players;

    $scope.scorePlayer = function(idx) {
      $location.path('/game/score/' + idx);
    };
  });
