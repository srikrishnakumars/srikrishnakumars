let currentPlayer = "X";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function handleMove(row, col) {
  if (!board[row][col]) {
    board[row][col] = currentPlayer;
    document.getElementById("board").children[row].children[col].textContent = currentPlayer;
    checkWinner();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function newGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  currentPlayer = "X";
  Array.from(document.getElementsByClassName("cell")).forEach(cell => {
    cell.textContent = "";
  });
}

function checkWinner() {
  const winningCombos = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
      alert(`${board[a[0]][a[1]]} wins!`);
      newGame();
      return;
    }
  }

  if (board.every(row => row.every(cell => cell))) {
    alert("It's a draw!");
    newGame();
  }
}
