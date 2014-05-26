'use strict';

angular.module('snookerApp')
  .factory('Game', function () {

    var loadedGame = JSON.parse(localStorage.getItem('snookerGame'));
    var game = {
      players: loadedGame ? loadedGame.players : [],

      addPlayer: function(name, target) {
        this.players.push({name: name, target: target, score: 0});
        this.persist();
      },

      removePlayer: function(idx) {
        this.players.splice(idx, 1);
        this.persist();
      },

      // TODO: These should probably be on the player object
      canon:  function(idx) { this.addScoreToPlayer(2, idx); },
      yellow: function(idx) { this.addScoreToPlayer(2, idx); },
      green:  function(idx) { this.addScoreToPlayer(3, idx); },
      blue:   function(idx) { this.addScoreToPlayer(5, idx); },
      pink:   function(idx) { this.addScoreToPlayer(6, idx); },
      black:  function(idx) { this.addScoreToPlayer(7, idx); },
      brown:  function(idx) { this.resetPlayerScore(idx); },
      foul:   function(idx) { this.resetPlayerScore(idx); },

      addScoreToPlayer: function(points, playerId) {
        this.players[playerId].score += points;
        this.persist();
      },

      resetPlayerScore: function(playerId) {
        this.players[playerId].score = 0;
        this.persist();
      },

      persist: function() {
        localStorage.setItem('snookerGame', angular.toJson({
          updatedAt: new Date().getTime(),
          players: this.players,
        }));
      }
    };

    return game;
  });
