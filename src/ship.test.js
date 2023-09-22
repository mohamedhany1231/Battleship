import Ship from "./ship";

it("ship default length is 2", () => {
  const ship = new Ship();
  expect(ship.length).toBe(2);
});

it("ship hit function increase hits", () => {
  const ship = new Ship();
  ship.hit();
  expect(ship.hits).toBe(1);
});

it("ship of length 2 destroyed after 2 hits", () => {
  const ship = new Ship();
  ship.hit().hit();
  expect(ship.isSunk()).toBe(true);
});
it("ship of length 4 after being hit twice has 2 hits", () => {
  const ship = new Ship(4);
  ship.hit().hit();
  expect(ship.hits).toBe(2);
});
it("ship of length 4 destroyed after 4 hits", () => {
  const ship = new Ship(4);
  ship.hit().hit().hit().hit();
  expect(ship.isSunk()).toBe(true);
});
