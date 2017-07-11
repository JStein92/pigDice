var turn = 1;


function Player(name, turnScore, totalScore){
  this.name = name;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

Player.prototype.roll = function(){
  var dieValue = Math.floor(Math.random() * (6 - 0)) + 1;
  $('#rolls').append(dieValue + '<br>');
  return dieValue;
}

function changeTurn(score){
  if (turn ===1){
    $('#p1TurnHistory').prepend("<p>" + score + "</p>");
    turn=2;
    $("#playerTurn").css('background-color', '#e5b3a9')
  }else{
    turn=1;
      $('#p2TurnHistory').prepend("<p>" + score + "</p>");
      $("#playerTurn").css('background-color', '#c0d1ed')
  }
    $('#turn').text(turn);
}

$(function(){
  var player1 = new Player('player1Name', 0,0);
  var player2 = new Player ('player2Name', 0,0);
  $('#p1TotalScore').text(player1.totalScore);
  $('#p2TotalScore').text(player2.totalScore);
  $('#turn').text(turn);

  $('#roll').click(function(){
var roll = 0;
    if(turn === 1){
       roll = player1.roll()
      if (roll >1){
        player1.turnScore+=(roll);

      } else{
        player1.turnScore = 0;
        changeTurn(0);
        //switch players
      }
        $('#TurnScore').text(player1.turnScore);
    } else{ // TURN === 2
      roll = player2.roll();
      if (roll > 1){
        player2.turnScore+=(roll);

      }else{
        player2.turnScore = 0;
        changeTurn(0);


      }
$('#TurnScore').text(player2.turnScore);
    }
  });

  $('#switchPlayers').click(function(){
    if(turn===1){
      player1.totalScore += player1.turnScore;
          changeTurn(player1.turnScore);
      player1.turnScore = 0;
      $('#p1TotalScore').text(player1.totalScore);
      if (player1.totalScore >= 100) {
        alert("Player 1 Wins!")
      }
        $('#TurnScore').text(player1.turnScore);

    }  else{
      player2.totalScore += player2.turnScore;
        changeTurn(player2.turnScore);
      player2.turnScore = 0;
      $('#p2TotalScore').text(player2.totalScore);
      if (player2.totalScore >= 100) {
        alert("Player 2 Wins!")
      }
      $('#TurnScore').text(player2.turnScore);


    }


  });


});
