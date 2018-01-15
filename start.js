console.log('Hi, my name is Chris and I\'m 29 years old');


function yearOfBirth(age) {
  try {
    if (age < 0) throw "is empty";
  } catch (err) {
    console.log('Error!');
    ;
  }
  var yearOfBirth = 2018 - age;
  return yearOfBirth;
}
yearOfBirth(-5);

function whoAmI(name, age) {
  var yob = yearOfBirth(age);
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yob}`);
}
whoAmI('Matt', 30);