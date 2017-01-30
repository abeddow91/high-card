describe ("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should initialize the game with an array of 52 cards", function() {
    expect(game.deck.length).toBe(52);
  })
  it("should have a deck in perfect sequence", function() {
    expect(game.deck).toEqual(["2h","3h","4h","5h","6h","7h","8h","9h","10h","Jh","Qh","Kh","Ah",
                 "2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","Ac",
                 "2s","3s","4s","5s","6s","7s","8s","9s","10s","Js","Qs","Ks","As",
                 "2d","3d","4d","5d","6d","7d","8d","9d","10d","Jd","Qd","Kd","Ad",])
  });
  it("should initialize the game with a player one who has no cards", function() {
    expect(game.playerOne).toEqual([]);
  });
  it("should initialize the game with a player one who has no cards", function() {
    expect(game.playerTwo).toEqual([]);
  });
  it("should initialize the game with a player one who has no cards", function() {
    expect(game.playerThree).toEqual([]);
  });
  it("should initialize the game with a player one who has no cards", function() {
    expect(game.playerFour).toEqual([]);
  });
});
