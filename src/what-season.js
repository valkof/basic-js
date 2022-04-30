const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //throw 'Invalid date!';
  if (arguments.length < 1) return 'Unable to determine the time of year!';
  /*if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Error');
  };*/
  try {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const begYear = new Date(year, 0, 1);
    const endYear = new Date(year, 11, 32);
    const begSpring = new Date(year, 2, 1);
    const begSummer = new Date(year, 5, 1);
    const begAutumn = new Date(year, 8, 1);
    const begWinter = new Date(year, 11, 1);
    if ((date >= begYear && date < begSpring) || (date >= begWinter && date <= endYear)) {
      return 'winter';
    } else if (date >= begSpring && date < begSummer) {
      return 'spring';
    } else if (date >= begSummer && date < begAutumn) {
      return 'summer';
    } else {
      return 'autumn';
    };
  } catch (err) {
      throw new Error("Invalid date!")
  }
}

module.exports = {
  getSeason
};
