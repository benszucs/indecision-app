// arguments object - no longer bound with arrow functiions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(2, 7));

// this keyword - no longer bound
const user =  {
  name: 'Ben',
  cities: ['Woking', 'Reading', 'Hodmezovasarhely'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};
console.log(user.printPlacesLived());

//Challange area

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number + this.multiplyBy)
  }
};

console.log(multiplier.multiply());
