// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order


/*
  Idea, set let up right and down bounds, when we reach the bound move to the next direction

  right
  down
  up
  left

  for each index define a movement
  set an enum for direciton moving in

  LL:
  As with most array problems, index checks will get you
  Be careful and VISUALIZE exactly how your checks are going to work before you code it.
  Also should lay out your solution in a few words/sentences before implementation so you don't
  forget anything, such as squeezing the bounds down
*/

const RIGHT = 'RIGHT';
const DOWN = 'DOWN';
const LEFT = 'LEFT';
const UP = 'UP';

const spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  let currentDirection = RIGHT;
  let index = 0;
  let numCells = matrix.length * matrix[0].length;
  let ret = [];

  let rightBound = matrix[0].length - 1
  let lowBound = matrix.length - 1;
  let leftBound = 0;
  let upBound = 1;

  let i = 0;
  let j = 0;
  while (index < numCells) {
    ret.push(matrix[i][j]);
    switch (currentDirection) {
      case RIGHT:
        if (j >= rightBound) {
          currentDirection = DOWN;
          i++
          rightBound--;
        } else j++;
        break;
      case DOWN:
        if (i >= lowBound) {
          currentDirection = LEFT;
          j--;
          lowBound--;
        } else i++;
        break;
      case LEFT:
        if (j <= leftBound) {
          currentDirection = UP;
          i--;
          leftBound++;
        } else j--;
        break;
      case UP:
        if (i <= upBound) {
          currentDirection = RIGHT;
          j++
          upBound++;
        } else i--;
        break;
      default:
    }
    index++;
  }
  console.log(ret);
  return ret;
}


// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ];

// let arr = [
//   [1],
//   [5],
//   [9],
//   [13]
// ];

// let arr = [
//   [1, 2, 3, 4, 5]
// ];

// [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

spiralOrder(arr);
