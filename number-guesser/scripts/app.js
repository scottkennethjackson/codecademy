let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.ceil(Math.random() * 6);
}

const getAbsoluteDistance = (target, number) => Math.abs(target - number);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    const userAbsDistance = getAbsoluteDistance(targetNumber, userGuess);
    const computerAbsDistance = getAbsoluteDistance(targetNumber, computerGuess);

    return userAbsDistance <= computerAbsDistance;
}

const updateScore = (winner) => {
    if (winner === 'user') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const checkUserInput = (input) => {
    if (input < 1 || input > 6) {
        alert('Your guess is out of range.');
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}