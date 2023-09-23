import GameBoard from "./gameBoard";
import Ship from "./ship";

const board = new GameBoard();

it("board has 100 cells", () => {
  expect(board.board.length).toBe(10);
  board.board.forEach((col) => {
    expect(col.length).toBe(10);
  });
});

test("placeShip should place a ship on the board", () => {
  const checkAvailabilitySpy = jest.spyOn(board, "checkAvailability");

  board.placeShip(3, 0, 0);

  expect(checkAvailabilitySpy).toHaveBeenCalledWith(0, 0, 3, true);

  expect(board.board[0][0]).toBeInstanceOf(Ship);
});
