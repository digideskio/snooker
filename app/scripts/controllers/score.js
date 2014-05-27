'use strict';

angular.module('app')
  .controller('ScoreCtrl', function ($scope, $routeParams, Game) {
    var playerId = $routeParams.playerId;
    $scope.game = Game;
    $scope.player = Game.players[playerId];

    $scope.canon  = function() { Game.canon(playerId); };
    $scope.yellow = function() { Game.yellow(playerId); };
    $scope.green  = function() { Game.green(playerId); };
    $scope.blue   = function() { Game.blue(playerId); };
    $scope.pink   = function() { Game.pink(playerId); };
    $scope.black  = function() { Game.black(playerId); };
    $scope.brown  = function() { Game.brown(playerId); };
    $scope.foul   = function() { Game.foul(playerId); };

  });
