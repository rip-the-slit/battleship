const Ship = require("../../src/components/ship.js");
let battleship;
beforeEach(() => {
  battleship = new Ship(4);
});

test("Exists", () => expect(Ship).toBeDefined());
test("Is class", () =>
  expect(Object.getPrototypeOf(battleship)).toBe(Ship.prototype));
test("Hit and isSunk work", () => {
  expect(battleship.isSunk()).toBe(false);

  for (let i = 0; i < 4; i++) battleship.hit();

  expect(battleship.isSunk()).toBe(true);
});
test("Length property is public", () => {expect(battleship.length).toBe(4)});
