const sum = (...args) => {
  const ans = args.reduce((a, b) => a + b, 0); // just to get sum of all the array elements

  const myFunc = num => sum(num, ...args);

  myFunc.value = ans;

  return myFunc;
};

console.log(sum(4, 6, 8, 10).value); // output - 28
console.log(sum(4)(6)(8)(10).value); // output - 28

const sumNoValue = (n, ...rest) => {
  if (rest.length > 0) {
    return rest.reduce((acc, val) => acc + val, 0) + n;
  }

  const func = x => sum(n + x);

  func.toString = () => n;

  return func;
};

console.log(sumNoValue(4, 6, 8, 10)); // output - 28
console.log(sumNoValue(4)(6)(8)(10)); // Output: 28

function sum1(a) {
  let ans = a;

  const myFunc = num => {
    if (num === undefined) {
      return ans;
    }
    ans += num;
    return myFunc;
  };

  return myFunc;
}

console.log(sum1(1)(2)(4)());

function sum2(a) {
  let ans = a;

  const myFunc = num => {
    ans += num;
    return myFunc;
  };

  myFunc.valueOf = () => ans;

  return myFunc;
}

console.log(sum2(1)(2)(4).valueOf); //
