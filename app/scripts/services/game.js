'use strict';

angular.module('app')
  .factory('Game', function () {

    var loadedGame = JSON.parse(localStorage.getItem('snookerGame'));
    var game = {

      DEFAULT_TARGET: 31,
      DEFAULT_INCREMENT: 10,

      players: loadedGame ? loadedGame.players : [],
      currentPlayerId: loadedGame ? loadedGame.currentPlayerId : 0,

      addPlayer: function(name, target) {
        this.players.push({name: name, target: target, score: 0});
        this.persist();
      },

      removePlayer: function(idx) {
        var player = this.players.splice(idx, 1)[0];
        this.persist();
        return player;
      },

      setCurrentPlayerId: function(playerId) {
        this.currentPlayerId = playerId;
        this.persist();
      },

      getNextPlayerId: function() {
        var nextPlayerId = this.currentPlayerId + 1;
        return (nextPlayerId < this.players.length) ? nextPlayerId : 0;
      },

      shufflePlayers: function() {
        for (var i = this.players.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = this.players[i];
          this.players[i] = this.players[j];
          this.players[j] = temp;
        }
        this.persist();
      },

      incrementTarget: function(playerId) {
        this.players[playerId].target += this.DEFAULT_INCREMENT;
        this.persist();
      },

      // TODO: These could probably be on the player object?
      cannon:  function(idx) { this.addScoreToPlayer(2, idx); },
      yellow:  function(idx) { this.addScoreToPlayer(2, idx); },
      green:   function(idx) { this.addScoreToPlayer(3, idx); },
      blue:    function(idx) { this.addScoreToPlayer(5, idx); },
      pink:    function(idx) { this.addScoreToPlayer(6, idx); },
      black:   function(idx) { this.addScoreToPlayer(7, idx); },
      brown:   function(idx) { this.resetPlayerScore(idx); },
      foul:    function(idx) { this.resetPlayerScore(idx); },

      addScoreToPlayer: function(points, playerId) {
        this.players[playerId].score += points;
        if (this.players[playerId].score > this.players[playerId].target) {
          this.resetPlayerScore(playerId);
        }
        this.persist();
      },

      resetPlayerScore: function(playerId) {
        this.players[playerId].score = 0;
        this.persist();
      },

      resetScores: function() {
        this.currentPlayerId = 0;
        angular.forEach(this.players, function(player) {
          player.score = 0;
        });
        this.persist();
      },

      resetTargets: function() {
        var target = this.DEFAULT_TARGET;
        this.currentPlayerId = 0;
        angular.forEach(this.players, function(player) {
          player.target = target;
        });
        this.persist();
      },

      persist: function() {
        localStorage.setItem('snookerGame', angular.toJson({
          updatedAt: new Date().getTime(),
          players: this.players,
          currentPlayerId: this.currentPlayerId,
        }));
      }
    };

    return game;
  });
