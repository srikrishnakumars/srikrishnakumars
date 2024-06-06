let boardState = [];
const emptySymbol = ".";

function generateNewGame() {
  boardState = generateEmptyBoard();
  generatePuzzle(boardState);
  renderBoard();
}

function generateEmptyBoard() {
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push(Array(9).fill(emptySymbol));
  }
  return board;
}

function generatePuzzle(board) {
  solveSudoku(board); // Solve a complete Sudoku puzzle
  removeCells(board, 40); // Remove cells to create a puzzle
}

function solveSudoku(board) {
  const emptyCell = findEmptyCell(board);
  if (!emptyCell) {
    return true; // Sudoku solved
  }

  const [row, col] = emptyCell;
  for (let num = 0; num < 9; num++) {
    const letter = String.fromCharCode(65 + num); // Convert number to letter (A-I)
    if (isValidMove(board, row, col, letter)) {
      board[row][col] = letter;
      if (solveSudoku(board)) {
        return true;
      }
      board[row][col] = emptySymbol; // Backtrack
    }
  }
  return false; // No solution found
}

function findEmptyCell(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === emptySymbol) {
        return [row, col];
      }
    }
  }
  return null; // No empty cell found
}

function isValidMove(board, row, col, letter) {
  return (
    isRowValid(board, row, letter) &&
    isColValid(board, col, letter) &&
    isBoxValid(board, row - (row % 3), col - (col % 3), letter)
  );
}

function isRowValid(board, row, letter) {
  return !board[row].includes(letter);
}

function isColValid(board, col, letter) {
  for (let row = 0; row < 9; row++) {
    if (board[row][col] === letter) {
      return false;
    }
  }
  return true;
}

function isBoxValid(board, startRow, startCol, letter) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row + startRow][col + startCol] === letter) {
        return false;
      }
    }
  }
  return true;
}

function removeCells(board, numToRemove) {
  let cellsRemoved = 0;
  while (cellsRemoved < numToRemove) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (board[row][col] !== emptySymbol) {
      board[row][col] = emptySymbol;
      cellsRemoved++;
    }
  }
}

function renderBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = boardState[i][j];
      board.appendChild(cell);
    }
  }
}

function checkSolution() {
  // Solution checking logic
}

window.onload = generateNewGame;
