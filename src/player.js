import GameBoard from "./gameBoard";

export default class Player {
  constructor(name) {
    this.name = name;
    this.turn = true;
    this.board = new GameBoard();
  }

  toggleTurn() {
    this.turn = !this.turn;
  }
  attack(player, x, y) {
    return player.board.receiveAttack(x, y);
  }
  placeTitan(
    x = Math.floor(Math.random() * 10),
    y = Math.floor(Math.random() * 10),
    horizontal = Boolean(Math.floor(Math.random() * 2))
  ) {
    if (this.board.placeShip(5, x, y, horizontal)) return true;
    return this.placeTitan();
  }
  placeMiniTitan(
    x = Math.floor(Math.random() * 10),
    y = Math.floor(Math.random() * 10),
    horizontal = Boolean(Math.floor(Math.random() * 2))
  ) {
    if (this.board.placeShip(4, x, y, horizontal)) return true;
    return this.placeMiniTitan();
  }
  placeNormalShip(
    x = Math.floor(Math.random() * 10),
    y = Math.floor(Math.random() * 10),
    horizontal = Boolean(Math.floor(Math.random() * 2))
  ) {
    if (this.board.placeShip(3, x, y, horizontal)) return true;
    return this.placeNormalShip();
  }
  placeSmallestShip(
    x = Math.floor(Math.random() * 10),
    y = Math.floor(Math.random() * 10),
    horizontal = Boolean(Math.floor(Math.random() * 2))
  ) {
    if (this.board.placeShip(2, x, y, horizontal)) return true;
    return this.placeSmallestShip();
  }
}
