function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          results[index] = result;
          completedCount++;

          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

// Example usage:
const promise1 = Promise.resolve('Data from Promise 1');
const promise2 = new Promise(resolve =>
  setTimeout(() => resolve('Data from Promise 2'), 1000)
);
const promise3 = Promise.reject(new Error('Error from Promise 3'));

customPromiseAll([promise1, promise2, promise3])
  .then(results => console.log('All promises resolved:', results))
  .catch(error => console.error('Error in one or more promises:', error));
