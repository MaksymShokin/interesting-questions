class Lego {
  constructor(name, pieces) {
    (this.name = name), (this.pieces = pieces);
  }

  static getLego() {
    console.log('Super lego');
  }

  outputLego() {
    console.log(this.name);
  }

  setLego(newName, newPieces) {
    this.name = newName;
    this.newPieces = newPieces;
  }
}

const LegoCity = new Lego('City', 1000);

// LegoCity.setLego('Harry Potter', 500);
// LegoCity.outputLego();
// console.log(LegoCity.__proto__ === LegoCity.constructor.prototype);
// console.log(LegoCity.__proto__.__proto__ === Object.prototype);
// console.log(LegoCity.__proto__.__proto__.__proto__); // null

// hasOwn vs in
const obj1 = {
  tank: 'Leopard 1'
};
// console.log(Object.hasOwn(obj1, 'toString')); // looks only for own properties
// console.log('toString' in obj1); // looks at own properties and also at prototype chain

const obj2 = { video: 'Dark Knight' };

Object.defineProperty(obj2, 'tank', {
  enumerable: true,
  writable: true,
  value: 'Leopard 1'
});

Reflect.defineProperty(obj2, 'game', {
  enumerable: true,
  value: 'Warcraft 3'
});

obj2.tank = 'fff';

console.log(obj2);
// console.log(Object.hasOwn(obj2, 'tank'));
