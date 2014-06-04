'use strict';

angular.module('app')
  .controller('WinnerModalCtrl', function ($scope, $modalInstance, winner) {
    $scope.winner = winner;

    $scope.ok = function () {
      $modalInstance.dismiss('Game over');
    };
  });
