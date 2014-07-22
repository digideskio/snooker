angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/_add-player.html',
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-6\" style=\"padding-right: 5px;\">\n" +
    "    <label for=\"playerName\">Player Name</label>\n" +
    "    <input required autofocus ng-model=\"playerName\" placeholder=\"Player Name\" class=\"form-control\" id=\"playerName\">\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-4\" style=\"padding-left: 0px; padding-right: 5px;\">\n" +
    "    <label for=\"targetScore\">Target Score</label>\n" +
    "    <input required ng-model=\"targetScore\" type=\"number\" value=\"31\" step=\"10\" min=\"31\" class=\"form-control\" id=\"targetScore\">\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-2\" style=\"padding-left: 0px;\">\n" +
    "    <button ng-click=\"addPlayer()\" ng-disabled=\"newGame.$invalid\" class=\"no-label btn btn-block\">\n" +
    "      <span class=\"glyphicon glyphicon-plus\"></span>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/_new-game-buttons.html',
    "<div ng-show=\"players.length\" class=\"row top-buffer\">\n" +
    "  <div class=\"col-xs-12\">\n" +
    "    <a href=\"#/game\" ng-click=\"resetScores()\" class=\"visible-xs top-buffer btn btn-primary btn-block btn-lg\">Start Game</a>\n" +
    "    <a href=\"#/game/score/0\" ng-click=\"resetScores()\" class=\"hidden-xs top-buffer btn btn-primary btn-block btn-lg\">Start Game</a>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"players.length\" class=\"row\">\n" +
    "  <div class=\"col-xs-12\">\n" +
    "    <button ng-click=\"resetTargets()\" class=\"top-buffer btn btn-block btn-lg btn-default\">Reset</a>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-12\">\n" +
    "    <a href=\"#/\" class=\"top-buffer btn btn-block btn-lg\">Back</a>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/_new-game-player-table.html',
    "<table class=\"game-setup table\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th>Player</th>\n" +
    "      <th class=\"text-center\">Target Score</th>\n" +
    "      <th class=\"text-right\">\n" +
    "        <a ng-click=\"shufflePlayers()\">\n" +
    "          <span class=\"glyphicon glyphicon-random\"></span>\n" +
    "        </a>\n" +
    "      </th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-show=\"!players.length\">\n" +
    "      <td colspan=\"3\"><em>...No players yet</em></td>\n" +
    "    </tr>\n" +
    "    <tr ng-show=\"players.length\" ng-repeat=\"player in players\" class=\"animation\">\n" +
    "      <td>{{player.name}}</td>\n" +
    "      <td class=\"text-center\">{{player.target}}</td>\n" +
    "      <td>\n" +
    "        <button ng-click=\"removePlayer($index)\" type=\"button\" class=\"close\">\n" +
    "          <span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "        </button>\n" +
    "        <button ng-click=\"editPlayer($index)\" type=\"button\" class=\"close\">\n" +
    "          <span class=\"glyphicon glyphicon-pencil\"></span>\n" +
    "        </button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('views/_scoreboard.html',
    "<table class=\"scoreboard table top-buffer-lg\">\n" +
    "  <thead>\n" +
    "    <tr ng-show=\"leadText\">\n" +
    "      <th><p class=\"lead\">{{leadText}}</p></th>\n" +
    "      <th class=\"text-right\"> </th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-hide=\"players.length\"><td><small>...No players yet</small></td></tr>\n" +
    "    <tr ng-click=\"scorePlayer($index)\" ng-repeat=\"player in players\" ng-class=\"{active: $index==currentPlayerId}\">\n" +
    "      <td>{{player.name}}</td>\n" +
    "      <td class=\"text-center\">\n" +
    "        {{player.getScore()}}\n" +
    "        <small>/{{player.target}}</small>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('views/_winner-modal.html',
    "<!-- Modal -->\n" +
    "<div class=\"modal-header\">\n" +
    "  <h4 class=\"modal-title text-center\">Congratulations!</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <!-- http://openclipart.org/detail/120343/trophy-by-netalloy -->\n" +
    "  <img src=\"images/trophy.png\" class=\"img-responsive img-center animate-bounce\" alt=\"Winner!\"></img>\n" +
    "  <h1 class=\"text-center\">{{winner.name}} wins!</h1>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button ng-click=\"ok()\" class=\"btn btn-block btn-lg btn-primary\">Yay!</button>\n" +
    "</div>\n"
  );


  $templateCache.put('views/game.html',
    "<scoreboard lead=\"'Tap a player to score'\"></scoreboard> \n" +
    "\n" +
    "<div class=\"row top-buffer\">\n" +
    "  <div class=\"col-xs-12\">\n" +
    "    <a href=\"#/new\" class=\"no-label btn btn-primary btn-block btn-lg\">End Game</a>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/home.html',
    "<div class=\"row\">\n" +
    "\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div class=\"hero\">\n" +
    "      <!-- Image from: https://weheartit.com/entry/81283937 -->\n" +
    "      <img src=\"images/poo.png\" class=\"img-responsive center\" alt=\"Poo!\">\n" +
    "      <p class=\"text-center lead\">\n" +
    "        <em>...I hate this game</em>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"visible-xs visible-sm main-menu col-md-6\">\n" +
    "    <a href=\"#/new\" class=\"no-label btn btn-success btn-block btn-lg\">New Game</a>\n" +
    "    <a href=\"#/rules\" class=\"no-label btn btn-default btn-block btn-lg\">Rules</a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"hidden-xs hidden-sm main-menu col-md-6\">\n" +
    "    <a href=\"#/new\" class=\"no-label btn btn-success btn-square btn-lg\">New Game</a>\n" +
    "    <a href=\"#/rules\" class=\"no-label btn btn-default btn-square btn-lg\">Rules</a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('views/new-game.html',
    "<form novalidate name=\"newGame\">\n" +
    "  <div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <add-player></add-player>\n" +
    "      <div class=\"top-buffer-lg\"></div>\n" +
    "\n" +
    "      <!-- on devices >= md, show the buttons at the bottom of the first column -->\n" +
    "      <new-game-buttons class=\"visible-lg visible-md\"></new-game-buttons>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-7 col-md-offset-1\">\n" +
    "      <!-- Always show the table on md and lg devices -->\n" +
    "      <new-game-player-table class=\"hidden-lg hidden-md\" ng-show=\"players.length\"></new-game-player-table>\n" +
    "      <new-game-player-table class=\"hidden-xs hidden-sm\"></new-game-player-table>\n" +
    "\n" +
    "      <!-- on xs and sm devices, show the buttons at the bottom of the page -->\n" +
    "      <new-game-buttons class=\"visible-xs visible-sm\"></new-game-buttons>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</form>\n"
  );


  $templateCache.put('views/rules.html',
    "<div>\n" +
    "  <img src=\"images/table.png\" alt=\"setup diagram\" class=\"img-responsive img-center\" />\n" +
    "  <p class=\"text-center\">\n" +
    "    <em>Poo Snooker</em> is a great, yet frustrating game for any number of players.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "<h2>The Setup</h2>\n" +
    "\n" +
    "<p>Set up the table like snooker, but instead of having a triangle of red balls, just have the one and place it in the empty gap between the pink and blue balls.</p>\n" +
    "\n" +
    "<p>Anytime a ball goes into a pocket, it must return to its initial position. If this position is occupied, it may move up to the next available position. Anytime the cue ball goes into a pocket, it must return to the \"D\".</p>\n" +
    "\n" +
    "<h2>The Objective</h2>\n" +
    "\n" +
    "<p>The goal of the game is to reach exactly <strong>31</strong> points before anyone else. However you must not go over 31 as this is a foul and your score is reset to zero. As the minimum number of points you can score in one round is 2, this means that if you reach 30, that is also a foul and your score is reset to zero.</p>\n" +
    "\n" +
    "<h2>Scoring</h2>\n" +
    "\n" +
    "<p>There are 3 ways to score points:</p>\n" +
    "\n" +
    "<ol>\n" +
    "<li><strong>Cannon</strong> - Where the cue ball hits an object ball and continues on to hit a different ball</li>\n" +
    "<li><strong>Get a ball in</strong> - When an object ball goes into one of its designated pockets</li>\n" +
    "<li><strong>Go in off</strong> - When the cue ball rebounds off an object ball and goes into the rebounded balls pocket</li>\n" +
    "</ol>\n" +
    "\n" +
    "\n" +
    "<p>Each ball has an associated point value:</p>\n" +
    "\n" +
    "<ul>\n" +
    "<li>A cannon = <strong>2 points</strong></li>\n" +
    "<li>Yellow ball = <strong>2 points</strong></li>\n" +
    "<li>Green ball = <strong>3 points</strong></li>\n" +
    "<li>Blue ball = <strong>5 points</strong></li>\n" +
    "<li>Pink ball = <strong>6 points</strong></li>\n" +
    "<li>Black ball = <strong>7 points</strong></li>\n" +
    "</ul>\n" +
    "\n" +
    "\n" +
    "<p>Only certain balls can score points using certain pockets:</p>\n" +
    "\n" +
    "<ul>\n" +
    "<li><strong>The yellow and green balls</strong> may only go in (or in off) either of the corner pockets at the bottom of the table</li>\n" +
    "<li><strong>The blue ball</strong> may only go in (or in off) the side pockets</li>\n" +
    "<li><strong>The black ball</strong> may only go in (or in off) either of the corner pockets at the top of the table</li>\n" +
    "<li><strong>The pink ball</strong> may go in (or in off) any pocket</li>\n" +
    "<li><strong>The red ball</strong> must not go into any pocket, this is a foul and your score is reset to zero</li>\n" +
    "</ul>\n" +
    "\n" +
    "\n" +
    "<h2>Getting \"Off the mark\"</h2>\n" +
    "\n" +
    "<p>While your score is on zero, you can not begin to score any points until you successfully <strong>cannon off the pink</strong> - this will result in 2 points and you may continue to score using any other method after that.</p>\n" +
    "\n" +
    "<h2>Special balls</h2>\n" +
    "\n" +
    "<p><strong>The brown ball</strong> (<em>aka the \"poo ball\"</em>) must not be touched at all. If this ball is moved or touched by any other ball, this is a foul - your score is reset to zero.</p>\n" +
    "\n" +
    "<p><strong>The pink ball</strong> must result in a score. For example, hitting the cue ball into the pink ball and not scoring any points is a foul - your score is reset to zero. Hitting the cue ball into the pink ball, then the cue ball continues on to hit the green ball is a valid cannon - this is worth 2 points. Hitting the pink ball into any pocket (or going in off) is worth 6 points.</p>\n" +
    "\n" +
    "<p><strong>The red ball</strong> can only be used to cannon onto. For example, hitting the cue ball into the green ball, then the cue ball continues on to hit the red ball is a valid cannon - this is worth 2 points. Hitting the cue ball into the red ball, then the cue ball continues on to hit the green ball is a foul - your score is reset to zero.</p>\n" +
    "\n" +
    "<h2>Lifeline</h2>\n" +
    "\n" +
    "<p>If you make the cue ball hit all four sides of the table without touching any other balls, you do not score but you are allowed to take another turn.</p>\n" +
    "\n" +
    "<h2>Winners</h2>\n" +
    "\n" +
    "<p>If you win and you go on to play another game, your target score is incremented by 10 points. For example, in the first game you reach exactly 31, in the next game you must reach 41 while the others players that have not won only need to get to 31.</p>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-12\">\n" +
    "    <a href=\"#/\" class=\"no-label btn btn-block btn-lg\">Back</a>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/score.html',
    "<div class=\"row\">\n" +
    "  <div class=\"hidden-xs col-sm-4\">\n" +
    "    <scoreboard></scoreboard>\n" +
    "  </div>\n" +
    "  <div class=\"score-panel col-sm-8\">\n" +
    "    <h1 class=\"no-top-buffer\">\n" +
    "      {{player.name}}: {{player.getScore()}}/{{player.target}}\n" +
    "      <button ng-click=\"undo()\" ng-show=\"player.scoreEvents.length\" type=\"button\" class=\"btn btn-default btn pull-right\">\n" +
    "        <span class=\"glyphicon glyphicon-step-backward\"></span> Undo\n" +
    "      </button>\n" +
    "    </h1>\n" +
    "\n" +
    "    <div class=\"row top-buffer-lg\">\n" +
    "      <div class=\"col-xs-3\">\n" +
    "        <button ng-click=\"cannon()\" class=\"cannon btn btn-large btn-default btn-round\">\n" +
    "          <!--\n" +
    "            Downloaded from: https://www.iconfinder.com/icons/174695/cannon_icon#size=128\n" +
    "            Created by: Visual Pharm - http://icons8.com\n" +
    "          -->\n" +
    "          <img src=\"images/cannon-icon.png\" class=\"img-responsive\" alt=\"Cannon (2)\"></img>\n" +
    "        </button>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-3\">\n" +
    "        <button ng-click=\"yellow()\" class=\"yellow btn btn-large btn-default btn-round\">2</button>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-3\">\n" +
    "        <button ng-click=\"green()\" class=\"green btn btn-large btn-default btn-round\">3</button>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-3\">\n" +
    "        <button ng-click=\"blue()\" class=\"blue btn btn-large btn-default btn-round\">5</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row top-buffer\">\n" +
    "      <div class=\"col-xs-3\">\n" +
    "        <button ng-click=\"pink()\" class=\"pink btn btn-large btn-default btn-round\">6</button>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-3\">\n" +
    "        <button ng-click=\"black()\" class=\"black btn btn-large btn-default btn-round\">7</button>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-3\">\n" +
    "        <button ng-click=\"brown()\" class=\"poo btn btn-large btn-default btn-round\">\n" +
    "          <!--\n" +
    "            Icon made by Freepik from: http://www.flaticon.com/free-icon/pet-poop-shape_42104\n" +
    "          -->\n" +
    "          <img src=\"images/poo-icon.png\" class=\"img-responsive\" alt=\"Poo (0)\"></img>\n" +
    "        </button>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-3\">\n" +
    "        <button ng-click=\"foul()\" class=\"foul btn btn-large btn-default btn-round\">\n" +
    "          <span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row top-buffer\">\n" +
    "      <div ng-show=\"isWinner()\" class=\"col-xs-12\">\n" +
    "        <button ng-click=\"declareWinner()\" class=\"top-buffer btn btn-success btn-block btn-lg\">Declare winner!</button>\n" +
    "      </div>\n" +
    "      <div ng-hide=\"isWinner()\" class=\"col-xs-12\">\n" +
    "        <button ng-click=\"goToNextPlayer()\" class=\"top-buffer btn btn-primary btn-block btn-lg\">Next Player</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-12\">\n" +
    "        <a href=\"#/game\" class=\"visible-xs top-buffer btn btn-block btn-lg\">Back</a>\n" +
    "        <a href=\"#/new\" class=\"hidden-xs top-buffer btn btn-block btn-lg\">End Game</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
