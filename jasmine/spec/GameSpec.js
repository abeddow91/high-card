describe ("Game", function() {
  var game;
  perfectDeck =[" 2h"," 3h"," 4h"," 5h"," 6h"," 7h"," 8h"," 9h"," 10h"," Jh"," Qh"," Kh"," Ah",
  " 2c"," 3c"," 4c"," 5c"," 6c"," 7c"," 8c"," 9c"," 10c"," Jc"," Qc"," Kc"," Ac",
  " 2s"," 3s"," 4s"," 5s"," 6s"," 7s"," 8s"," 9s"," 10s"," Js"," Qs"," Ks"," As",
  " 2d"," 3d"," 4d"," 5d"," 6d"," 7d"," 8d"," 9d"," 10d"," Jd"," Qd"," Kd"," Ad"];
  randomHand = [" 3s"," Jd"," 6d"," 9c"," 2c"," As"," 4h"];
  player = "Anna";
  beforeEach(function() {
    game = new Game();
  });

  it("should initialize the game with an array of 52 cards", function() {
    expect(game.deck.length).toBe(52);
  });
  it("should have a deck in perfect sequence", function() {
    expect(game.deck).toEqual(perfectDeck);
  });
  it("should initialize the game with player one who has no cards", function() {
    expect(game.playerOne).toEqual([]);
  });
  it("should initialize the game with player two who has no cards", function() {
    expect(game.playerTwo).toEqual([]);
  });
  it("should initialize the game with player three who has no cards", function() {
    expect(game.playerThree).toEqual([]);
  });
  it("should initialize the game with player four who has no cards", function() {
    expect(game.playerFour).toEqual([]);
  });
  it("should shuffle the cards out of perfect sequence", function () {
    game.shuffle(game.deck);
    expect(game.deck).not.toEqual(perfectDeck);
  });
  it("should deal a card from the array to player one", function () {
    game.dealCard(game.deck, game.playerOne);
    expect(game.playerOne.length).toEqual(1);
  });
  it("should deal a card from the deck to player one", function () {
    game.dealCard(game.deck, game.playerOne);
    expect(game.playerOne.length).toEqual(1);
  });
  it("should remove the dealt card from the deck", function () {
    game.dealCard(game.deck, game.playerOne);
    expect(game.deck).not.toContain(game.playerOne[0]);
  });
  it("should deal 7 cards to each player", function () {
    game.dealMultipleHands();
    expect(game.playerOne.length).toEqual(7);
    expect(game.playerTwo.length).toEqual(7);
    expect(game.playerThree.length).toEqual(7);
    expect(game.playerFour.length).toEqual(7);
  });
  it("should return the player's hand", function () {
    expect(game.showHand(randomHand)).toEqual(" 3s, Jd, 6d, 9c, 2c, As, 4h");
  });
});
