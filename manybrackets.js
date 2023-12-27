const sum = (...args) => {
  const ans = args.reduce((a, b) => a + b, 0); // just to get sum of all the array elements

  const myFunc = num => sum(num, ...args);

  myFunc.value = ans;

  return myFunc;
};

console.log(sum(4, 6, 8, 10).value); // output - 28
console.log(sum(4)(6)(8)(10).value); // output - 28

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