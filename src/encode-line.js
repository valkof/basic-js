const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let stroka = '';
  let subStroka = '';
  str.split('').forEach((el, i) => {
    if (subStroka == '') {
      subStroka = el;
    } else if (el == subStroka[0]) {
      subStroka += el;
    } else {
      if (subStroka.length == 1) {
        stroka += subStroka;
      } else {
        stroka += subStroka.length + subStroka[0];
      }
      subStroka = el;
    }
    if (i == str.length - 1) {
      if (subStroka.length == 1) {
        stroka += subStroka;
      } else {
        stroka += subStroka.length + subStroka[0];
      }
    }

  });
  return stroka;
}

module.exports = {
  encodeLine
};
