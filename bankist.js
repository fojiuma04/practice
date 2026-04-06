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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const displayMovements = function(movements){
  containerMovements.innerHTML = ''
 movements.forEach(function (mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `
        containerMovements.insertAdjacentHTML("afterbegin", html)
 })      
};
displayMovements(account1.movements);
const calcDisplayBalance = function(movements){
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}`
}
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements){
  const incomes = movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${incomes}`;

  const out = movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;

  const intrest = movements 
  .filter(mov => mov > 0)
  .map(deposit => (deposit * 1.2) / 100)
  .filter((int, i, arr) => {

    return int >= 1;
  })
  .reduce((acc, int) => acc + int, 0); 
  labelSumInterest.textContent = `${intrest}`;
};
calcDisplaySummary(account1.movements);

const createUserName = function(accs){
  accs.forEach(function (acc){
    const username = acc.owner.toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('')
  });
}
createUserName(accounts)



btnLogin.addEventListener('click', function(e){
e.preventDefault();

console.log('LOGGED IN')
})





























// const account = accounts.find(acc => acc.owner === "Jessica Davis");
// console.log(account)

// let account;
// for(const acc of accounts){
//   if(acc.owner === "Jessica Davis"){
//     account = acc
//     break;
//   }
// }
// console.log(account)

// for(const acc of accounts)acc => acc.owner === "Jessica Davis"

// console.log(acc)





// console.log(movements)
// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i + 1}: ${acc}`)
//   return acc + cur;
// }, 0)

// console.log(`Total balance: ${balance}`)

// let balance2 = 0
// for(const mov of movements) balance2 += mov;
// console.log(balance2)


// const deposits = movements.filter(function (mov){
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);              


// const withdrawals = movements.filter(function(mov){
//   return mov < 0
// });
// console.log(withdrawals)


// const eurToUsd = 1.1
// const movementsUsd = movements.map(function(mov){
//   return mov * eurToUsd;
// })
// // const movementsUsd = movements.map(mov => mov * eurToUsd) 


// console.log(movementsUsd);
// console.log(movements);

// const movementsUSDof = []

// for(const mov of movements) movementsUSDof.push(mov * eurToUsd)
// console.log(movementsUSDof)

// const movementsDescription = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew' } ${Math.abs(mov)}`
// {
//     if(mov > 0){
//         return `Movement ${i + 1}: You deposited ${mov}` 
//     }else{
//         return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
//     }
// }
// )
//const calcDisplay = movements.reduce(function(acc , mov, i){
//   return acc + mov;
// }, 0)
// labelBalance.innerHTML = `${calcDisplay} EUR`

// const user = "Steven Thomas Williams"

// console.log(createUserName('Steven Thomas Williams'))
 
// //MAXIMUM VALUE IN THE ARRAY
//  const maxValue = movements.reduce(function(acc, cur, i){
// if(acc > cur){
//   return acc
// }else{
//   return cur
// }
//  }, movements[0])

//  console.log(maxValue);


// console.log(movementsDescription)

// const calcAverageHumanAge = function(dogAge){
//  const humanAge = dogAge.map(function(age){
//   if(age <= 2){
//     return 2 * age
//   }else if(age > 2){
//     return 16 + age * 4
//   }
//  }) 
//  //age => age <= 2? 2 * age : 16 + age * 4
//  const adults = humanAge.filter(age => age >= 18)
//  const averageAge = adults.reduce(function(age, cur){
//   return age + cur
//  }, 0)  / adults.length

// console.log(averageAge)
// console.log(humanAge)
// console.log(adults)
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// const calcAverageHumanAge = function(dogAge){
//  const humanAge = dogAge.map(function(age){
//   if(age <= 2){
//     return 2 * age
//   }else if(age > 2){
//     return 16 + age * 4
//   }
//  }) 
//  //age => age <= 2? 2 * age : 16 + age * 4
//  const adults = humanAge.filter(age => age >= 18)
//  const averageAge = adults.reduce(function(age, cur){
//   return age + cur
//  }, 0)  / adults.length

// console.log(averageAge)
// console.log(humanAge)
// console.log(adults)
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])

// const calcAverageHumanAge = function(dogAge){
//   const HumanAge = dogAge
//   .map(age => age <= 2 ? 2 * age : 16 + age * 4)
//   .filter(age => age >= 18)
//   .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
//   console.log(HumanAge)
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])