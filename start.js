'use strict'
console.log('Hi, my name is Chris and I\'m 29 years old');


function yearOfBirth(age) {
  try {
    if (age < 0) throw "You can't be less than 0 years old!";
  } catch (err) {
    console.log(err);
  }
  var yearOfBirth = 2018 - age;
  return yearOfBirth;
}
yearOfBirth(-5);

function whoAmI(name, age) {
  if (!name || !age) {
    console.log('Arguments not valid');
  }
  if (typeof(age) === 'string') {
    console.log('Must be a number!');
  }
  var yob = yearOfBirth(age);
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yob}`);
}
whoAmI('Matt', '30');


// console.log(typeof 'alisha');