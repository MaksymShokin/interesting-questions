var c = 5;

function foo() {
  console.log(c); // undefined because var will be hoisted due to function create new execution context
  var c = 6;

  console.log(c); // 6
}

foo();

console.log(c); // 5

// -----------------------------------------

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

// -----------------------------------------

function calc() {
  let sum = 0;

  return {
    add: function (num) {
      sum += num;
      return this;
    },
    result: () => {
      return sum;
    }
  };
}
console.log(
  calc().add(1).add(4).add(3).result() // 8
);

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

// -----------------------------------------

const prices = {
  check1: {
    currency: 'USD',
    amount: 100
  },
  check2: {
    currency: 'EUR',
    amount: 300
  },
  check3: {
    currency: 'EUR',
    amount: 100
  },
  check4: {
    currency: 'USD',
    amount: 150
  },
  check5: {
    currency: 'UAH',
    amount: 100500
  }
};

const calculatePrice = data => {
  return Object.entries(
    Object.values(data).reduce((acc, val) => {
      if (val.currency in acc) {
        acc[val.currency] += val.amount;
      } else {
        acc[val.currency] = val.amount;
      }
      return acc;
    }, {})
  );
};

console.log(calculatePrice(prices)); // [['USD', 250], ['EUR', 400], ['UAH', 100500]]
