function count (string) {
  let strCopy = string.toLowerCase().replace(' ','').split('').sort();
  let count = 1;
  let object = {};

  for (let letter in strCopy) {
    if (strCopy[letter] === strCopy[letter-1]) {
      count++;
    } else {
      count = 1;
    }
    object[strCopy[letter]] = count;
  }
  return object;
}
