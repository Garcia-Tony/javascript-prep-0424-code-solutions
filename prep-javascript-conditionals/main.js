/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  if (age < 18) {
    return false;
  }
}

const isAdultResult = isAdult(29);
console.log('isAdultResult', isAdultResult);

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  }
  if (score < 70) {
    return false;
  }
}

const didStudentPassResult = didStudentPass(77);
console.log('didStudentPassResult', didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}
const gradeCalculatorResult = gradeCalculator(101);
console.log('gradeCalculatorResult', gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}

const seasonMessengerResult = seasonMessenger('spring');
console.log('seasonMessengerResult', seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'It is a weekday!';
  }
}

const dayDetectorResult = dayDetector('friday');
console.log('dayDetectorResult', dayDetectorResult);
