'use strict';

angular.module('app')
  .factory('Player', function () {

    var Player = function(name, target, opts) {

      this.name = name;
      this.target = target;
      this.scoreEvents = opts && opts.scoreEvents ? opts.scoreEvents : [];


      this.addScore = function(points) {
        this.scoreEvents.push(points);
        if (this.isFoulScore()) {
          this.foul();
        }
      };

      this.getScore = function() {
        var total = 0;
        angular.forEach(this.scoreEvents, function(scoreEvent) {
          if (scoreEvent > 0) {
            total += scoreEvent;
          } else {
            total = 0;
          }
        });
        return total;
      };

      this.resetScore = function() {
        this.scoreEvents = [];
      };

      this.isFoulScore = function() {
        return (
          this.getScore() > this.target ||
          this.getScore() === (this.target - 1)
        );
      };

      this.foul = function() {
        this.scoreEvents.push(0);
      };

    };

    return Player;
  });
