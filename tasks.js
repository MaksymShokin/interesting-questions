// chained calc

const calc = (num1 = 0) => {};

// calc().add(1).add(4).add(30).result(); // 8

// -----------------------------------------------------------------------------------------
//  debounce

const debounce = (func, delay) => {};

// const debouncedFn = debounce(() => console.log('debouncedFn'), 2000);
// debouncedFn();
// debouncedFn();
// debouncedFn();

// -----------------------------------------------------------------------------------------

// sumNoValue

// const sumNoValue = (num1) => {

// }

// console.log(+sumNoValue(4)(6)(8)(10)); // Output: 28

// -----------------------------------------------------------------------------------------
// fib

const fib = num => {};

// console.log(fib(8));

// -----------------------------------------------------------------------------------------

const fibonacciMemoization = (number, memo = {}) => {};

// console.log(fibonacciMemoization(8));

// -----------------------------------------------------------------------------------------
// manyBrackets

const sum = (...args) => {};

// const sumNoValue = (...args) => {

// }

console.log(sum(4, 6, 8, 10).value); // output - 28
console.log(sum(4)(6)(8)(10).value); // output - 28
// console.log(sumNoValue(4, 6, 8, 10)); // output - 28
// console.log(sumNoValue(4)(6)(8)(10)); // Output: 28

// console.log(sum1(1)(2)(4)());
// console.log(sum2(1)(2)(4).valueOf); //

// -----------------------------------------------------------------------------------------
//promiseAll

const promiseAll = promises => {};

const promise1 = Promise.resolve('Data from Promise 1');
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Data from Promise 2'), 5000)
);
const promise3 = new Promise(resolve =>
  setTimeout(() => resolve('Return from Promise 3'), 5000)
);

promiseAll([promise1, promise2, promise3])
  .then(results => console.log('All promises resolved:', results))
  .catch(error => console.error('Error in one or more promises:', error));

// -----------------------------------------------------------------------------------------
// prototypeFlip

String.prototype.flip = function (str) {};

const str = 'Super string';
// console.log(str.flip('BOSS'));

// const sum1 = (num1) => {

// }

// console.log(sum1(1)(2)(10)());

// -----------------------------------------------------------------------------------------

Array.prototype.customMap = function (callback) {};
const multiplyByTwo = [1, 2, 3, 4].customMap(num => num * 2);
// console.log(multiplyByTwo)
