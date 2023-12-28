const promiseAll = promises => {
  let resolved = 0;

  return new Promise((resolve, reject) => {
    const result = [];

    promises.forEach((promise, index) => {
      promise
        .then(value => {
          result[index] = value;
          resolved += 1;

          if (resolved === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};

// Example usage:
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
