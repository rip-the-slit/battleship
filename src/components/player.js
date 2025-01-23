class Player {
  #gameboard;
  get gameboard() {
    return this.#gameboard;
  }
  constructor(gameboard) {
    this.#gameboard = gameboard;
  }
  autoPlace(ships) {
    const generateCoordinates = (length) => {
      const horizontal = Math.random() > 0.5;
      const coordinates = {
        startX: Math.ceil(Math.random() * (10 - (horizontal ? length : 0))),
        startY: Math.ceil(Math.random() * (10 - (!horizontal ? length : 0))),
      };
      
      coordinates["endX"] = coordinates.startX + (horizontal ? length : 0);
      coordinates["endY"] = coordinates.startY + (!horizontal ? length : 0);

      return coordinates;
    };
    ships.forEach((ship) => {
      let randomPos = generateCoordinates(ship.length);
      while (
        !this.#gameboard.place(ship, {
          startX: randomPos.startX,
          startY: randomPos.startY,
          endX: randomPos.endX,
          endY: randomPos.endY,
        })
      ) {
        randomPos = generateCoordinates(ship.length);
      }
    });
  }
}

module.exports = Player;
