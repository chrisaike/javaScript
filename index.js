let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate a random target number between 0 and 9
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// Function to determine the winner based on the closest guess to the target number
function compareGuesses(humanGuess, computerGuess, targetNumber) {
    const humanDifference = Math.abs(targetNumber - humanGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess);

    if (humanDifference <= computerDifference) {
        return true; // Human player wins or it's a tie
    } else {
        return false; // Computer player wins
    }
}

// Function to update the score based on the winner
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

// Function to advance to the next round by increasing the round number
function advanceRound() {
    currentRoundNumber++;
}

// Example usage:
const targetNumber = generateTarget();
const humanGuess = 5;
const computerGuess = 3;

const humanWins = compareGuesses(humanGuess, computerGuess, targetNumber);
updateScore(humanWins ? 'human' : 'computer');
advanceRound();

console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);
console.log("Current Round Number:", currentRoundNumber);
