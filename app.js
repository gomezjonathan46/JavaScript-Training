// Buttons
const playerOne = document.getElementsByTagName('button')[0];
const playerTwo = document.getElementsByTagName('button')[1];
const reset = document.getElementsByTagName('button')[2];

// Score
const playerOneScore = document.getElementsByClassName('player')[0];
const playerTwoScore = document.getElementsByClassName('player')[1];
const maxScore = document.querySelector(".maxScore");

// Score board
let playerOneScoreBoard = 0;
let playerTwoScoreBoard = 0;

// Events
// Player one score increase
playerOne.addEventListener("click", function() {
  playerOneScore.textContent = Number(playerOneScore.textContent) + 1;
  playerOneScoreBoard++
});

// Player two score increase
playerTwo.addEventListener("click", function() {
  playerTwoScore.textContent = Number(playerTwoScore.textContent) + 1;
  playerTwoScoreBoard++
});
