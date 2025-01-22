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
  #sunkShips = [];
  get board() {
    return this.#board;
  }
  get sunkShips() {
    return this.#sunkShips;
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
  receiveAttack(position) {
    const field = this.#board[position.y - 1][position.x - 1];
    const ship = field["ship"]
    if (ship) {
      ship.hit();
      if (ship.isSunk()) {
        this.#sunkShips.push(field.ship)
      }
    }
    field["attacked"] = true;
  }
}

module.exports = Gameboard;
