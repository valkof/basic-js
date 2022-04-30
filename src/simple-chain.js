const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  array: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.array.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    try {
      if (+position < 1 || +position > this.array.length || +position % 1 !== 0) throw new Error(`You can't remove incorrect link!`);
      this.array.splice(position - 1, 1);
      return this;
    } catch (e) {
      this.array = [];
      throw new Error(`You can't remove incorrect link!`);
    };
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.array.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let response = this.array.map(el => `( ${el} )`).join('~~');
    this.array = [];
    return response;
  }
};

module.exports = {
  chainMaker
};
