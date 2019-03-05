//business logic
var player1 = "";
var player2 = "";

var throwdice = function() {
  return Math.floor(Math.random() * 6) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.currentscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}



// check for 100
Player.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}


// hold
Player.prototype.hold = function() {
  this.totalscore += this.currentscore;
  this.currentscore = 0;
  // this.changeturn();
  alert(this.playerName + ", your turn is over, pass the mouse!");
}

// checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.currentscore = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
    // this.changeturn();
  } else {
    this.tempscore += this.roll;
  }
}


Player.prototype.newGame = function() {
  this.roll = 0;
  this.currentscore = 0;
  this.totalscore = 0;
  this.playerName = "";
}

var clearValues = function() {
  $(".challenger1Name").val("");
  $(".challenger2Name").val("");
}

// User Interface
$(document).ready(function() {

  $("button#start").click(function(event) {
    player1 = new Player(true);
    player2 = new Player(false);
    $(".back-page").show();
    $(".front-page").hide();

    var player1Name = $(".challenger1").val();
    $("#challenger1").text(player1Name);

    var player2Name = $(".challenger2").val();
    $("#challenger2").text(player2Name);

    challenger1.playerName = challenger1Name;
    challenger2.playerName = challenger2Name;

  });
  $("button#new-game").click(function(event) {
    $(".back-page").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#current-total-1").empty();
    $("#total-score-1").empty();
    $("#roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#roll-2").empty();

    $(".front-page").show();
  });

  $("button#player1-roll").click(function(event) {
    player1.roll = throwdice();
    $("#roll-1").text(player1.roll);
    player1.rollone();
    $("#current-total-1").text(player1.currentscore);
  });

  $("button#player2-roll").click(function(event) {
    player2.roll = throwdice();
    $("#roll-2").text(player2.roll);
    player2.rollone();
    $("#current-total-2").text(player2.currentscore);
  });

  $("button#player1-hold").click(function(event) {
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#current-total-1").empty();
    $("#roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event) {
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#current-total-2").empty();
    $("#roll-2").empty();
    player2.winnerCheck();
  });

});
