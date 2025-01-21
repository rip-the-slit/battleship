const Ship = require("../../src/components/ship.js")

test("Exists", () => expect(Ship).toBeDefined())
test("Is class", () => expect(Object.getPrototypeOf(new Ship())).toBe(Ship.prototype))