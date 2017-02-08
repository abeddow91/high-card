$(document).ready(function(){
    var game = new Game();

  $('#deal').click(function (){
      game.deal();
      $('#showallbtn').removeClass("hidden");
      $(".winner").text("");
      $(".player").text("? ? ? ? ? ? ? ");
    });

    $('#submit').click(function (){
      $('.game').removeClass("hidden");
      $('#deal').removeClass("hidden");
      $('.playernumber').addClass("hidden");
      game.totalPlayers = document.getElementById("playerNumber").value;
      game.setUpPlayers();
      });

  $('#showallbtn').click(function (){
    $(".winner").text("Player " + game.winner + " Wins !");
    document.getElementById('p1hand').innerHTML = game.showHand(game.players[0]);
    document.getElementById('p2hand').innerHTML = game.showHand(game.players[1]);
    document.getElementById('p3hand').innerHTML = game.showHand(game.players[2]);
    document.getElementById('p4hand').innerHTML = game.showHand(game.players[3]);
    });


 });
