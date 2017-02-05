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
    expect(game.players[0]).toEqual([]);
  });
  it("should initialize the game with player two who has no cards", function() {
    expect(game.players[1]).toEqual([]);
  });
  it("should initialize the game with player three who has no cards", function() {
    expect(game.players[2]).toEqual([]);
  });
  it("should initialize the game with player four who has no cards", function() {
    expect(game.players[3]).toEqual([]);
  });
  it("should shuffle the cards out of perfect sequence", function () {
    game.shuffle(game.deck);
    expect(game.deck).not.toEqual(perfectDeck);
  });
  it("should deal a card from the deck to player one", function () {
    game.dealCard(game.deck, game.players[0]);
    expect(game.players[0].length).toEqual(1);
  });
  it("should remove the dealt card from the deck", function () {
    game.dealCard(game.deck, game.players[0]);
    expect(game.deck).not.toContain(game.players[0][0]);
  });
  it("should deal 7 cards to each player", function () {
    game.dealMultipleHands();
    expect(game.players[0].length).toEqual(7);
    expect(game.players[1].length).toEqual(7);
    expect(game.players[2].length).toEqual(7);
    expect(game.players[3].length).toEqual(7);
  });
  it("should return the player's hand", function () {
    expect(game.showHand(randomHand)).toEqual("3, 11, 14, 43, 23, 4, 51");
  });

  it("should sort the player's hand by highest to lowest", function (){
    game.naturalCardSort(randomHand);
    expect(randomHand).toEqual([51, 43, 23, 14, 11, 4, 3]);
  });
  it("should store the highest card dealt", function () {
    game.players[0] = [51, 43, 23, 14, 11, 4, 3];
    game.players[1] = [41, 40, 33, 26, 16, 12, 9];
    game.players[2] = [52, 38, 35, 22, 21, 8, 7];
    game.players[3] = [19, 18, 17, 13, 10, 5, 1];
    game.setHighCard();
    expect(game.highCard).toEqual(52);
  });

  it("should store the player with the highest integer as the winner", function () {
    game.players[0] = [51, 43, 23, 14, 11, 4, 3];
    game.players[1] = [41, 40, 33, 26, 16, 12, 9];
    game.players[2] = [52, 38, 35, 22, 21, 8, 7];
    game.players[3] = [19, 18, 17, 13, 10, 5, 1];
    game.determineWinner();
    expect(game.winner).toEqual(3);
  });
  it("should convert the integer hand into a hand of cards", function () {
    game.convertHand(randomHand);
    expect(randomHand).toEqual(["A ♠︎","Q ♠︎","7 ♠︎","5 ♣︎","4 ♠︎","2 ♦︎","2 ♠︎"]);
  });
});
