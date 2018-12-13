function isSortedAndHow(array) {
  if (array[0] >= array[1]) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] <= array[i-1] === false) {
        return "no";
      }
    }
    return "yes, descending";
  }
  if (array[0] <= array[1]) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] >= array[i-1] === false) {
        return "no";
      }
    }
    return "yes, ascending";
  }
  return "no"
}
 
