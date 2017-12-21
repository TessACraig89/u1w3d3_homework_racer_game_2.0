/// Visualize JS is saying that $ in the GetPlayers is not defined
function GetPlayers() {
  this.player1   = $("#player1");
  this.player2   = $("#player2");
}
let myGetPlayers = new GetPlayers();


function PlayerPos() {
  this.player1Pos = 0;
  this.player2Pos = 0;
}
let myPlayerPos   = new PlayerPos();


function FinishLine() {
  this.finishLinePos = window.screen.width - 150;
  this.setAttribute  = function() {
    $("#finishLine").setAttribute("style", "left: " + this.finishLinePos + "px");
  }
}
let myFinishLine     = new FinishLine();




function AnnounceWinner() {
    this.message = function() {
      if (this.player1Pos >= this.finishLinePos) {
      return "Player 1 is the winner!";
    } else if (this.player2Pos >= this.finishLinePos) {
      return "Player 2 is the winner!";
    }
  };
}



let myAnnounceWinner = new AnnounceWinner();

function MovePlayers() {
  this.addEvent = function() {
    document.keypress(function() {
      if (event.key === 'z') {
        this.player1Pos = this.player1Pos + 15;
        this.player1.setAttribute("style", "position: relative; left: " + this.player1Pos + "px");
        AnnounceWinner();
      } else if (event.key === 'p') {
        this.player2Pos = this.player2Pos + 15;
        this.player2.setAttribute("style", "position: relative; left: " + this.player2Pos + "px");
        AnnounceWinner();
      }
    });
  }
}

let myMovePlayers = new MovePlayers();
MovePlayers();
