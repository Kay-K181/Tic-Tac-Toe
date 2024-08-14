# Tic-Tac-Toe

This is a React-based Tic-Tac-Toe game where two players can play against each other. The game keeps track of players' turns, checks for winning combinations, and displays the game result (win or draw) with an option to restart the game.

## Features

- **Two-player mode**: Play as Player 1 ('X') or Player 2 ('O').
- **Game State Management**: Keeps track of the game turns, active player, and game board.
- **Winning Logic**: Determines the winner based on standard Tic-Tac-Toe winning combinations.
- **Draw Condition**: Detects a draw if all squares are filled without a winner.
- **Game Restart**: Allows restarting the game without refreshing the page.
- **Player Name Customization**: Players can change their names during the game.

## Installation

To run this project locally, follow these steps:

**Clone the repository**:
git clone https://github.com/Kay-K181/Tic-Tac-Toe.git

cd Tic-Tac-Toe

npm install

npm run dev

**Code Overview**
The project is structured as follows:

App.js: The main component that manages the overall game state, including player names, game turns, and the active player.
components/Player.js: Component for displaying and managing player names and active status.
components/GameBoard.js: Component that renders the 3x3 Tic-Tac-Toe grid and handles square selection.
components/Log.js: Component for displaying the history of game turns.
components/GameOver.js: Component that shows the game over message with the winner or draw and provides a restart button.
components/winning-combinations.js: Module that contains the winning combinations for the game.

**How to Play**
The game starts with Player 1 ('X') making the first move.
Players take turns selecting squares on the 3x3 grid.
The game automatically checks for a winner after each move.
If all squares are filled without a winner, the game ends in a draw.
Players can restart the game at any time by clicking the "Restart Game" button.