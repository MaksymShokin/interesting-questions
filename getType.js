const getType1 = a => {
  if (a === null) {
    return 'null';
  } else if (Array.isArray(a)) {
    return 'array';
  }

  return typeof a;
};

const getType = (val) => (val === null ? null : val?.constructor.name);

console.log(getType(42));
console.log(getType('Hello'));
console.log(getType(true));
console.log(getType([1, 2, 3]));
console.log(getType({ name: 'John', age: 25 }));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(function () {}));

//The function should print "array" for "[]" and "null" for "null" types.
