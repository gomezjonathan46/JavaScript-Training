function printReverse(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    console.log(list[i]);
  }
}

function isUniform(list) {
  let firstItem = list[0];
  for (let i = 1; i < list.length; i++) {
    if (firstItem !== list[i]) {
      return false;
    }
  }
  return true;
}

function sumArray(array) {
  let sum = 0;
  array.forEach(function(arrayItem) {
    sum += arrayItem;
  })
  return sum;
}

function max(array) {
  let max = 0;
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}
