/* exported capitalize */
function capitalize(word) {
  const firstLetter = word[0].toUpperCase();
  const full = word.slice(1).toLowerCase();

  return firstLetter + full;
}