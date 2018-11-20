function isEven(num) {
  return num % 2 === 0;
}

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    let solution = 1;
    for (let i = 2; i <= num; i++) {
      solution *= i;
    }
    return solution;
  }
}
function kebabToSnake(string) {
  let newStr = string.replace(/-/g, "_");
  return newStr
}
