// Import the 'prompt' module to get user input from the console
const prompt = require('prompt');

// Start the prompt interface
prompt.start();

// Prompt the user to enter ROCK, PAPER, or SCISSORS
prompt.get(['userSelection'], function (err, result) {
  if (err) {
    // Handle any errors during prompt
    console.error(err);
    return;
  }

  // Convert the user's input to uppercase for easier comparison
  const userSelection = result.userSelection.toUpperCase();

  // Generate a random number to simulate the computer's choice
  const randomNum = Math.random();

  // Assign a value to computerSelection based on the random number
  let computerSelection = '';
  if (randomNum < 0.34) {
    computerSelection = 'PAPER';
  } else if (randomNum <= 0.67) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  // Display both the user's and computer's choices
  console.log(`User chose: ${userSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

  // Compare both selections and determine the winner
  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    console.log("User Wins!");
  } else {
    console.log("Computer Wins!");
  }
});
