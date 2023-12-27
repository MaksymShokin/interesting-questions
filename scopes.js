const obj = {
  arrow: () => {
    return this;
  },
  fn: function () {
    return this;
  }
};

obj.arrow(); // window
console.log(obj.fn()); // a

const b1 = obj.arrow;
const b2 = obj.fn;

b1(); // window
b2(); // window
