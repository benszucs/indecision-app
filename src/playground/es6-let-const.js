var nameVar = 'Ben';
var nameVar = 'Jeff';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Jo';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping
console.log('###########');

var fullName = 'Ben Szucs';

if (fullName) {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
