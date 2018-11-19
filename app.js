let age = prompt("How old are you?");

if (age < 18) {
  alert("You cannot enter the venue.")
} else if (age < 21) {
  alert("You can enter, but cannot drink.")
} else {
  alert("You can enter and drink.")
}

if (age < 0) {
  alert("Error: You haven't even been born yet.")
}

if (age == 21) {
  alert("Happy 21st Birthday!!")
}

if (age % 2 === 1) {
  alert("Your age is odd!")
}
