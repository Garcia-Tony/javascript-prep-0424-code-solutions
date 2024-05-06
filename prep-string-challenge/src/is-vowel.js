/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'E', 'I', 'o', 'u'];

  for (let index = 0; index < vowels.length; index++) {
    if (vowels[index] === char) {
      return true;
    }
  }
  {
    return false;
  }
}
