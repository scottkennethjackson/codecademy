let target;

const humanGuessInput = document.getElementById('human-guess');

const roundNumberDisplay = document.getElementById('round-number');

const computerGuessDisplay = document.getElementById('computer-guess');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const targetNumberDisplay = document.getElementById('target-number');
const computerWinsDisplay = document.getElementById('computer-wins');

const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round')

guessButton.addEventListener('click', () => {
  // Generate the target value
  target = generateTarget();
  // Retrieve the player's guess
  const currentHumanGuess = humanGuessInput.value;
  // Make a random 'computer guess'
  const computerGuess = Math.floor(Math.random() * 6 + 1);

  // Display the computer guess and the target
  computerGuessDisplay.innerText = computerGuess;
  //targetNumberDisplay.innerText = target;
  if (target === 1) {
    targetNumberDisplay.innerHTML = '<i class="fa-solid fa-dice-one fa-beat"></i>';
  } else if (target === 2) {
    targetNumberDisplay.innerHTML = '<i class="fa-solid fa-dice-two fa-beat"></i>';
  } else if (target === 3) {
    targetNumberDisplay.innerHTML = '<i class="fa-solid fa-dice-three fa-beat"></i>';
  } else if (target === 4) {
    targetNumberDisplay.innerHTML = '<i class="fa-solid fa-dice-four fa-beat"></i>';
  } else if (target === 5) {
    targetNumberDisplay.innerHTML = '<i class="fa-solid fa-dice-five fa-beat"></i>';
  } else {
    targetNumberDisplay.innerHTML = '<i class="fa-solid fa-dice-six fa-beat"></i>';
  }
  
  // Determine if the human or computer wins:
  const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target)
  const winner = humanIsWinner ? 'user' : 'computer'

  // Update the correct score:
  updateScore(winner);

  // Display the winner
  if (humanIsWinner) {
    guessButton.innerText = 'Lucky Guess!';
    guessButton.classList.toggle('winning-text')
  } else {
    computerWinsDisplay.innerText = 'The House Always Wins!';
  }

  // winnerDisplay.innerText = humanIsWinner ? 'You win!' : 'Computer wins!';

  // Display the current scores:
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
  
  // Set the correct disabled state for the buttons
  guessButton.setAttribute('disabled', true)
  nextRoundButton.removeAttribute('disabled');
});

nextRoundButton.addEventListener('click', () => {
  // Increase the round number
  advanceRound();
  // Display the new round number
  roundNumberDisplay.innerText = currentRoundNumber;

  // Set the correct disabled state for the buttons
  nextRoundButton.setAttribute('disabled', true);
  guessButton.removeAttribute('disabled');

  // Reset the guess input box and the target number display:
  targetNumberDisplay.innerText = '?';
  guessButton.innerText = 'Guess';
  humanGuessInput.value = 1;
  computerGuessDisplay.innerText = '?';
  computerWinsDisplay.innerText = '';
  guessButton.classList.remove('winning-text');

  // Reset add and subtract buttons
  addButton.removeAttribute('disabled');
  subtractButton.setAttribute('disabled', true);
});

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value + 1;
  handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value - 1;
  handleValueChange(humanGuessInput.value);
});

const handleValueChange = value => {
  if (value > 1 && value <= 5) {
    subtractButton.removeAttribute('disabled');
    addButton.removeAttribute('disabled');
  } else if (value >= 6) {
    addButton.setAttribute('disabled', true);
  } else if (value <= 1) {
    subtractButton.setAttribute('disabled', true);
  }
}

humanGuessInput.addEventListener('input', function(e) {
  handleValueChange(e.target.value);
});
