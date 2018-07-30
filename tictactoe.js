const prompt = require('prompt');

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
  player = 1;
  marksOnTheBoard = 0;
  return 'New game created!';
};

const moveMapper = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2]
};

let player = 1;
let marksOnTheBoard = 0;

const makeMove = (player) => {
  console.log('Your turn player: ', player)
  prompt.start();
  prompt.get(['number'], (err, result) => {
    let row = moveMapper[result.number][0];
    let column = moveMapper[result.number][1];
    let mark = '';

    if (player === 1) {
      mark = 'X';
      player = 2
    } else {
      mark = 'O';
      player = 1;
    }

    if (game[row][column] === '') {
      game[row][column] = mark;
      marksOnTheBoard += 1;

      if (marksOnTheBoard === 9) {
        return console.log('Draw Game!');
      }

      makeMove(player);

    } else {
      console.log('Invalid move');
      makeMove(player);
    }

    if (getWinner(mark)) {
      console.log('Congratulations! You Won!');
      return;
    };
  });
}

const getWinner = (mark) => {
  for (let i = 0; i < winPlacements.length; i++) {
    let count = 0;
    let pattern = winPlacements[i];

    for (let j = 0; j < pattern.length; j++) {
      let place = pattern[j];
      let row = moveMapper[place][0];
      let col = moveMapper[place][1];

      if (game[row][col] === mark) {
        count++;

        if (count === 3) {
          return true;
        }
      }
    }
  }
  return false;
}

const winPlacements = [
  [1, 2, 3], [3, 4, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

const renderBoard = () => {
  return console.log(
    `\n~~~~~~~~~~~\n` +
    `| ${game[0][0] || '1'} | ${game[0][1] || '2'} | ${game[0][2] || '3'} |\n` +
    ` -----------\n` +
    `| ${game[1][0] || '4'} | ${game[1][1] || '5'} | ${game[1][2] || '6'} |\n` +
    ` -----------\n` +
    `| ${game[2][0] || '7'} | ${game[2][1] || '8'} | ${game[2][2] || '9'} |\n` +
    ` ~~~~~~~~~~~\n`
  );
}

console.log('\n Welcome, Game Started!');

renderBoard();

makeMove(1);
