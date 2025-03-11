// chained calc
// const calc = () => {
//   let result = 0;

//   return ({
//     add: function(value) {
//       result += value
//      return this
//     },
//     result: () => {
//       console.log(result)
//       return result
//     }
//   })
// };
// calc().add(1).add(4).add(30).result(); // 8

// //  debounce
// const debounce = (func, delay) => {
//   let timer

//   return function(...args) {
//     if (timer) {
//       clearTimeout(timer)
//     }

//     timer = setTimeout(()=> func.apply(this, args), delay)
//   }
// }
// const debouncedFn = debounce(() => console.log('debouncedFn'), 2000);
// debouncedFn()
// debouncedFn()
// debouncedFn()

// const sumNoValue = (num1) => {
//   const func = (num2) => sumNoValue(num1 + num2)

//   func.valueOf = () => num1; // Ensures implicit conversion to number
//   func.toString = () => num1

//   return func
// }
// console.log(+sumNoValue(4)(6)(8)(10)); // Output: 28

// fib
// const fib = (number) => {
//   if (number <= 1) {
//     return 1
//   }

//   return fib(number - 2) + fib(number - 1)
// }
// console.log(fib(7));

// const fibonacciMemoization = (number, memo = {}) => {
//   if (number <= 1) {
//     return 1;
//   }

//   if (memo[number] !== undefined) {
//     return memo[number]
//   }

//   const x = memo[number] = fibonacciMemoization(number - 2, memo) + fibonacciMemoization(number - 1, memo)

//   return x
// };
// console.log(fibonacciMemoization(7));

// // invertBinaryTree
// invert(node)

// // manyBrackets

// const sum = (...args) => {
//   const answer = args.reduce((acc, val) => acc + val, 0)

//   const fn = num => sum(num, ...args)

//   fn.value = answer

//   return fn
// }

// console.log(sum(4, 6, 8, 10).value); // output - 28
// console.log(sum(4)(6)(8)(10).value); // output - 28
// console.log(sumNoValue(4, 6, 8, 10)); // output - 28
// console.log(sumNoValue(4)(6)(8)(10)); // Output: 28

// console.log(sum1(1)(2)(4)());
// console.log(sum2(1)(2)(4).valueOf); //

// // promiseAll
// const promiseAll = promises => {
//   let resolved = 0;

//   return new Promise((resolve, reject) => {
//     const result = [];

//     promises.forEach((promise, index) => {
//       promise
//         .then(value => {
//           result[index] = value;
//           resolved += 1;

//           if (resolved === promises.length) {
//             resolve(result);
//           }
//         })
//         .catch(e => {
//           reject(e);
//         });
//     });
//   });
// };

// const promise1 = Promise.resolve('Data from Promise 1');
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve('Data from Promise 2'), 5000)
// );
// const promise3 = new Promise(resolve =>
//   setTimeout(() => resolve('Return from Promise 3'), 5000)
// );

// promiseAll([promise1, promise2, promise3])
//   .then(results => console.log('All promises resolved:', results))
//   .catch(error => console.error('Error in one or more promises:', error));

// // prototypeFlip
// String.prototype.flip = function(prefix) {
//   return prefix + this.split('').reverse().join('')
// }

// const str = 'Super string';
// console.log(str.flip('BOSS'));

// const sum1 = (num1) => {
//   const func = (num2) => {
//     if (num2 === undefined) {
//       return num1
//     } else {
//       return sum1(num1 + num2)
//     }
//   }

//   return func
// }
// console.log(sum1(1)(2)(10)());

const debounce = (callback, delay) => {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => callback.apply(this, args), delay);
  };
};

const debouncedFn = debounce(()=>console.log('1'), 2000)
debouncedFn()
debouncedFn()
debouncedFn()
debouncedFn()
