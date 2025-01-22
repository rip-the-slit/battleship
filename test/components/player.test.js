const Player = require("../../src/components/player.js")
const Gameboard = require("../../src/components/gameboard.js")
const testPlayer = new Player(new Gameboard())

test("Exists", () => expect(Player).toBeDefined())
test("Is a class", () => expect(Object.getPrototypeOf(testPlayer)).toBe(Player.prototype))
test("Should contain gameboard", () => expect(testPlayer.gameboard).toBeDefined())
test("Should be able to manipulate gameboard", () => {
    const testShip = {}
    testPlayer.gameboard.place(testShip, {startX: 1, startY: 1, endX: 3, endY: 1})
    expect(testPlayer.gameboard.board[0][1].ship).toBe(testShip)
})