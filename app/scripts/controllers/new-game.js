'use strict';

angular.module('snookerApp')
  .controller('NewGameCtrl', function ($scope, $location) {

    // TODO: Extract a Game object/service

    $scope.addPlayer = function() {
      $scope.players.push({name: $scope.playerName, target: $scope.targetScore});
      $scope.saveGame();
      $scope.playerName = '';
      $scope.targetScore = 31;
    };

    $scope.removePlayer = function(idx) {
      $scope.players.splice(idx, 1);
      $scope.saveGame();
    };


    $scope.resetScores = function() {
      angular.forEach($scope.players, function(player) {
        player.score = 0;
      });
    };

    $scope.saveGame = function() {
      $scope.resetScores();
      localStorage.setItem('snookerGame', angular.toJson({
        players: $scope.players,
        timestamp: new Date().getTime()
      }));
    };

    $scope.startGame = function() {
      $location.path('/game/');
    };


    $scope.getPlayersFromGame = function() {
      var game = JSON.parse(localStorage.getItem('snookerGame'));
      return game && game.players;
    };

    $scope.players = $scope.getPlayersFromGame() || [];
    $scope.playerName = '';
    $scope.targetScore = 31;
  });
