let button = document.getElementsByTagName('button')[0];
let body = document.getElementsByTagName('body')[0];

// First solution
let purpleBackground = false;

button.addEventListener('click', function() {
  if (purpleBackground) {
    body.style.background = "white";
  } else {
    body.style.background = "purple";
  }
  purpleBackground = !purpleBackground;
})

// Second solution
// button.addEventListener("click", function() {
//   body.classList.toggle('purpleBackground')
// })
