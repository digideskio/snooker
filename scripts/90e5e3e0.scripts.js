"use strict";angular.module("snookerApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html"}).when("/rules",{templateUrl:"views/rules.html"}).when("/new",{templateUrl:"views/new-game.html",controller:"NewGameCtrl"}).when("/game",{templateUrl:"views/game.html",controller:"GameCtrl"}).when("/game/score/:playerId",{templateUrl:"views/score.html",controller:"ScoreCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("snookerApp").controller("NewGameCtrl",["$scope","Game",function(a,b){a.addPlayer=function(){b.addPlayer(a.playerName,a.targetScore),a.playerName="",a.targetScore=31},a.removePlayer=function(a){b.removePlayer(a)},a.players=b.players,a.playerName="",a.targetScore=31}]),angular.module("snookerApp").controller("GameCtrl",["$scope","$location","Game",function(a,b,c){a.scorePlayer=function(a){b.path("/game/score/"+a)},a.game=c}]),angular.module("snookerApp").controller("ScoreCtrl",["$scope","$routeParams","Game",function(a,b,c){var d=b.playerId;a.game=c,a.player=c.players[d],a.canon=function(){c.canon(d)},a.yellow=function(){c.yellow(d)},a.green=function(){c.green(d)},a.blue=function(){c.blue(d)},a.pink=function(){c.pink(d)},a.black=function(){c.black(d)},a.brown=function(){c.brown(d)},a.foul=function(){c.foul(d)}}]),angular.module("snookerApp").factory("Game",function(){var a=JSON.parse(localStorage.getItem("snookerGame")),b={players:a?a.players:[],addPlayer:function(a,b){this.players.push({name:a,target:b,score:0}),this.persist()},removePlayer:function(a){this.players.splice(a,1),this.persist()},canon:function(a){this.addScoreToPlayer(2,a)},yellow:function(a){this.addScoreToPlayer(2,a)},green:function(a){this.addScoreToPlayer(3,a)},blue:function(a){this.addScoreToPlayer(5,a)},pink:function(a){this.addScoreToPlayer(6,a)},black:function(a){this.addScoreToPlayer(7,a)},brown:function(a){this.resetPlayerScore(a)},foul:function(a){this.resetPlayerScore(a)},addScoreToPlayer:function(a,b){this.players[b].score+=a,this.persist()},resetPlayerScore:function(a){this.players[a].score=0,this.persist()},persist:function(){localStorage.setItem("snookerGame",angular.toJson({updatedAt:(new Date).getTime(),players:this.players}))}};return b});