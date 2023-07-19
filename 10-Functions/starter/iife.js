'use script';

// immediately invoked function expression
(function () {
  console.log('This function will run only once');
})();

(() => console.log('IIFE through arrow function'))();

// closer function

const secureBooking = () => {
  let passengerCount = 0;
  return () => console.log(`${++passengerCount} passengers`);
};

const booker = secureBooking();
booker();
booker();
booker();
