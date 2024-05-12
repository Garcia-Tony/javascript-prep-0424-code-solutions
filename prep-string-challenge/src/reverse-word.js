/* exported reverseWord */
function reverseWord(word) {
  let newString = '';
  const length = word.length;

  for (let index = word.length - 1; index >= 0; index--) {
    newString += word[index];
  }

  return newString;
}
