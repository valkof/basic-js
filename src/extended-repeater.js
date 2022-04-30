const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  let addition = '';
  if (options.hasOwnProperty('addition')) addition = String(options.addition);
  
  let arrStr = [], arrAdd = []
  for (let j = 0; j < additionRepeatTimes; j++) {
    arrAdd.push(String(addition));
    
  }
  let strokaAdd = arrAdd.join(additionSeparator);
  for (let i = 0; i < repeatTimes; i++) {
     arrStr.push(String(str) + strokaAdd);
  }
  return arrStr.join(separator);
}

module.exports = {
  repeater
};
