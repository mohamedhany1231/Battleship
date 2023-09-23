import Player from "./player";
import GameBoard from "./gameBoard";

jest.mock("./gameBoard.js");

it("place titan call ship with 5 length", () => {
  const player1 = new Player("ahmed");
  let placeShipSpy = jest.spyOn(player1.board, "placeShip");

  player1.placeTitan(1, 2);
  expect(placeShipSpy).toHaveBeenCalledWith(5, 1, 2, true);
});
it("place smallest ship call ship with 2 length", () => {
  const player1 = new Player("ahmed");
  let placeShipSpy = jest.spyOn(player1.board, "placeShip");

  player1.placeSmallestShip(1, 2, false);
  expect(placeShipSpy).toHaveBeenCalledWith(2, 1, 2, false);
});

test("player call GameBoard", () => {
  const player2 = new Player("ahmed");

  expect(GameBoard).toHaveBeenCalled();
});
