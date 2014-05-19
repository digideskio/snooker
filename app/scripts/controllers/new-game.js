'use strict';

angular.module('snookerApp')
  .controller('NewGameCtrl', function ($scope) {
    $scope.players = [];

    $scope.addPlayer = function() {
      $scope.players.push({name: $scope.playerName, target: $scope.targetScore});
      $scope.playerName = "";
      $scope.targetScore = "";
    };

    $scope.removePlayer = function(idx) {
      $scope.players.splice(idx, 1);
    };
  });
