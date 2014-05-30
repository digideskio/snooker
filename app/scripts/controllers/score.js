'use strict';

angular.module('app')
  .controller('ScoreCtrl', function ($scope, $routeParams, Game) {
    var playerId = parseInt($routeParams.playerId);
    Game.setCurrentPlayerId(playerId);
    $scope.player = Game.players[playerId];
    $scope.nextPlayerId = Game.getNextPlayerId();

    $scope.canon  = function() { Game.canon(playerId); };
    $scope.yellow = function() { Game.yellow(playerId); };
    $scope.green  = function() { Game.green(playerId); };
    $scope.blue   = function() { Game.blue(playerId); };
    $scope.pink   = function() { Game.pink(playerId); };
    $scope.black  = function() { Game.black(playerId); };
    $scope.brown  = function() { Game.brown(playerId); };
    $scope.foul   = function() { Game.foul(playerId); };
  });
