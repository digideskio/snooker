'use strict';

angular.module('app')
  .controller('NewGameCtrl', function ($scope, Game) {

    $scope.addPlayer = function() {
      Game.addPlayer($scope.playerName, $scope.targetScore);
      $scope.playerName = '';
      $scope.targetScore = 31;
    };

    $scope.removePlayer = function(idx) {
      Game.removePlayer(idx);
    };


    $scope.players = Game.players;
    $scope.playerName = '';
    $scope.targetScore = 31;
  });