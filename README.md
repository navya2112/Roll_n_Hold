# Roll_n_Hold

**Overview**
This is a simple two-player dice game where players take turns rolling a dice and accumulating points. The first player to reach or exceed a score of 50 wins the game. If a player rolls a 1, they lose their current turn's points and the turn switches to the other player. The game also includes a modal popup that displays a congratulatory message when a player wins.

**Features**
 - Roll Dice: Players roll a dice to add to their current score.
 - Hold Points: Players can hold their current score, which adds it to their total score, and switch turns.
 - Win Condition: The game ends when a player’s score reaches or exceeds 10.
 - Modal Popup: Displays a winning message with the option to start a new game.

**Usage**
**Game Instructions and controls**
 - **New Game** : Click the "New game" button to reset scores and start a fresh game.
 - **Roll Dice** : Click the "Roll dice" button to roll the dice. If you roll a number between 2 and 6, it will be added to your current score. If you roll a 1, your current score is reset, and it's the next player’s turn.
 - **Hold** : Click the "Hold" button to add your current score to your total score and switch to the other player.
 - **Winning** : The game ends when a player’s total score reaches or exceeds 50. A modal popup will display the winning player’s message.


**File Structure**
 - index.html: Main HTML file for structure and content of the game.
 - style.css: CSS file for visual elements, including responsiveness and interactive effects.
 - script.js: JavaScript file containing the game logic and handling player interactions.
