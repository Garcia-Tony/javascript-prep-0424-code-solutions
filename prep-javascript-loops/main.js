// create your loops here.
function whileLoop1() {
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let index = 0;
  while (index < 9) index++;
  numArray.push(index);
  return numArray;
}

const whileLoop1Result = whileLoop1(9);
console.log('whileLoop1Result', whileLoop1Result);

function whileLoop2() {
  const numArray = [0, 2, 4, 6, 8, 10, 12, 14, 16];
  let index = 0;
  while (index < 18) index++;
  numArray.push(index);
  return numArray;
}

const whileLoop2Result = whileLoop2(18);
console.log('whileLoop2Result', whileLoop2Result);

function forLoop1() {
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let index = 0; index < 10; index++) return numArray;
}

const forLoop1Result = forLoop1(9);
console.log('forLoop1Result', forLoop1Result);

function forLoop2() {
  for (let index = 101 - 1; index >= 0; index--) {
    const stringVal = 'Time to Explosion: ';
    console.log('Time to Explosion' + ' ' + index);
  }
}

var forLoops2 = forLoop2('stringVal' + 101);

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const array = [];
  for (const key in object) {
    array.push(key);
  }
  return array;
}

const forInLoop1Result = forInLoop1(person);
console.log('forInLoop1Result', forInLoop1Result);

function forInLoop2(object) {
  const array = [];
  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}

const forInLoop2Result = forInLoop2(person);
console.log('forInLoop2Result', forInLoop2Result);
