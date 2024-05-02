/* exported reverse */
function reverse(array) {
  const numArray = [];
  const length = array.length;

  for (let index = array.length - 1; index >= 0; index--) {
    numArray.push(array[index]);
  }
  return numArray;
}
