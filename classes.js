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

LegoCity.setLego('Harry Potter', 500);
LegoCity.outputLego();
console.log(LegoCity.__proto__ === LegoCity.constructor.prototype);
console.log(LegoCity.__proto__.__proto__ === Object.prototype);
console.log(LegoCity.__proto__.__proto__.__proto__); // null
