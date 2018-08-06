const square = function (x) {
  return x * x;
};

const squareArrow = (x) => {
  return x * x;
};

const squareArrow2 = x => x * x;

console.log(square(7));
console.log(squareArrow(7));
console.log(squareArrow2(7));

var fullName = 'Ben Szucs';

const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName(fullName))
