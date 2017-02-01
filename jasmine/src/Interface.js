$(document).ready(function(){
  var game;

  $('#deal').click(function (){
      game = new Game();
      game.deal();
      $(".player").text("? ? ? ? ? ? ? ");
    });

  $('#p1btn').click(function (){
    document.getElementById('p1hand').innerHTML = game.showHand(game.playerOne);
    });

  $('#p2btn').click(function (){
    document.getElementById('p2hand').innerHTML = game.showHand(game.playerTwo);
    });

  $('#p3btn').click(function (){
    document.getElementById('p3hand').innerHTML = game.showHand(game.playerThree);
    });

  $('#p4btn').click(function (){
    document.getElementById('p4hand').innerHTML = game.showHand(game.playerFour);
    });

 });
