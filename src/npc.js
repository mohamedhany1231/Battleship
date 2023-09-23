import Player from "./player";
export default class NPC extends Player {
  constructor() {
    super("computer");
    this.attacks = Array.from({ length: 100 }, (elm, i) => i);
  }
  attack(player) {
    let index = Math.floor(Math.random() * this.attacks.length);
    var num = this.attacks[index];
    let x = num % 10;
    let y = (num - x) / 10;
    player.board.receiveAttack(x, y);
    this.attacks.splice(index, 1);
    return { x: x, y: y };
  }
}
