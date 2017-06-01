let a = Array(Array(3));

let board = a.concat(a).concat(a);

// #won?, #winner, #empty?(pos), #place_mark(pos, mark)

function won(board) {
  const checkX = (el) => el === 'X';
  const checkY = (el) => el === 'Y';

  for(let i = 0; i < board.length; i++) {
    didWin = board[i].every(checkX) || board[i].every(checkY);
    if (didWin) return true;
  }

  return false;
}
