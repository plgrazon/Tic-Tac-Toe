// create a function that creates the board

const buildBoard = () => {
  return [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
}

let game = buildBoard();
// create a function that will create a mark on the board

const makeMove = (row, column, board) => {
  board[row][column] = 'O';
}

const renderBoard = () => {
  console.log(
    `  0 1 2\n` +
    ` ~~~~~~~\n` +
    `0|${game[0][0] || ' '}|${game[0][1] || ' '}|${game[0][2] || ' '}|\n` +
    ` -------\n` +
    `1|${game[1][0] || ' '}|${game[1][1] || ' '}|${game[1][2] || ' '}|\n` +
    ` -------\n` +
    `2|${game[2][0] || ' '}|${game[2][1] || ' '}|${game[2][2] || ' '}|\n` +
    ` ~~~~~~~`
  );
}

console.log(renderBoard());
