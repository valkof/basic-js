const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let masS1 = s1.split('');
  let masS2 = s2.split('');
  return masS1.reduce((sum, el) => {
    let i = masS2.indexOf(el);
    if (i >= 0) {
      masS2.splice(i, 1);
      return ++sum;
    } else return sum;
  }, 0)
}

module.exports = {
  getCommonCharacterCount
};
