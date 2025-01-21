class Ship {
  #hits = 0;
  #length;
  constructor(length) {
    this.#length = length;
  }
  hit() {
    this.#hits++
  }
  isSunk() {
    return this.#hits == this.#length
  }
}

module.exports = Ship