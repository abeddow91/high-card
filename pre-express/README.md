# Kurt Geiger Tech Test


## Description
A digital croupier that deals 7 cards to 4 players written in JavaScript with an optional jQuery and CSS interface.

---

## Instructions

### Interface
To run the program via the jQuery interface, please load './interface.html'

Once there, click 'Deal' to begin and then click on each player's hand to see what they have been dealt. To start over, simply click on 'Deal' again.

### Command-Line
- game = new Game();
- game.deal();
- game.showHand(game.playerOne);
- game.showHand(game.playerTwo);
- game.showHand(game.playerThree);
- game.showHand(game.playerFour);

### Testing
To run the testing suite, please load './jasmine/SpecRunner.html'

---

## Technology Used

- Javascript

- jQuery

- CSS, HTML5, Bootstrap

- Testing Framework: Jasmine

### User Stories

```
As a user,
so I can begin,
I want the deck of cards to come in perfect sequence.
```
```
As a user,
So that I have someone to deal to,
I want there to be 4 players in the game.
```
```
As a user,
So that the cards are dealt in perfect sequence,
I want to be able to shuffle the cards.
```
```
As a user,
So I know the cards have definitely been shuffled,
I want no two cards to be still in sequence.
```
```
As a user,
So that the game can begin,
I want to deal a card to each player until each player has seven cards.
```
