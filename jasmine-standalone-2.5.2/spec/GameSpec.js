describe ("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should initialize the game with an array of 52 cards", function() {
    expect(game.deck.length).toBe(52);
  })
});
