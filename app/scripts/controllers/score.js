'use strict';

angular.module('app')
  .controller('ScoreCtrl', function ($scope, $routeParams, $modal, $location, Game) {
    var playerId = parseInt($routeParams.playerId);
    var player = Game.players[playerId];
    $scope.player = player;

    Game.setCurrentPlayerId(playerId);


    $scope.isWinner = function() {
      return player.score === player.target;
    };

    $scope.goToNextPlayer = function() {
      $location.path('/game/score/' + Game.getNextPlayerId());
    };

    $scope.declareWinner = function() {
      Game.incrementTarget(playerId);
      $location.path('/new');
      $modal.open({
        templateUrl: 'views/_winner-modal.html',
        controller: 'WinnerModalCtrl',
        resolve: {
          winner: function() {
            return $scope.player;
          }
        }
      });
    };

    $scope.cannon  = function() { Game.cannon(playerId); };
    $scope.yellow = function() { Game.yellow(playerId); };
    $scope.green  = function() { Game.green(playerId); };
    $scope.blue   = function() { Game.blue(playerId); };
    $scope.pink   = function() { Game.pink(playerId); };
    $scope.black  = function() { Game.black(playerId); };
    $scope.brown  = function() { Game.brown(playerId); $scope.goToNextPlayer(); };
    $scope.foul   = function() { Game.foul(playerId); $scope.goToNextPlayer(); };

  });
