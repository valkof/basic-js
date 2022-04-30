const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return backyard.reduce((sum, row) => {
    return row.reduce((sum, el) => {
      (el === '^^') ? sum++ : sum;
      return sum;
    }, sum);
  }, 0)
}

module.exports = {
  countCats
};
