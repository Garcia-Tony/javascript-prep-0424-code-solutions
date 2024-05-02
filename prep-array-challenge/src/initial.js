/* exported initial */
function initial(array) {
  const numArray = [];
  const length = array.length;
  const lastIndex = length - 1;
  for (let index = 0; index < lastIndex; index++) {
    numArray.push(array[index]);
  }
  return numArray;
}
