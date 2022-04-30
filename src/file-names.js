const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrFile = [];
  names.forEach(el => {
    if (arrFile.indexOf(el) < 0) {
      arrFile.push(el);
      return;
    };
    let i = 1;
    while (arrFile.indexOf(`${el}(${i})`) >= 0) {
      i++;
    };
    arrFile.push(`${el}(${i})`);
  });
  return arrFile;
}

module.exports = {
  renameFiles
};
