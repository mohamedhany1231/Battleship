import Ship from "./ship";

export default class GameBoard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(""));
    this.shipCount = 0;
  }
  placeShip(shipLength, x, y, horizontal = true) {
    let ship = new Ship(shipLength);
    if (horizontal) {
      if (x + ship.length - 1 > 9) x = 9 - ship.length + 1;
      if (!this.checkAvailability(x, y, ship.length, horizontal)) return;
      for (let i = 0; i < ship.length; i++) {
        this.board[y][x + i] = ship;
      }
    } else {
      if (y + ship.length - 1 > 9) y = 9 - ship.length + 1;
      if (!this.checkAvailability(x, y, ship.length, horizontal)) return;
      for (let i = 0; i < ship.length; i++) {
        this.board[y + i][x] = ship;
      }
    }
    this.shipCount++;
  }
  checkAvailability(x, y, length, horizontal = true) {
    if (horizontal) {
      for (let i = 0; i < length; i++) {
        if (this.board[y][x + i] instanceof Ship) return false;
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (this.board[y + i][x] instanceof Ship) return false;
      }
    }
    return true;
  }
  receiveAttack(x, y) {
    // TO Do : prevent illegal moves
    if (this.board[y][x] == "x") {
      console.log("illegal move" + x + y);
      return;
    }
    if (this.board[y][x] instanceof Ship) {
      let ship = this.board[y][x];
      ship.hit();
      //   To Do : add functionality to ship sinking (changing counter  of ships)
      if (ship.isSunk()) {
        this.shipCount--;
        console.log("ship sunk");
      }
    } else {
      console.log("missed");
    }
    this.board[y][x] = "x";
  }
}
