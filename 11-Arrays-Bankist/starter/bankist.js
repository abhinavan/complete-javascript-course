'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Renuka Sharma Tiwary',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Abhinav Anand',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Arunit Raj',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Akanksha Priya',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
let currAccountAfterLogin = null;

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
    account.balance = calcAndPrintBalance(account.movements);
    labelBalance.textContent = `${account.balance} €`;
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
  currAccountAfterLogin = account;
};

const doTransfer = (transferTo, amount) => {
  if (amount > 0) {
    const recieverAccount = accounts.find(
      account => account.username == transferTo
    );
    const currentUserFirstName = labelWelcome.textContent
      .split(',')
      .at(1)
      .trim();
    const currentAccount = accounts.find(
      account => account.owner.split(' ').at(0) == currentUserFirstName
    );
    currentAccount.username != recieverAccount.username &&
      currentAccount &&
      recieverAccount &&
      amount <= currentAccount.balance &&
      currentAccount.movements.push(Number(amount - amount * 2)) &&
      recieverAccount.movements.push(Number(amount)) &&
      displayMovements(currentAccount);
  }
};
// loan will be sanctioned if there is any deposit in account with at least 10% of requested amount
const sanctionLoan = requestedAmount =>
  requestedAmount > 0 &&
  currAccountAfterLogin.movements.some(
    movement => movement >= requestedAmount * 0.1
  ) &&
  setTimeout(currAccountAfterLogin.movements.push(requestedAmount), 5 * 1000) &&
  displayMovements(currAccountAfterLogin);

const closeAccount = (user, pass) => {
  const index = accounts.findIndex(
    account => account.username == user && account.pin == pass
  );
  accounts.splice(index, 1);
  index >= 0 ? changeOpacity(0) : console.log('No account matched');
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  doLogin(inputLoginUsername.value, inputLoginPin.value);
  inputLoginUsername.value = inputLoginPin.value = '';
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  doTransfer(inputTransferTo.value, inputTransferAmount.value);
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  sanctionLoan(Number(inputLoanAmount.value));
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  closeAccount(inputCloseUsername.value, inputClosePin.value);
  inputCloseUsername.value = inputClosePin.value = '';
});
