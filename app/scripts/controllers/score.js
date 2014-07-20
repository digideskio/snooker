'use strict';

angular.module('app')
  .controller('ScoreCtrl', function ($scope, $routeParams, $modal, $location, Game) {
    Game.setCurrentPlayerId(parseInt($routeParams.playerId));
    $scope.player = Game.currentPlayer();


    $scope.isWinner = function() {
      return $scope.player.score === $scope.player.target;
    };

    $scope.goToNextPlayer = function() {
      $location.path('/game/score/' + Game.getNextPlayerId());
    };

    $scope.declareWinner = function() {
      Game.incrementTarget();
      Game.shufflePlayers();
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

    $scope.cannon = function() { Game.cannon(); };
    $scope.yellow = function() { Game.yellow(); };
    $scope.green  = function() { Game.green(); };
    $scope.blue   = function() { Game.blue(); };
    $scope.pink   = function() { Game.pink(); };
    $scope.black  = function() { Game.black(); };
    $scope.brown  = function() { Game.brown(); $scope.goToNextPlayer(); };
    $scope.foul   = function() { Game.foul(); $scope.goToNextPlayer(); };

  });
