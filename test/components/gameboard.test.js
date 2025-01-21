const Gameboard = require("../../src/components/gameboard.js");
const gameboard = new Gameboard();
const board = gameboard.board;

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
  const testShip = {};
  gameboard.place(testShip, { startX: 1, startY: 1, endX: 3, endY: 1 });
  for (let x = 0; x < 3; x++) {
    expect(gameboard.board[0][x]["ship"]).toBe(testShip);
  }
});
test("Place ship at 1, 2 vertically", () => {
  const testShip = {};
  gameboard.place(testShip, { startX: 1, startY: 2, endX: 1, endY: 4 });
  for (let y = 0; y < 3; y++) {
    expect(gameboard.board[y + 1][0]["ship"]).toBe(testShip);
  }
});
