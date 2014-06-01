"use strict";angular.module("app",["ngCookies","ngResource","ngSanitize","ngRoute","ngAnimate"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html"}).when("/rules",{templateUrl:"views/rules.html"}).when("/new",{templateUrl:"views/new-game.html",controller:"NewGameCtrl"}).when("/game",{templateUrl:"views/game.html"}).when("/game/score/:playerId",{templateUrl:"views/score.html",controller:"ScoreCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("app").controller("NewGameCtrl",["$scope","$location","Game",function(a,b,c){a.addPlayer=function(){c.addPlayer(a.playerName,a.targetScore),a.playerName="",a.targetScore=31},a.removePlayer=function(a){c.removePlayer(a)},a.shufflePlayers=function(){c.shufflePlayers()},a.resetGame=function(){c.reset()},a.players=c.players,a.playerName="",a.targetScore=31}]),angular.module("app").controller("ScoreCtrl",["$scope","$routeParams","Game",function(a,b,c){var d=parseInt(b.playerId);c.setCurrentPlayerId(d),a.player=c.players[d],a.nextPlayerId=c.getNextPlayerId(),a.canon=function(){c.canon(d)},a.yellow=function(){c.yellow(d)},a.green=function(){c.green(d)},a.blue=function(){c.blue(d)},a.pink=function(){c.pink(d)},a.black=function(){c.black(d)},a.brown=function(){c.brown(d)},a.foul=function(){c.foul(d)}}]),angular.module("app").factory("Game",function(){var a=JSON.parse(localStorage.getItem("snookerGame")),b={players:a?a.players:[],currentPlayerId:a?a.currentPlayerId:0,addPlayer:function(a,b){this.players.push({name:a,target:b,score:0}),this.persist()},removePlayer:function(a){this.players.splice(a,1),this.persist()},setCurrentPlayerId:function(a){this.currentPlayerId=a,this.persist()},getNextPlayerId:function(){var a=this.currentPlayerId+1;return a<this.players.length?a:0},shufflePlayers:function(){for(var a=this.players.length-1;a>0;a--){var b=Math.floor(Math.random()*(a+1)),c=this.players[a];this.players[a]=this.players[b],this.players[b]=c}this.persist()},canon:function(a){this.addScoreToPlayer(2,a)},yellow:function(a){this.addScoreToPlayer(2,a)},green:function(a){this.addScoreToPlayer(3,a)},blue:function(a){this.addScoreToPlayer(5,a)},pink:function(a){this.addScoreToPlayer(6,a)},black:function(a){this.addScoreToPlayer(7,a)},brown:function(a){this.resetPlayerScore(a)},foul:function(a){this.resetPlayerScore(a)},addScoreToPlayer:function(a,b){this.players[b].score+=a,this.players[b].score>this.players[b].target&&this.resetPlayerScore(b),this.persist()},resetPlayerScore:function(a){this.players[a].score=0,this.persist()},reset:function(){this.currentPlayerId=0,angular.forEach(this.players,function(a){a.score=0})},persist:function(){localStorage.setItem("snookerGame",angular.toJson({updatedAt:(new Date).getTime(),players:this.players,currentPlayerId:this.currentPlayerId}))}};return b}),angular.module("app").directive("scoreboard",function(){return{restrict:"E",templateUrl:"scripts/directives/scoreboard.html",scope:{leadText:"=lead"},controller:["$scope","$location","Game",function(a,b,c){a.currentPlayerId=c.currentPlayerId,a.players=c.players,a.scorePlayer=function(a){b.path("/game/score/"+a)}}]}});