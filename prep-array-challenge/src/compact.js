/* exported compact */
function compact(array) {
  const numArray = [];

  const length = array.length;
  for (let index = 0; index < length; index++) {
    if (array[index]) {
      numArray.push(array[index]);
    }
  }
  return numArray;
}
