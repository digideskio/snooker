"use strict";angular.module("snookerApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html"}).when("/rules",{templateUrl:"views/rules.html"}).when("/new",{templateUrl:"views/new-game.html",controller:"NewGameCtrl"}).when("/game",{templateUrl:"views/game.html",controller:"GameCtrl"}).when("/game/score/:playerId",{templateUrl:"views/score.html",controller:"ScoreCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("snookerApp").controller("NewGameCtrl",["$scope","$location",function(a,b){a.addPlayer=function(){a.players.push({name:a.playerName,target:a.targetScore}),a.saveGame(),a.playerName="",a.targetScore=31},a.removePlayer=function(b){a.players.splice(b,1),a.saveGame()},a.resetScores=function(){angular.forEach(a.players,function(a){a.score=0})},a.saveGame=function(){a.resetScores(),localStorage.setItem("snookerGame",angular.toJson({players:a.players,timestamp:(new Date).getTime()}))},a.startGame=function(){b.path("/game/")},a.getPlayersFromGame=function(){var a=JSON.parse(localStorage.getItem("snookerGame"));return a&&a.players},a.players=a.getPlayersFromGame()||[],a.playerName="",a.targetScore=31}]),angular.module("snookerApp").controller("GameCtrl",["$scope","$location",function(a,b){a.scorePlayer=function(a){b.path("/game/score/"+a)},a.getPlayersFromGame=function(){var a=JSON.parse(localStorage.getItem("snookerGame"));return a&&a.players},a.game={players:a.getPlayersFromGame()}}]),angular.module("snookerApp").controller("ScoreCtrl",["$scope","$routeParams",function(a,b){a.game=JSON.parse(localStorage.getItem("snookerGame")),a.player=a.game&&a.game.players[b.playerId],a.addToScore=function(b){a.player.score+=b},a.resetScore=function(){a.player.score=0}}]);