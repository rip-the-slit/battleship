const Gameboard = require("../../src/components/gameboard.js");

test("Exists", () => expect(Gameboard).toBeDefined());
test("Is a class", () =>
  expect(Object.getPrototypeOf(new Gameboard())).toBe(Gameboard.prototype));

const board = new Gameboard().board;

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
