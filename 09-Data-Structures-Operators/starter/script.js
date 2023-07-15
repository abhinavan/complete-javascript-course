'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Es6 enhanced literals for properties in object
  openingHours,
  openingHours1: null,
  // ES6 enhanced literals for method
  printName() {
    console.log(this.name);
  },
  orderFood(...items) {
    console.log(
      `Items ordered are ${this.starterMenu[items[0]]} and ${
        this.mainMenu[items[1]]
      } `
    );
  },
};
for (let [i, { open: openingTime, close: closingTime }] of Object.entries(
  openingHours
)) {
  console.log(
    `On ${i} , we are open at ${openingTime} and close at ${closingTime}`
  );
}
// ES6 2020 has optional chaining which will return undefined as soon as it recieves undefined or null values
console.log(restaurant?.openingHours1?.fri.open);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (let day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} , we are open from ${open}`);
}
// optional chaining on method
restaurant.orderFood1?.(0, 1) ?? console.log("Method doesn't exists");

// optional chaining on arrays

const userArray = [{ name: 'Abhinav' }];
console.log(userArray[1]?.name ?? 'Array doesnot exist');
restaurant.printName();
// use of spread operator in copying elements of object
const restaurantFullInfo = {
  foundingYear: '2023',
  ...restaurant,
  owner: 'Abhinav A',
};
restaurantFullInfo.name = 'Bihari Katta';
console.log(restaurant);
console.log(restaurantFullInfo);

const arr = [1, 2, 3, 45, 6, 5];
console.log(...arr);

const [a, , b, ...others] = arr;
console.log(a, b, others);

// console.log(undefined  null);
// restaurant.numberOfGuests = 0;
const numberOfGuests = restaurant.numberOfGuests ?? 10;
console.log(numberOfGuests);
console.log(null && undefined);
// Logical Operators Demo
const student1 = {
  name: 'Abhinav',
  roll: 2,
};

const student2 = {
  name: 'Anand',
};

student1.roll ||= 1; // OR Assignment operator
student2.roll = student2.roll || 0;
student2.roll ??= 1; // Nullish Assignment operator
console.log(student1, student2);

student2.name &&= 'Arunit'; // AND assignment operator
console.log(student2);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (let [i, item] of menu.entries()) console.log(`${i + 1} -> ${item}`);

console.log(restaurant);
console.log(openingHours);

// sets
const inputArray = [1, 2, 1, 3, 2, 3, 4, 5, 5, 4];
const inputSet = new Set(inputArray);
inputSet.add(6);
inputSet.delete(2);
console.log(inputSet, inputSet.size, inputSet.has(8));
inputSet.clear();

// maps
const rest = new Map();
rest.set('name', 'Bihari Zaika');
rest.set(1, 'Patna');
rest.set(2, 'Bhagalpur').set(true, 'We are open').set(false, 'We are closed');

console.log(rest.get(1));

for (let [i, j] of rest.entries()) {
  console.log(i, j);
}
const question = new Map();
question
  .set('question', 'Best programming language in world ?')
  .set(1, 'Java')
  .set(2, 'Python')
  .set(3, 'JavaScript')
  .set('correct', 3)
  .set(true, 'You are correct !!💥')
  .set(false, 'Please try again ⛔️');

console.log(question);
const handleEventOnClick = () => {
  document.querySelector('h1').textContent = question.get('question');

  const choice = prompt(
    `Enter your choice 1) ${question.get(1)} 2) ${question.get(
      2
    )} 3) ${question.get(3)}`
  );
  question.get('correct') == choice && console.log(question.get(true));
  question.get('correct') == choice || console.log(question.get(false));
};

console.log(...[...question]);

//document.querySelector('h1').addEventListener('click', handleEventOnClick);

const airlines = 'Indigo Airlines';
const plane = 'A320';
const checkIfMiddleSeat = seat => {
  // B and E are middle seats
  // number character will be row and alphabet are seat position
  const isMiddleSeat = seat.slice(2) == 'B' || seat.slice == 'E' ? true : false;
  return isMiddleSeat;
};

checkIfMiddleSeat('11B') && console.log(`Middle Seat`);

const x = 'abhinav abhinav anand';
console.log(x.replace('abhinav', 'Mr.'));

const y = 'a very nice string';

console.log(...y.split(' '));
