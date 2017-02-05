$(document).ready(function(){
  var game;

  $('#deal').click(function (){
      game = new Game();
      game.deal();
      $(".winner").text("");
      $(".player").text("? ? ? ? ? ? ? ");
    });

  $('#p1btn').click(function (){
    document.getElementById('p1hand').innerHTML = game.showHand(game.players[0]);
    });

  $('#p2btn').click(function (){
    document.getElementById('p2hand').innerHTML = game.showHand(game.players[1]);
    });

  $('#p3btn').click(function (){
    document.getElementById('p3hand').innerHTML = game.showHand(game.players[2]);
    });

  $('#p4btn').click(function (){
    document.getElementById('p4hand').innerHTML = game.showHand(game.players[3]);
    });

  $('#showallbtn').click(function (){
    document.getElementById('p1hand').innerHTML = game.showHand(game.players[0]);
    document.getElementById('p2hand').innerHTML = game.showHand(game.players[1]);
    document.getElementById('p3hand').innerHTML = game.showHand(game.players[2]);
    document.getElementById('p4hand').innerHTML = game.showHand(game.players[3]);
    $(".winner").text(game.winner + " Wins !");
    });


 });
