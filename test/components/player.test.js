const Player = require("../../src/components/player.js");
const Gameboard = require("../../src/components/gameboard.js");
let testPlayer;
beforeEach(() => {
  testPlayer = new Player(new Gameboard());
});

test("Exists", () => expect(Player).toBeDefined());
test("Is a class", () =>
  expect(Object.getPrototypeOf(testPlayer)).toBe(Player.prototype));
test("Should contain gameboard", () =>
  expect(testPlayer.gameboard).toBeDefined());
test("Should be able to manipulate gameboard", () => {
  const testShip = {};
  testPlayer.gameboard.place(testShip, {
    startX: 1,
    startY: 1,
    endX: 3,
    endY: 1,
  });
  expect(testPlayer.gameboard.board[0][1].ship).toBe(testShip);
});
describe("Autoplace method", () => {
  let foundShips;
  beforeEach(() => {
    testPlayer.autoPlace([
      { length: 5 },
      { length: 4 },
      { length: 3 },
      { length: 3 },
      { length: 2 },
    ]);
    foundShips = [];
  });
  test("Should populate board randomly", () => {
    testPlayer.gameboard.board.forEach((row) => {
      row.forEach((column) => {
        if (column.ship && !foundShips.includes(column.ship)) {
          foundShips.push(column.ship);
        }
      });
    });
    expect(foundShips.length).toBe(5);
  });
  test("Autoplaced ships should appear proportionally to their length", () => {
    testPlayer.gameboard.board.forEach((row) => {
      row.forEach((column) => {
        if (column.ship) {
          const index = foundShips.findIndex((ship) => ship == column.ship);
          if (index > -1) {
            if (!foundShips[index]["occurrences"])
              foundShips[index]["occurrences"] = 1;
            else foundShips[index].occurrences++;
          } else foundShips.push(column.ship);
        }
      });
    });
    foundShips.forEach((ship) => {
      expect(ship.length == ship.occurrences).toBe(true);
    });
  });
});
