var c = 5;

function foo() {
  console.log(c); // undefined because var will be hoisted due to function create new execution context
  var c = 6;

  console.log(c); // 6
}

foo();

console.log(c); // 5
