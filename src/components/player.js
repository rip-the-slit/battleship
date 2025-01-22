class Player {
  #gameboard;
  get gameboard() {
    return this.#gameboard;
  }
  constructor(gameboard) {
    this.#gameboard = gameboard;
  }
}

module.exports = Player;
