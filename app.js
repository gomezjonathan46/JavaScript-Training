// Buttons
const playerOne = document.getElementsByTagName('button')[0];
const playerTwo = document.getElementsByTagName('button')[1];
const reset = document.getElementsByTagName('button')[2];

// Score
const playerOneScore = document.getElementsByClassName('player')[0];
const playerTwoScore = document.getElementsByClassName('player')[1];
const maxScore = document.querySelector(".maxScore");

// Max score input
const maxScoreInput = document.querySelector("input");

// Score board
let playerOneScoreBoard = 0;
let playerTwoScoreBoard = 0;

// Variable to end game
let endGame = false;

// Events
// Player one score increase
playerOne.addEventListener("click", function() {
  if (playerOneScoreBoard < Number(maxScore.textContent) && endGame === false) {
    playerOneScore.textContent = Number(playerOneScore.textContent) + 1;
    playerOneScoreBoard++
    if (playerOneScoreBoard == Number(maxScore.textContent)) {
      playerOneScore.classList.add("green");
      endGame = true;
    }
  }
});

// Player two score increase
playerTwo.addEventListener("click", function() {
  if (playerTwoScoreBoard < Number(maxScore.textContent) && endGame === false) {
    playerTwoScore.textContent = Number(playerTwoScore.textContent) + 1;
    playerTwoScoreBoard++
    if (playerTwoScoreBoard == Number(maxScore.textContent)) {
      playerTwoScore.classList.add("green");
      endGame = true;
    }
  }
});

// Update max score
maxScoreInput.addEventListener('change', function() {
  maxScore.textContent = maxScoreInput.value;
})

reset.addEventListener("click", function() {
  // Reset scoreboard counter
  playerOneScoreBoard = 0;
  playerTwoScoreBoard = 0;

  // Reset end game boolean
  endGame = false;

  // Reset player score board text
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;

  // Turn score text black
  playerOneScore.classList.remove("green");
  playerTwoScore.classList.remove("green");
})
