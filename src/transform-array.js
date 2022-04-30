const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error (`'arr' parameter must be an instance of the Array!`);
  let modifyArray = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next' :
        i += 2;
        continue;
      case '--discard-prev' :
        if (modifyArray.length > 1) modifyArray.pop();
        continue;
      case '--double-next' :
        if (arr.length > i + 1) modifyArray.push(arr[i + 1]); 
        continue;
      case '--double-prev' :
        if (modifyArray.length > 1) modifyArray.push(modifyArray[modifyArray.length - 1]);
        continue;
    }
    modifyArray.push(arr[i]);
  };
  return modifyArray;
}

module.exports = {
  transform
};
