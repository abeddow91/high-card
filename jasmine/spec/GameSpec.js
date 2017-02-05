describe ("Game", function() {
  var game;
  perfectDeck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
                 25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,
                 46,47,48,49,50,51,52];
  randomHand = [3,11,14,43,23,4,51];
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
  xit("should return the player's hand", function () {
    expect(game.showHand(randomHand)).toEqual("3s, Jd, 6d, 9c, 2c, As, 4h");
  });

  it("should sort the player's hand by highest to lowest", function (){
    game.naturalCardSort(randomHand);
    expect(randomHand).toEqual([51, 43, 23, 14, 11, 4, 3]);
  });
});
