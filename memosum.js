const sum = (a, b) => a + b;

const memo = (foo) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache[key] === undefined) {
      cache[key] = foo(...args);
    }

    return cache[key];
  };
};

const memoSum = memo(sum);

console.log(memoSum(2, 3));
console.log(memoSum(3, 3));
console.log(memoSum(5, 3));
console.log(memoSum(2, 3));
