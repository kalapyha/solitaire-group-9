[![E2E Tests](https://github.com/kalapyha/solitaire-group-9/actions/workflows/cypress-test.yml/badge.svg?branch=main)](https://github.com/kalapyha/solitaire-group-9/actions/workflows/cypress-test.yml)

# Getting Started

Check this link to see build version https://classy-pony-87ed97.netlify.app/

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

**Game Rules**

Solitaire is a popular single player card game that has many variations. The most common version, also known as Klondike, is played with a standard deck of 52 cards. The goal of the game is to move all of the cards from the tableau and foundation piles to the four foundation piles at the top right of the game board, in order from Ace to King, by suit.

Here are the basic rules of Klondike solitaire:

-   The game starts with a shuffled deck of cards dealt face-down in a specific pattern to form seven columns, called the tableau. The first column has one card, the second has two cards, and so on, until the seventh column has seven cards.

-   The top card of each tableau column is dealt face-up. The remaining cards in the tableau are dealt face-down.

-   The four foundation piles at the top right of the game board are empty at the start of the game.

-   The player can only move cards that are face-up and can be moved to a foundation pile or another tableau pile.

-   The player can only place a card on a foundation pile if it is the same suit and the next rank up from the card currently on the top of that pile. For example, a 2 of Hearts can only be placed on an Ace of Hearts.

-   The player can only place a card on a tableau pile if it is the opposite color and the next rank down from the card currently on the top of that pile. For example, a black 10 can only be placed on a red Jack.

-   The player can move a group of cards from one tableau pile to another if they are in sequence and of the opposite color.

-   The player can flip over the face-down cards in the tableau to reveal them.

-   The player wins the game when all cards have been moved to the foundation piles in order from Ace to King, by suit.

# Dependencies

A summary of technology utilized
