'use strict';

const bookings = [];
// ES6 way of having default value of parameter
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('HL101');
createBooking('HL101', 2);

const flight = 'FL0001';
const abhinav = {
  name: 'Abhinav Anand',
  passport: 169870,
};

const doCheckInPassengers = function (flightNum, passenger) {
  flightNum = 'FL0002';
  passenger.name = 'Mr ' + passenger.name;

  //   passenger.passport == 169870
  //     ? alert('Passenger checked in ')
  //     : alert('Wrong passport');
};

doCheckInPassengers(flight, abhinav);
console.log(flight);
console.log(abhinav);

// Higher order functions

const oneWord = function (
  str = 'This is default string from oneWord function'
) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = (
  str = 'This is the default string from upperFirstWord'
) => {
  let [firstWord, ...otherWords] = str.split(' ');
  return [firstWord.toUpperCase(), ...otherWords].join(' ');
};

const transform = (
  str = 'This is the default string from transform method',
  fn,
  fn1 = () => console.log('No Method')
) => {
  console.log(`Original string is : ${str}`);
  console.log(`Transformed string is : ${fn()} from ${fn.name} function`);
  console.log(`Transformed string is : ${fn1()} from ${fn1.name} function`);
};

const high5 = () => alert('👋🏽');

//transform(undefined, upperFirstWord, oneWord);
transform(undefined, oneWord, undefined);

//document.body.addEventListener('click', high5);

// function returning function
// traditional method way
const sayHello = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} from function`);
  };
};
// through arrow function
const greeting = greeting => name =>
  console.log(`${greeting} ${name} from arrow function`);

let greetingFuntion = greeting('Hey');
greetingFuntion('Abhinav');
greetingFuntion = sayHello('Hello');
greetingFuntion('Anand');
greeting('Bonjour')('Abhinav');

//call and apply method

const indigoAirlines = {
  airline: 'Indigo Airlines',
  iataCode: 'IA',
  bookings: [],
};
const book = function (name, flightNum) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNum} ${name}` });
};
//const book = indigoAirlines.book;
// indigoAirlines.book('Abhinav Anand', 732);
// indigoAirlines.book('Renuka Sharma', 732);

// using call function

book.call(indigoAirlines, 'Kiran Tiwary', 732);
console.log(indigoAirlines.bookings);

const spiceJet = {
  airline: 'Spice Jet',
  iataCode: 'SJ',
  bookings: [],
};

book.call(spiceJet, 'Arunit Raj', 840);
console.log(spiceJet.bookings);

// apply method
const flightData = ['Akanksha Priya', 840];
book.apply(spiceJet, flightData);
console.log(spiceJet);

// bind method - will create a new function with this keyword pointing to object passed in parameter
const vistaraAirlines = {
  airline: 'Vistara Airlines',
  iataCode: 'VA',
  bookings: [],
};

book.bind(vistaraAirlines)('Tarun K Tiwary', 323);

book.bind(vistaraAirlines, 'Akanksha Priya')(322);
console.log(vistaraAirlines);

// bind method in event listener
indigoAirlines.planes = 300;
const buyplane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', buyplane.bind(indigoAirlines));

// partial application in bind method

const addGst = (rate, price) => price + price * rate;

const addTaxRateForDaaru = addGst.bind(null, 0.18);
console.log('Price for Heineken', addTaxRateForDaaru(200));
console.log('Price for bread', addGst.bind(null, 0.05)(20));

const calculateTax = price => rate => price + price * (rate / 100);

console.log(`Calculating total price for burger ${calculateTax(100)(10)}`);
