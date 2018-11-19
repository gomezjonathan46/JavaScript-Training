console.log("Print odd numbers between 300 and 333.");
let num = 300;

while (num <= 333) {
  if (num % 2 === 1) {
    console.log(num);
  }
  num++;
}

console.log("Print numbers divisible by 5 and 3 between 5 and 50.");
let num2 = 5;

while (num2 <= 50) {
  if ((num2 % 5 === 0) && (num2 % 3 === 0)) {
    console.log(num2);
  }
  num2++
}
