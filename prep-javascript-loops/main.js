// create your loops here.
function whileLoop1() {
  const numArray = [];
  let index = 0;
  while (index < 10) {
    numArray.push(index);
    index++;
  }
  return numArray;
}
const whileLoop1Result = whileLoop1();
console.log('whileLoop1Result', whileLoop1Result);

function whileLoop2() {
  const numArray = [];
  let index = 0;
  while (index < 20) {
    numArray.push(index);
    index += 2;
  }
  return numArray;
}

const whileLoop2Result = whileLoop2();
console.log('whileLoop2Result', whileLoop2Result);

function forLoop1() {
  const numArray = [];
  for (let index = 0; index < 10; index++) {
    numArray.push(index);
  }
  return numArray;
}

const forLoop1Result = forLoop1();
console.log('forLoop1Result', forLoop1Result);

function forLoop2() {
  for (let index = 101 - 1; index >= 0; index--) {
    const stringVal = 'Time to Explosion: ';
    console.log('Time to Explosion' + ' ' + index);
  }
}
forLoop2();

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
