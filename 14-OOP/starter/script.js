'use strict';

const Person = function (name, birthYear) {
  // instance properties
  this.name = name; // eslint-disable-line no-invalid-this
  this.birthYear = birthYear;

  // this.calcAge = function () {
  //   console.log(2023 - this.birthYear);
  // }; - not recommended to declare functions inside constructor functions instead use prototypes
};

const abhinav = new Person('Abhinav', 1993);
const anand = new Person('Anand', 1992);
const arunit = new Person('Arunit', 1999);
console.log(abhinav);
console.log(anand);
console.log(arunit);
console.log(abhinav instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

console.log(Person.prototype);
console.log(abhinav.calcAge());

anand.print = function () {
  console.log('Print from ', this.name);
};
console.log(anand.print());
//console.log(abhinav.print()); - this will not work as print function is declared on object anand only unlike calcAge function which is declared on prototype level
// function () {
//   console.log(2023 - this.birthYear);
// };

// };

console.log(anand.__proto__);
console.log(Person.prototype.isPrototypeOf(abhinav));
console.log(Person.prototype.isPrototypeOf(Person));
