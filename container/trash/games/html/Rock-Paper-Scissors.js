// Function to generate computer's choice
function computerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Function to handle player's choice
function play(playerChoice) {
  const computer = computerChoice();
  const result = determineWinner(playerChoice, computer);
  document.getElementById('result').textContent = `Computer chose ${computer}. ${result}`;
}

// Event listeners for player's choices
document.getElementById('rock').addEventListener('click', function() {
  play('rock');
});

document.getElementById('paper').addEventListener('click', function() {
  play('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
  play('scissors');
});
