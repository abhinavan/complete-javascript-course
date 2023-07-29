'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
// splice method deletes the element of array present in the index provided

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.splice(arr.length - 1));
// console.log(arr);

// // reverse an array
// arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.reverse());

// // concat an arrays

// console.log(typeof arr.concat(arr));
// console.log(arr.at(3));
// continue and break can not be used in foreach method
// movements.forEach((move, index, arr) =>
//   move > 0
//     ? console.log(`Movement ${index + 1} : Deposited ${Math.abs(move)} `)
//     : console.log(`Movement ${index + 1} : Withdrawn ${Math.abs(move)}`)
// );

// currencies.forEach((value, key) => {
//   console.log(`${key} : ${value}`);
// });
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// map method
const conversionRate = 80.0;
const movementsiInInr = movements.map(move => move * conversionRate);
console.log(movementsiInInr);

const movementsDescripton = movements.map((move, i) => {
  let type = move > 0 ? `Deposited` : `Withdrawn`;
  return `Movement ${i + 1} : ${type} ${Math.abs(move)} `;
});

const deposit = movementsiInInr.filter(move => move > 0);

console.log(movements.reduce((sum, move) => sum + move, 10000));

console.log(
  movements.reduce((element, move) => (move > element ? move : element))
);

console.log(deposit);

const arr = [[1, 2, 3], 4, [5, 6, 7], 9, [10, 11, [12, 13, [14, 15]]]];
const arrFlat = arr.flat(3);
console.log(arr);
console.log(arrFlat);

// to create 100 random numbers in an array
const x = Array.from({ length: 100 }, (_, i) =>
  Math.trunc(Math.random() * 100)
);
console.log(x);

setTimeout(() => console.log('this will be printed after 3 seconds'), 3000);
