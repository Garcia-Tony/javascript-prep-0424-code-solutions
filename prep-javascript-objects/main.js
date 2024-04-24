const person = {
  firstName: 'Tony',
  lastName: 'Garcia',
  hobby: 'Playing Video Games',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

const job = person.job;
console.log("The person's current job is: An Office"), job;

const previousJob = person['previousJob'];
console.log("The person's previous job is: Security"), previousJob;

person['job'] = 'An office';
person['previousJob'] = 'Security';
console.log('The Complete Person Object:', person);
