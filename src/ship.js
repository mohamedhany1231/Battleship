export default class Ship {
  constructor(length = 2) {
    this.length = length;
    this.hits = 0;
  }
  hit() {
    this.hits++;
    return this;
  }
  isSunk() {
    return this.hits >= this.length;
  }
}
