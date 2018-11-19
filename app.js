let randomNum = Math.floor(Math.random() * 11);

let guess = Number(prompt("Guess a number!"));

if (guess === randomNum) {
  alert("You guessed it!")
} else if (guess > randomNum) {
  alert("Too high!")
} else {
  alert("Too low!")
}
