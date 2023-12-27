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
