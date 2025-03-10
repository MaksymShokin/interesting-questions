// chained calc
calc().add(1).add(4).add(3).result() // 8

//  debounce
const debouncedFn = debounce(() => console.log('debouncedFn'), 2000);
debouncedFn()
debouncedFn()
debouncedFn()

// fib
console.log(fib(4));

console.log(fibonacciMemoization(6));

// invertBinaryTree
invert(node)

// manyBrackets
console.log(sum(4, 6, 8, 10).value); // output - 28
console.log(sum(4)(6)(8)(10).value); // output - 28

console.log(sumNoValue(4, 6, 8, 10)); // output - 28
console.log(sumNoValue(4)(6)(8)(10)); // Output: 28

console.log(sum1(1)(2)(4)());
console.log(sum2(1)(2)(4).valueOf); //

// promiseAll
const promise1 = Promise.resolve('Data from Promise 1');
const promise2 = new Promise(resolve =>
  setTimeout(() => resolve('Data from Promise 2'), 1000)
);
const promise3 = new Promise(resolve =>
  setTimeout(() => resolve('Return from Promise 3'), 2000)
);

promiseAll([promise1, promise2, promise3])
  .then(results => console.log('All promises resolved:', results))
  .catch(error => console.error('Error in one or more promises:', error));

// prototypeFlip
const str = 'Super string';
console.log(str.flip());