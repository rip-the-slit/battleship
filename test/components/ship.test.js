const Ship = require("../../src/components/ship.js");

test("Exists", () => expect(Ship).toBeDefined());
test("Is class", () =>
  expect(Object.getPrototypeOf(new Ship())).toBe(Ship.prototype));
test("Hit and isSunk work", () => {
  const battleship = new Ship(4);
  expect(battleship.isSunk()).toBe(false);

  for (let i = 0; i < 4; i++) battleship.hit();

  expect(battleship.isSunk()).toBe(true);
});
