/* exported tail */
function tail(array) {
  const numArray = [];
  const length = array.length;

  for (let index = 1; index < length; index++) {
    numArray.push(array[index]);
  }
  return numArray;
}
