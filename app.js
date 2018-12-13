function validParentheses(parens) {
  let length = parens.split('').length;
  if (length % 2 === 0) {
    for (let i = 0; i <= length/2; i++) {
      parens = parens.replace(/\(\)/g, '');
    }
    return parens === "";
  }
  return false;
}
