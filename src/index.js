import GameBoard from "./gameBoard";

let myBoard = new GameBoard();

console.log(myBoard.board);
myBoard.placeShip(5, 2, 3);
myBoard.placeShip(4, 0, 0, false);
myBoard.placeShip(2, 9, 9);
console.log(myBoard.shipCount);

console.log(myBoard.board);
myBoard.receiveAttack(0, 0);
myBoard.receiveAttack(0, 0);
myBoard.receiveAttack(0, 2);
myBoard.receiveAttack(0, 1);
myBoard.receiveAttack(0, 3);
console.log(myBoard.shipCount);
