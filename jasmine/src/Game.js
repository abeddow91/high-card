function Game() {
  // this.deck = ["2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h",
  //              "2c","3c","4c","5c","6c","7c","8c","9c","10c","11c","12c","13c","14c",
  //              "2s","3s","4s","5s","6s","7s","8s","9s","10s","11s","12s","13s","14s",
  //              "2d","3d","4d","5d","6d","7d","8d","9d","10d","11d","12d","13d","14d",];
  this.deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
              25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,
              47,48,49,50,51,52];
  this.cards = {
    1: "2 ♥︎",
    2: "2 ♣︎",
    3: "2 ♠︎",
    4: "2 ♦︎",
    5: "3 ♥︎",
    6: "3 ♣︎",
    7: "3 ♠︎",
    8: "3 ♦︎",
    9: "4 ♥︎",
    10: "4 ♣︎",
    11: "4 ♠︎",
    12: "4 ♦︎",
    13: "5 ♥︎",
    14: "5 ♣︎",
    15: "5 ♠︎",
    16: "5 ♦︎",
    17: "6 ♥︎",
    18: "6 ♣︎",
    19: "6 ♠︎",
    20: "6 ♦︎",
    21: "7 ♥︎",
    22: "7 ♣︎",
    23: "7 ♠︎",
    24: "7 ♦︎",
    25: "8 ♥︎",
    26: "8 ♣︎",
    27: "8 ♠︎",
    28: "8 ♦︎",
    29: "9 ♥︎",
    30: "9 ♣︎",
    31: "9 ♠︎",
    32: "9 ♦︎",
    33: "10 ♥︎",
    34: "10 ♣︎",
    35: "10 ♠︎",
    36: "10 ♦︎",
    37: "J ♥︎",
    38: "J ♣︎",
    39: "J ♠︎",
    40: "J ♦︎",
    41: "Q ♥︎",
    42: "Q ♣︎",
    43: "Q ♠︎",
    44: "Q ♦︎",
    45: "K ♥︎",
    46: "K ♣︎",
    47: "K ♠︎",
    48: "K ♦︎",
    49: "A ♥︎",
    50: "A ♣︎",
    51: "A ♠︎",
    52: "A ♦︎"};
  this.playerOne = [];
  this.playerTwo = [];
  this.playerThree = [];
  this.playerFour = [];
  this.winner = "";
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
  this.sortHands();
  this.determineWinner();
  this.convertAllCards();
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

Game.prototype.sortHands = function () {
  this.naturalCardSort(this.playerOne);
  this.naturalCardSort(this.playerTwo);
  this.naturalCardSort(this.playerThree);
  this.naturalCardSort(this.playerFour);
};

Game.prototype.determineWinner = function() {
  if (this.playerOne[0] > this.playerTwo[0] && this.playerOne[0] > this.playerThree[0] && this.playerFour[0]) {
    this.winner = "Player One";
  } else if (this.playerTwo[0] > this.playerThree[0] && this.playerTwo[0] > this.playerFour[0]) {
    this.winner = "Player Two";
  } else if (this.playerThree[0] > this.playerFour[0]) {
    this.winner = "Player Three";
  } else {
    this.winner = "Player Four";
  }
};

Game.prototype.convertHand = function (hand) {
  for(var i=0; i < hand.length; i++) {
    hand[i]= this.cards[hand[i]];
  }
};

Game.prototype.convertAllCards = function () {
  this.convertHand(this.playerOne);
  this.convertHand(this.playerTwo);
  this.convertHand(this.playerThree);
  this.convertHand(this.playerFour);
};

//
// console.log("papa".replace("11", "J"));
// console.log("papa".replace("12", "Q"));
// console.log("papa".replace("13", "K"));
// console.log("papa".replace("14", "A"));
