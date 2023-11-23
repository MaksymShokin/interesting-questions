// https://www.codinn.dev/tricky-javascript-2023/es6789-code-snippets-interview-questions#google_vignette
// 1
// let a = {};
// let b = { anything: 'b' };
// let c = { key: 'c' };

// a[b] = 123; // { '[object Object]': 123 }
// a[c] = 456; // { '[object Object]': 456 }

// console.log(a[b]);

// 2
// let obj1 = { key: 'value' };
// let obj2 = obj1;
// let obj3 = obj2;

// obj1.key = 'new value';
// obj2 = { key: 'another value' };

// console.log(obj1.key, obj2.key, obj3.key); // new value another value new value

// 3
// const obj = {
//   a: "foo",
//   b: function () {
//     console.log(this.a);
//   },
// };

// const c = obj.b;

// obj.b(); // foo
// c(); // undefined

// 4
// const x = { foo: 1 };
// const y = { foo: 2 };

// function addFoo(obj) {
//   return obj.foo + 1;
// }

// console.log(addFoo(x)); // 2
// console.log(addFoo(y)); // 3

// 5
// const arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(i); // 5, 5, 5, 5, 5
//   }, 1000);
// }

// 6
// const arr = [1, 2, 3, 4, 5];

// arr.forEach(function (element) {
//   console.log(element); // 1, 2, 3, 4, 5
// });

// 7
// let x = 1;

// if (function f() {}) {
//   x += typeof f;
// }

// console.log(x); // '1undefined'

// 8
// let a = {
//   x: 1,
//   y: 2
// };
// let b = a;
// a.x = 5;
// console.log(a); // { x: 5, y: 2 };
// console.log(b); // { x: 5, y: 2 };

// 9
// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;

// console.log(x == y); // false
// console.log(x === y); // false
// console.log(z == y); // true
// console.log(z == x); // false

// 10
// var x = 0;
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     x++;
//     console.log(x); // 1, 2, 3, 4, 5
//   }, 1000);
// }

// 11
// let a = { x: 1 };
// let b = { x: 2 };
// let c = { x: 3 };
// let d = { x: 4 };
// let e = { x: 5 };
// let arr = [a, b, c, d, e];

// arr.forEach(obj => (obj.x = obj.x * 2));

// console.log(a.x, b.x, c.x, d.x, e.x); // 2, 4, 6, 8, 10

// 12
// let num = 0;

// function test() {
//   var num = 1;
//   return num;
// }

// console.log(test()); // 1
// console.log(num); // 0

// 13
// let obj = { name: 'John', age: 25 };
// let newObj = { ...obj, age: 30 };

// console.log(obj.age); // 25
// console.log(newObj.age); // 30

// 14
// const add = (a = 1, b = 2) => a + b;
// console.log(add()); // 3
// console.log(add(5)); // 7
// console.log(add(undefined, 10)); // '11'

// 15
// const name = 'John';
// const age = 25;

// const user = { name, age };
// console.log(user); // { name: 'John', age: 25 }

// 16
// const arr = [1, 2, 3];
// const [a, b, c] = arr;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

// 17
// console.log(typeof null); // object historical bug in javascript
// console.log(typeof undefined); // undefined
// console.log(null === undefined); // false
// console.log(null == undefined); // true

// 28
// let x = 5;
// {
//   let x = 10;
//   console.log(x); // 10
// }
// console.log(x); // 5

//  29
// const obj = { a: 1, b: 2, c: 3 };
// const { a, b } = obj;
// console.log(a, b); // 1, 2

// 30
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3); // [1, 2, 3, 4, 5, 6]

// 31
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// arr2.push(4);

// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3, 4]

// 32
// const x = 10;

// function foo() {
//   console.log(x);
//   const x = 20;
// }

// foo(); // error

// 33
// const a = [1, 2, 3];
// const b = a;

// b.push(4);

// console.log(a); // [1, 2, 3, 4]
// console.log(b); // [1, 2, 3, 4]

// 35
// console.log(typeof 42); // number
// console.log(typeof "Hello"); // string
// console.log(typeof true); // boolean
// console.log(typeof [1, 2, 3]); // object
// console.log(typeof { name: "John", age: 25 }); // object
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined
// console.log(typeof function () {}); // function

// 40
// function foo() {
//   let x = 1;

//   function bar() {
//     let y = 2;
//     console.log(x + y); // 3
//   }

//   bar();
// }

// foo();

// 41
// let x = 10;

// function outer() {
//   console.log(x); // undefined

//   if (false) {
//     var x = 20;
//   }
// }

// outer();

// 42
// const obj = {
//   a: 1,
//   b: 2,
//   c: {
//     a: 3,
//     b: 4
//   }
// };

// const {
//   a,
//   b,
//   c: { a: nestedA }
// } = obj;

// console.log(a, b, nestedA); // 1, 2, 3


