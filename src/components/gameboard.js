class Gameboard {
  #board = (function () {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let x = 0; x < 10; x++) {
        board[i].push({ ship: null, attacked: false });
      }
    }
    return board;
  })();
  get board() {
    return this.#board;
  }
  constructor() {}
}

module.exports = Gameboard;
