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
