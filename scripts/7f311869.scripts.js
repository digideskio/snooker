"use strict";angular.module("snookerApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html"}).when("/new",{templateUrl:"views/new-game.html",controller:"NewGameCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("snookerApp").controller("NewGameCtrl",["$scope",function(a){a.players=[],a.addPlayer=function(){a.players.push({name:a.playerName,target:a.targetScore}),a.playerName="",a.targetScore=""},a.removePlayer=function(b){a.players.splice(b,1)}}]);