// const prompt = require('prompt');
//
// prompt.start();

// create a function that creates the board

const buildBoard = () => {
  return [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
}

// current game
let game = buildBoard();

// restart game
let restart = () => {
  game = buildBoard();
  return 'New game created!';
}

const makeMove = (row, column, mark) => {
  if (game[row][column] === '') {
    game[row][column] = mark;
  } else {
    console.log('Invalid move');
  }

  renderBoard();
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
makeMove(0, 0, 'X');
console.log(renderBoard());
