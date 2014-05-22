'use strict';

angular.module('snookerApp')
  .controller('GameCtrl', function ($scope, $location) {

    $scope.scorePlayer = function(idx) {
      $location.path('/game/score/' + idx);
    };


    // TODO: De-dup: This is duplicate code from new-game
    $scope.getPlayersFromGame = function() {
      var game = JSON.parse(localStorage.getItem('snookerGame'));
      return game && game.players;
    };


    $scope.game = { players: $scope.getPlayersFromGame() };
  });
