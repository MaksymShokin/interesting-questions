// -----------------------------------------

console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

console.log(3);

new Promise(resolve => {
  console.log(4);

  resolve(5);
}).then(res => {
  console.log(res);
});

console.log(6);

// 1, 3, 4, 6, 5, 2
