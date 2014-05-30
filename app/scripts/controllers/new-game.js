'use strict';

angular.module('app')
  .controller('NewGameCtrl', function ($scope, $location, Game) {

    $scope.addPlayer = function() {
      Game.addPlayer($scope.playerName, $scope.targetScore);
      $scope.playerName = '';
      $scope.targetScore = 31;
    };

    $scope.removePlayer = function(idx) {
      Game.removePlayer(idx);
    };

    $scope.shufflePlayers = function() {
      Game.shufflePlayers();
    };

    $scope.startGame = function() {
      Game.reset();
      $location.path('/game');
    };


    $scope.players = Game.players;
    $scope.playerName = '';
    $scope.targetScore = 31;
  });
