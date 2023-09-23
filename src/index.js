import NPC from "./npc";
import Player from "./player";
import createBoard, { endGame } from "./interface";

export function createGame() {
  let player1 = new Player("YOU");
  let npc = new NPC();

  player1.placeTitan();
  player1.placeMiniTitan();
  player1.placeNormalShip();
  player1.placeSmallestShip();

  npc.placeTitan();
  npc.placeMiniTitan();
  npc.placeNormalShip();
  npc.placeSmallestShip();

  createBoard(player1, npc);
  createBoard(npc, player1);
}
export function isGameOver(player1, player2) {
  if (player1.board.shipCount == 0) {
    endGame(player2.name);
    return true;
  } else if (player2.board.shipCount == 0) {
    endGame(player1.name);
    return true;
  }
  return false;
}

createGame();
