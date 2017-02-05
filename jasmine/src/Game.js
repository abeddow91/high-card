function Game() {
  // this.deck = ["2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h",
  //              "2c","3c","4c","5c","6c","7c","8c","9c","10c","11c","12c","13c","14c",
  //              "2s","3s","4s","5s","6s","7s","8s","9s","10s","11s","12s","13s","14s",
  //              "2d","3d","4d","5d","6d","7d","8d","9d","10d","11d","12d","13d","14d",];
  this.deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
              25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,
              47,48,49,50,51,52];
  this.playerOne = [];
  this.playerTwo = [];
  this.playerThree = [];
  this.playerFour = [];
}

Game.prototype.shuffle = function (array) {
  var i = 0;
      j = 0;
      temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

Game.prototype.dealCard = function (deck, player) {
  var dealtCard = deck.pop();
  player.push(dealtCard);
};

Game.prototype.dealMultipleHands = function () {
for (i=0; i < 7; i ++) {
  this.dealCard(this.deck, this.playerOne);
  this.dealCard(this.deck, this.playerTwo);
  this.dealCard(this.deck, this.playerThree);
  this.dealCard(this.deck, this.playerFour);
  }
};

Game.prototype.deal = function () {
  this.shuffle(this.deck);
  this.dealMultipleHands();
};

Game.prototype.showHand = function (hand) {
  var stringHand =  hand.toString();
  return stringHand.replace(/,/g, ", ");

};

Game.prototype.naturalCardSort = function (hand) {
  hand.sort(function (a,b) {
    return a - b;
  });
  hand.reverse();
};





//
// console.log("papa".replace("11", "J"));
// console.log("papa".replace("12", "Q"));
// console.log("papa".replace("13", "K"));
// console.log("papa".replace("14", "A"));
