const Gameboard = require("../../src/components/gameboard.js");
const Ship = require("../../src/components/ship.js");
const gameboard = new Gameboard();
const board = gameboard.board;
const testShip = new Ship(3);

test("Exists", () => expect(Gameboard).toBeDefined());
test("Is a class", () =>
  expect(Object.getPrototypeOf(gameboard)).toBe(Gameboard.prototype));
test("Has rows", () => {
  expect(board.length).toBe(10);
});
test("Has columns", () => {
  expect(board.every((row) => row.length == 10)).toBe(true);
});
test("Each spot has ship and attacked property", () => {
  expect(board[0][0].ship).toBe(null);
  expect(board[0][0].attacked).toBe(false);
});
test("Place ship at 1, 1 horizontally", () => {
  gameboard.place(testShip, { startX: 1, startY: 1, endX: 3, endY: 1 });
  for (let x = 0; x < 3; x++) {
    expect(gameboard.board[0][x]["ship"]).toBe(testShip);
  }
});
test("Place ship at 1, 2 vertically", () => {
  gameboard.place(testShip, { startX: 1, startY: 2, endX: 1, endY: 4 });
  for (let y = 0; y < 3; y++) {
    expect(gameboard.board[y + 1][0]["ship"]).toBe(testShip);
  }
});
test("receiveAttack changes the attacked property of field", () => {
  gameboard.receiveAttack({x: 1, y: 1})
  expect(gameboard.board[0][0]["attacked"]).toBe(true)
})
test("receiveAttack sinks ship", () => {
  gameboard.receiveAttack({x: 2, y: 1})
  gameboard.receiveAttack({x: 3, y: 1})
  expect(gameboard.board[0][0]["ship"].isSunk()).toBe(true)
})