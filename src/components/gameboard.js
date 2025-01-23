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
    const coordinates = []
    if (position.startY == position.endY) {
      for (let x = position.startX; x <= position.endX; x++) {
        const pos = this.#board[position.startY - 1][x - 1]
        if (pos["ship"]) return false
        coordinates.push(pos)
      }
    } else {
      for (let y = position.startY; y <= position.endY; y++) {
        const pos = this.#board[y - 1][position.startX - 1]
        if (pos["ship"]) return false
        coordinates.push(pos)
      }
    }
    coordinates.forEach((position) => position["ship"] = ship)
    return true
  } 
  receiveAttack(position) {
    const coordinates = this.#board[position.y - 1][position.x - 1];
    if (coordinates.attacked) return false 
    const ship = coordinates["ship"]
    if (ship) {
      ship.hit();
      if (ship.isSunk()) {
        this.#sunkShips.push(coordinates.ship)
      }
    }
    coordinates["attacked"] = true;
    return true
  }
}

module.exports = Gameboard;
