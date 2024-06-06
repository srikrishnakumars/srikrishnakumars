// List of words for the game
const words = ["hangman", "javascript", "html", "css", "web"];

// Selecting a random word from the list
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Initialize variables
let remainingGuesses = 6;
let guessedLetters = [];
let wordDisplay = "";

// Function to initialize the game
function initializeGame() {
  // Reset variables
  remainingGuesses = 6;
  guessedLetters = [];
  // Select a new random word
  selectedWord = words[Math.floor(Math.random() * words.length)];
  // Display placeholders for the word
  wordDisplay = "_".repeat(selectedWord.length);
  updateWordDisplay();
  updateGuessesDisplay();
  createAlphabetButtons();
}

// Function to update the displayed word
function updateWordDisplay() {
  const wordDisplayElement = document.getElementById('word-display');
  wordDisplayElement.textContent = wordDisplay;
}

// Function to update the displayed remaining guesses
function updateGuessesDisplay() {
  const guessesElement = document.getElementById('guesses');
  guessesElement.textContent = remainingGuesses;
}

// Function to handle letter guesses
function guessLetter(letter) {
  // Check if the letter has already been guessed
  if (guessedLetters.includes(letter)) {
    alert("You already guessed that letter!");
    return;
  }

  guessedLetters.push(letter);

  let wordArray = selectedWord.split("");
  let displayArray = wordDisplay.split("");

  if (wordArray.includes(letter)) {
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === letter) {
        displayArray[i] = letter;
      }
    }
    wordDisplay = displayArray.join("");
    updateWordDisplay();
  } else {
    remainingGuesses--;
    updateGuessesDisplay();
  }

  if (!wordDisplay.includes("_")) {
    alert("Congratulations! You've guessed the word!");
    initializeGame();
  } else if (remainingGuesses === 0) {
    alert("Game over! The word was: " + selectedWord);
    initializeGame();
  }
}

// Function to create buttons for all alphabets
function createAlphabetButtons() {
  const lettersElement = document.getElementById('letters');
  lettersElement.innerHTML = ''; // Clear existing buttons

  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', function() {
      guessLetter(letter.toLowerCase()); // Convert to lowercase before passing
      this.disabled = true;
    });
    lettersElement.appendChild(button);
  }
}

// Initialize the game when the page loads
window.onload = initializeGame;
