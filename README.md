# Wordle Guessing Game

This Python program implements a guessing game similar to the popular online game Wordle. It selects a random word from a predefined list of Wordle words and challenges the player to guess the word within a limited number of attempts. Additionally, it provides a list of words in order help the player.

## Features:

- **Random Word Selection:** The program randomly selects a word from an available list of Wordle words, ensuring a unique and challenging experience with each playthrough.

- **Closest Word Suggestion:** In addition to evaluating the accuracy of the guess, the program offers a suggestion for the closest word from the list based on the guesses made by the player so far. This feature enhances the player's experience by providing guidance and hints during the game.

## How to run:

1. **Launch the Program:** Run the script `run.bat` to start & wait for the server to start.

2. **Guess the Word:** Input your guess when prompted by the program.

3. **Continue Guessing:** Keep guessing until you correctly identify the word or exhaust the allowed number of attempts. The CLI will print out 5 words that might be the answer with the information it's gained from your guessing.

## Requirements:

- Python 3.x
- Node.js

- requests (pip install requests)
- colorama (pip install colorama)

## Todo
- Implement a proper user interface
- Allow users to assign colours to words manually

## Acknowledgements
- https://github.com/petergeorgas/Wordle-API?tab=readme-ov-file (for the base server code, although modified)
- Data from https://www.kaggle.com/datasets/rtatman/english-word-frequency/data
- Inspired by the game `Wordle`
