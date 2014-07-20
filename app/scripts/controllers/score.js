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

    $scope.cannon = function() { Game.cannon(); goToNextPlayerIfTheyFouled(); };
    $scope.yellow = function() { Game.yellow(); goToNextPlayerIfTheyFouled(); };
    $scope.green  = function() { Game.green();  goToNextPlayerIfTheyFouled(); };
    $scope.blue   = function() { Game.blue();   goToNextPlayerIfTheyFouled(); };
    $scope.pink   = function() { Game.pink();   goToNextPlayerIfTheyFouled(); };
    $scope.black  = function() { Game.black();  goToNextPlayerIfTheyFouled(); };
    $scope.brown  = function() { Game.brown();  goToNextPlayerIfTheyFouled(); };
    $scope.foul   = function() { Game.foul();   goToNextPlayerIfTheyFouled(); };

    function goToNextPlayerIfTheyFouled() {
      if ($scope.player.score === 0) {
        $scope.goToNextPlayer();
      }
    }

  });
