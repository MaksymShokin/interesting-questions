const fib = n => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(4));

function fibonacciMemoization(n, memo = {}) {
  if (n <= 1) {
    return n;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] =
    fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
  return memo[n];
}
