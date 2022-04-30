const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = matrix.slice().map(row => {
    return row.map(el => 0);
  });
  matrix.forEach((row, i) => {
    row.forEach((el, j) => {
      if (i > 0) arr[i - 1][j] += Number(el);
      if (i > 0 && j < row.length - 1) arr[i - 1][j + 1] += Number(el);
      if (j < row.length - 1) arr[i][j + 1] += Number(el);
      if (i < matrix.length - 1 && j < row.length - 1) arr[i + 1][j + 1] += Number(el);
      if (i < matrix.length - 1) arr[i + 1][j] += Number(el);
      if (i < matrix.length - 1 && j > 0) arr[i + 1][j - 1] += Number(el);
      if (j > 0) arr[i][j - 1] += Number(el);
      if (i > 0 && j > 0) arr[i - 1][j - 1] += Number(el);
    })
  })
  return arr;
}

module.exports = {
  minesweeper
};
