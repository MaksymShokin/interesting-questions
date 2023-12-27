String.prototype.flip = function () {
  console.log(this);
  return this.split('').reverse().join('');
};

String.prototype.text = '123';

const str = 'Super string';
console.log(str.text);
console.log(str.flip());
