// chained calc

// const calc = (num1 = 0) => {

//   return {
//     add: function(num2) {
//       return calc(num1 + num2)
//     },
//     result: function() {
//       console.log(num1)
//       return num1
//     }
//   }
// }

// calc().add(1).add(4).add(30).result(); // 8

// //  debounce

// const debouncedFn = debounce(() => console.log('debouncedFn'), 2000);
// debouncedFn()
// debouncedFn()
// debouncedFn()

// const sumNoValue = (num1) => {
//   let result = num1
//   const fn = function(num2) {
//     return sumNoValue(num1 + num2)
//   }

//   fn.toString = function() {
//     return result
//   }

//   return fn
// }

// console.log(+sumNoValue(4)(6)(8)(10)); // Output: 28

// fib

// const fib = (num) => {
//   if (num <= 1) {
//     return num
//   }

//   return fib(num-2) + fib(num-1)
// }

// console.log(fib(7));

// const fibonacciMemoization = (number, memo = {}) => {
//   if (number <= 1) {
//     return number
//   }

//     if (memo[number]) {
//       return memo[number]
//     }

//     const result = fibonacciMemoization(number-2, memo) + fibonacciMemoization(number-1, memo)

//     memo[number] = result

//     return result
// }

// console.log(fibonacciMemoization(7));

// // manyBrackets

// }

const sum = (...args) => {
  const result = args.reduce((acc, val) => acc + val, 0)

  const fn = function(num) {
    return sum(result + num)
  }

  fn.value = result


  return fn
}

const sumNoValue = (...args) => {
  const result = args.reduce((acc, val) => acc + val, 0)

  const fn = function(num) {
    return sum(result + num)
  }

  fn.toString = () => result


  return fn
}


console.log(sum(4, 6, 8, 10).value); // output - 28
console.log(sum(4)(6)(8)(10).value); // output - 28
console.log(sumNoValue(4, 6, 8, 10)); // output - 28
console.log(sumNoValue(4)(6)(8)(10)); // Output: 28

// console.log(sum1(1)(2)(4)());
// console.log(sum2(1)(2)(4).valueOf); //

// // promiseAll

// const promiseAll = promises => {
//   let resolved = 0;

//   return new Promise((resolve, reject) => {
//     let result = [];

//     promises.forEach((promise, index) => {
//       promise
//         .then(res => {
//           result[index] = (res);
//           resolved++;
//           if (resolved === promises.length) {
//             resolve(result);
//           }
//         })
//         .catch(error => {
//           reject(error);
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

// String.prototype.flip = function(str) {
//   return str.split('').reverse().join('')
// }

// const str = 'Super string';
// console.log(str.flip('BOSS'));

// const sum1 = (num1) => {
//   return function(num2) {
//     if (num2 === undefined) {
//       return num1
//     }
//     return sum1(num1 + num2)
//   }
// }

// console.log(sum1(1)(2)(10)());

// const debounce = function(callback, delay) {
//   let timer

//   return function(...args) {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(()=>callback.apply(this, args), delay)
//   }
// }

// const debouncedFn = debounce(()=>console.log('1'), 2000)
// debouncedFn()
// debouncedFn()
// debouncedFn()
// debouncedFn()

// Array.prototype.customMap = function(callback) {
//   const oldArr = this
//   const newArr = []

//   for (let i = 0; i < oldArr.length; i++) {
//     newArr.push(callback(oldArr[i]))
//   }

//   return newArr
// }
// const multiplyByTwo = [1,2,3,4].customMap((num => num  * 2))
// console.log(multiplyByTwo)
