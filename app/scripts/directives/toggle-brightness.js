'use strict';

angular.module('app')
  .directive('toggleBrightness', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/_toggle-brightness.html',
      controller: function ($scope) {
        $scope.toggleBrightness = function() {
          document.querySelector('html').classList.toggle('dark-theme');
        };
      }
    };
  });

