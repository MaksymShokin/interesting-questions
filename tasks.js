// 36
// const getType1 = a => {
//   if (a === null) {
//     return 'null';
//   } else if (Array.isArray(a)) {
//     return 'array';
//   }

//   return typeof a;
// };

// const getType = (val) => (val === null ? null : val?.constructor.name);

// console.log(getType(42));
// console.log(getType('Hello'));
// console.log(getType(true));
// console.log(getType([1, 2, 3]));
// console.log(getType({ name: 'John', age: 25 }));
// console.log(getType(null));
// console.log(getType(undefined));
// console.log(getType(function () {}));

//The function should print "array" for "[]" and "null" for "null" types.

// 44
const sum = (...args) => {
  const ans = args.reduce((a, b) => a + b, 0); // just to get sum of all the array elements
  
  const myFunc = num => sum(num, ...args);

  myFunc.value = ans;

  return myFunc;
};

console.log(sum(4, 6, 8, 10).value); // output - 28
console.log(sum(4)(6)(8)(10).value); // output - 28
