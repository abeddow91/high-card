function Game() {
  this.deck = ["2h","3h","4h","5h","6h","7h","8h","9h","10h","Jh","Qh","Kh","Ah",
               "2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","Ac",
               "2s","3s","4s","5s","6s","7s","8s","9s","10s","Js","Qs","Ks","As",
               "2d","3d","4d","5d","6d","7d","8d","9d","10d","Jd","Qd","Kd","Ad",];
  this.playerOne = [];
  this.playerTwo = [];
  this.playerThree = [];
  this.playerFour = [];
}

Game.prototype.shuffle = function (array) {
  var i = 0
      j = 0
      temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

Game.prototype.dealCard = function (deck, player) {
  var dealtCard = deck.pop();
  player.push(dealtCard);
};
