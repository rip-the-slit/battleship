class Ship {
  #hits = 0;
  #length;
  get length() {
    return this.#length
  }
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