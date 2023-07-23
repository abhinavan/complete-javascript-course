'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// (() => {
//   document.querySelector('.app').style.opacity = 100;
// })();

const calcAndPrintBalance = movements => {
  return movements.reduce((sum, move) => sum + move);
};

const displaySummary = account => {
  labelSumIn.textContent = `${account.movements
    .filter(move => move > 0)
    .reduce((sum, move) => sum + move)} €`;

  labelSumOut.textContent = `${Math.abs(
    account.movements.filter(move => move < 0).reduce((sum, move) => sum + move)
  )} €`;

  labelSumInterest.textContent = `${account.movements
    .filter(move => move > 0)
    .map(move => (move * account.interestRate) / 100)
    .filter(move => move >= 1)
    .reduce((sum, move) => sum + move)} €`;
};

const displayMovements = function (account) {
  containerMovements.innerHTML = '';
  account.movements.forEach((move, i) => {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${Math.abs(move)}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    labelBalance.textContent = `${calcAndPrintBalance(account.movements)} €`;
    displaySummary(account);
  });
};

const createUserName = accounts => {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(o => o.at(0))
      .join('');
  });
};
createUserName(accounts);

console.log(accounts);

const helloUser = account =>
  account && `Hello, ${account.owner.split(' ').at(0)}`;
// do Login
const changeOpacity = opacity => (containerApp.style.opacity = opacity);

const doLogin = (user, pass) => {
  const account = accounts.find(
    account => account.username == user && account.pin == pass
  );
  account && displayMovements(account);
  account && changeOpacity(100);
  labelWelcome.textContent = helloUser(account);
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  doLogin(inputLoginUsername.value, inputLoginPin.value);
});
