/* exported getWords */
function getWords(string) {
  const array = [];
  const length = string.length;

  if (length > 0) {
    const array = string.split(' ');

    return array;
  } else {
    return [];
  }
}
