import NPC from "./npc";
import Ship from "./ship";
import { createGame, isGameOver } from ".";

let content = document.getElementById("content");
export default function createBoard(player, enemy) {
  let board = document.createElement("div");
  board.classList.add(`${player.name}`);
  board.classList.add("board");
  content.append(board);
  for (let i = 0; i <= 9; i++) {
    createRow(player, board, i, enemy);
  }
}

function createRow(player, board, rowNumber, enemy) {
  let row = document.createElement("div");
  row.classList.add("row");
  board.append(row);
  for (let i = 0; i <= 9; i++) {
    createCell(player, row, rowNumber, i, enemy);
  }
}

function createCell(player, row, rowNumber, cellNumber, enemy) {
  let cellDiv = document.createElement("div");
  cellDiv.classList.add("cell");
  row.append(cellDiv);

  let cell = player.board.board[rowNumber][cellNumber];
  if (cell == "x") {
    cellDiv.classList.add("npc-hit");
    return cellDiv;
  }
  if (player instanceof NPC) {
    cellDiv.addEventListener("click", () => {
      if (!enemy.attack(player, cellNumber, rowNumber)) return;

      // cellDiv.innerText = "X";
      if (cell instanceof Ship) {
        cellDiv.classList.add("destroyed");
        isGameOver(player, enemy);
      } else cellDiv.classList.add("missed");

      computerAttack(player, enemy);
    });
  } else {
    if (cell instanceof Ship) cellDiv.classList.add("ship");
  }
}
function updateBoard(boardDiv, player, enemy) {
  for (let i = 0; i <= 9; i++) {
    createRow(player, boardDiv, i, enemy);
  }
}
function computerAttack(npc, enemy) {
  npc.attack(enemy);
  isGameOver(npc, enemy);
  let enemyBoard = document.querySelector(`.board.${enemy.name}`);
  enemyBoard.innerHTML = "";
  updateBoard(enemyBoard, enemy, npc);
}

// end game

export function endGame(winner) {
  content.innerHTML = "";
  content.innerHTML = `<div class="end-game"><p> ${winner} WON!</p> <button>play again </div>`;
  content.querySelector("button").addEventListener("click", () => {
    content.innerHTML = "";
    createGame();
  });
}
