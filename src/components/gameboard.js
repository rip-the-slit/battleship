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
  place(ship, position) {
    if (position.startY == position.endY) {
      for (let x = position.startX; x <= position.endX; x++) {
        this.#board[position.startY - 1][x - 1]["ship"] = ship;
      }
    } else {
      for (let y = position.startY; y <= position.endY; y++) {
        this.#board[y - 1][position.startX - 1]["ship"] = ship;
      }
    }
  }
}

module.exports = Gameboard;
