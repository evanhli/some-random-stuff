/*
  Given a sudoku board, check whether it is valid
  Empty cells are filled with '.'

  LL:
    May want to refactor out the rows and cols logic initially, or understand that it can be refactored to get it shorter
*/

const ROWS = 9;
const COLS = 9;
const isValidSudoku = function(board) {
  // check rows
  const set = new Set();
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const val = board[i][j];
      if (val !== '.') {
        if (set.has(val)) return false
        set.add(val);
      }
    }
    set.clear();
  }

  // check cols
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      const val = board[j][i];
      if (val !== '.') {
        if (set.has(val)) return false
        set.add(val);
      }
    }
    set.clear();
  }

  // check grid
  for (let i = 0; i < ROWS; i += 3) {
    for (let j = 0; j < COLS; j += 3) {
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          const val = board[k][l];
          if (val !== '.') {
            if (set.has(val)) return false
            set.add(val);
          }
        }
      }
      set.clear();
    }
  }
  return true;
}
