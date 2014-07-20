'use strict';

angular.module('app')
  .factory('Game', function (Player) {

    var game = {

      DEFAULT_TARGET: 31,
      DEFAULT_INCREMENT: 10,


      // TODO: This could perhaps just take whatever is stored in localstorage
      load: function() {
        var loadedGame = JSON.parse(localStorage.getItem('snookerGame'));

        this.currentPlayerId = loadedGame ? loadedGame.currentPlayerId : 0;
        this.players = [];

        var game = this;
        if (loadedGame) {
          angular.forEach(loadedGame.players, function(player) {
            game.players.push(
              new Player(
                player.name,
                player.target,
                { scoreEvents: player.scoreEvents }
              )
            );
          });
        }
      },

      persist: function() {
        localStorage.setItem('snookerGame', angular.toJson({
          updatedAt: new Date().getTime(),
          players: this.players,
          currentPlayerId: this.currentPlayerId,
        }));
      },



      currentPlayer: function() {
        return this.players[this.currentPlayerId];
      },

      addPlayer: function(name, target) {
        this.players.push(new Player(name, target));
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

      incrementTarget: function() {
        this.currentPlayer().target += this.DEFAULT_INCREMENT;
        this.persist();
      },

      resetScores: function() {
        this.currentPlayerId = 0;
        angular.forEach(this.players, function(player) {
          player.resetScore();
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




      // TODO: These last functions could probably be on the player object?
      cannon:  function() { this.addScoreToPlayer(2); },
      yellow:  function() { this.addScoreToPlayer(2); },
      green:   function() { this.addScoreToPlayer(3); },
      blue:    function() { this.addScoreToPlayer(5); },
      pink:    function() { this.addScoreToPlayer(6); },
      black:   function() { this.addScoreToPlayer(7); },
      brown:   function() { this.addFoulToPlayer(); },
      foul:    function() { this.addFoulToPlayer(); },

      addScoreToPlayer: function(points) {
        this.currentPlayer().addScore(points);
        this.persist();
      },

      addFoulToPlayer: function() {
        this.currentPlayer().foul();
        this.persist();
      }


    };

    game.load();
    return game;
  });
