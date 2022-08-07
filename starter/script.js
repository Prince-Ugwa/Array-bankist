'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 160, 4000],
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
const account5 = {
  owner: 'Prince Ugwa Odiniya',
  movements: [435, 2000, 700, 100, 80],
  interestRate: 1.2,
  pin: 9999,
};

const accounts = [account1, account2, account3, account4, account5];

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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
/////////////////////////////////////////////////
// What is a method?
// Method is a function that is attached to an object. If we can call methods on array that means that array themselves are object.
// Therefore arrays methods are simply function that attach to all arrays that we create in JavaScript. These various methods can be seen as tools for arrays.

// Simply arrays methods.

///////1. slice () method: is used to extract part of the array without mutating the original array
let arr = ['a', 'b', 'c', 'd', 'e', 9, true];
console.log(typeof arr[arr.length - 1]);
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); //this is use to specify range at which we want to extract
console.log(arr.slice(-1));
console.log(arr.slice(-2));

//we can also use the slice method to create a shallow copy
console.log(arr.slice());
//////////////////////////////////////////////////////////////////////////////////////////
/////////splice() method: the splice method mutate the original array. we can simply use this method to delete element from an array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
//////////////////////////////////////////////////////////////////////////////////////////
///Reverse(): is used to change the order of the array in a reverse order
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['p', 'o', 'n', 'm', 'l'];

console.log(arr2.reverse());

//////////////////////////////////////////////////////////////////////////////////////////
///concat() method is use to join two arrays
const letters = arr.concat(arr2);
console.log(letters);

//////////////////////////////////////////////////////////////////////////////////////////
////join() method
console.log(letters.join('_'));

//////////////////////////////////////////////////////////////////////////////////////////
////// the at() methos is used to get the index of an array. we can replace the bracket notation with the at() method
console.log(arr[0]);
console.log(arr.at(0));

/////getting the last element of the array
console.log(arr.at(-1));
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);*/

////////////////////////////////////////////////////////////////////////////////////////////////////

// //forEach()method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, move] of movements.entries()) {
//   if (move > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${move}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdraw ${Math.abs(move)}`);
//   }
// }

// console.log('-----forEach method------');

// movements.forEach(function (move) {
//   if (move > 0) {
//     console.log(`You deposited ${move}`);
//   } else {
//     console.log(`you withdraw ${Math.abs(move)}`);
//   }
// });

//getting the entries using the forEach loop

// movements.forEach(function (move, i, arr) {
//   if (move > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${move}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdraw ${Math.abs(move)}`);
//   }
// });

//behind the scene JS will be calling  the function automatically
//function(200)
//function(450)
//function(-400)
//.....
//note: the continue and the break do not work on the forEach loop at all

// console.log('-----7----');
// movements.forEach(function (move) {
//   if (move > 0) {
//     console.log(`You Deposited ${move}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(move)}`);
//   }
// });

// //getting the index of movement

// movements.forEach(function (move, i, arr) {
//   if (move > 0) {
//     console.log(`Index ${i + 1}: You Deposited ${move}`);
//   } else {
//     console.log(`Index ${i + 1}: You withdraw ${Math.abs(move)}`);
//   }
// });
////////////////////////////////////////////////////////////////////////////////////////////////////

// the forEach with maps and set
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // the forEach with set

// const currenciesUnique = new Set(['NGN', 'USD', 'EUR', 'NGN', 'USD']);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// const newArr = ['Kingsley', 'Kingsley', 'Priestly', 'Priestly'];
// console.log(newArr);

// const setCheck = new Set([...newArr]);
// console.log(setCheck.entries());

//Displaying the movement of transaction on page
const showMovement = function (movements) {
  containerMovements.innerHTML = ' ';
  movements.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const htmlTemplates = `
     <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${move} €</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', htmlTemplates);
  });
};
showMovement(account1.movements);
// Sum of all transaction
const displayBalance = function (movements) {
  const balance = movements.reduce((accm, cur) => accm + cur, 0);
  labelBalance.textContent = `${balance} €`;
};
displayBalance(account1.movements);
// const calcPrint = function (movements) {
//   const balance = movements.reduce((acc, cur) => acc + cur, 0);
//   labelBalance.innerText = `${balance} $`;
// };
// calcPrint(account1.movements);
/////////////////////////////////////////////////////////////////////////////
//compute username map and forEach
const createUsername = function (accs) {
  //modifying an array that we already get as an input
  accs.forEach(function (acc) {
    // the forEach method helps us create a side effect
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(namee => namee[0]) //helps us get the initial of eachwords
      .join('');
  });
};
createUsername(accounts);
console.log(accounts);
////////////////////////////////sum of all deposits
const displaySmmary = movements => {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} €`;

  const output = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${output} €`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};
displaySmmary(account1.movements);
///////////////////////////////////////////////////

/////////////////////////////
///Map method to create userName
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(namee => namee[0])
//   // .map(function (namee) {
//   //   return namee[0]; //in the arrow function the return is happening , we dont see it in action but it is happening in the background.
//   // })
//   .join('');
// return username;

// console.log(createUsername(accounts));
// const user = 'Prince Ugwa Odiniya';
//exmaple 01.
const user = 'Prince Ugwa Odiniya';
const username = user
  .toLowerCase()
  .split(' ')
  .map(function (name) {
    return name[0];
  })
  .join('');

console.log(username);

///////////////////////////////////////////////////////////////////////////
//The map()method: it maps array elemnt into a new array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementUsd = movements.map(function (mov) {
  return mov * euroToUsd;
});

// console.log(movements);
// console.log(movementUsd);

const movementUsd1 = movements.map(mov => mov * euroToUsd);
// console.log(movementUsd1); //using the arrow function

// const movementsDesc = movements.map(
//   (mov, i) =>
//     // if (mov > 0) {
//     //   return ` Movement ${i + 1}: you deposited ${mov}`;
//     // } else {
//     //   return ` Movement ${i + 1}: you withrew ${mov}`;
//     // }
//     ///using ternary operator
//     ` Movement ${i + 1}: you  ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDesc);
/////////////////////////////////////////////////////////
//filter():
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposit = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposit);

// const depositor = [];

// for (const mov of movements) if (mov > 0) depositor.push(mov);
// console.log(depositor);

// const withdrawal = movements.filter(mov => mov < 0);
// console.log(withdrawal);

/*
/// testing my self
const arr1 = [];
const arr = [20, 10, 45, 25];

for (const m of arr) {
  const c = m * 2;
  arr1.push(c);
}
console.log(arr1);

*/
///////////////////////////////////////////////////////////////////
// reduce(): boil down all elements in an array into one single value
// the reduce methos aalso get a callback function but it is lso a different one from the filter and the map.
// the first param of the reduce method is call the accumulator,
// the accumulator is like a snow ball that keep accumlating the values that we ultimately wants to add together that will be the sum
// accumulator is like a snow ball
// the reduce method takes four param.

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);
// let balance2 = 0;
//the zero is the initial of the accumaltor in the first iteration
// this mean that we want to start count from zero

// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// //maximum value
// const max = movements.reduce((acc, cur) => {
//   if (acc > cur) return acc;
//   else return cur;
// }, movements[0]);
// console.log(max);

// const cd = [2, 1, 2, 3];
// const b = [];

// cd.forEach(function (m) {
//   return b.push(m * 5);
// });
// for (const m of cd) {
//   b.push(m * 5);
// }
// const narr = cd.map(function (m) {
//   return m * 5;
// });
// const narr = cd.map(m => m * 8);
// console.log(cd);
// console.log(narr);
// console.log(b);

//////////////////////////////////////////////////////////////////
///The magic chaining methods
//method chaning is when methods are invoke from one object to another without
// creating an intermediate variables
// when chaining we can only chain amethod only if the first one return an array,
//in this case the filter and map
console.log(movements);
const totalDeposit = movements
  .filter(mov => mov > 0)
  // .map((mov, i, arr) => {
  //   console.log(arr);
  //   return mov * euroToUsd;
  // })
  // .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc - mov, 0);

console.log(totalDeposit);

///// the find method:it is a single statement of multiple method invocations which we instruct our program to perform

const firstWithrawal = movements.find(mov => mov < 0);
console.log(firstWithrawal);
const jesica = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(jesica);

const acctOwner = [];

for (const acc of accounts)
  if (acc.owner === 'Jessica Davis') acctOwner.push(acc);
// console.log(acctOwner);
///compute a username for a single object
const oneObj = {
  owner: 'Brawny Odiniya Prince',
  age: 24,
};
const cr = function (asc) {
  asc.username = asc.owner
    .split(' ')
    .map(name => name[0])
    .join('')
    .toLowerCase();
};
cr(oneObj);
console.log(oneObj);
