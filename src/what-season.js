const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const seasons = ['winter', 'spring', 'summer', 'fall'];
  let currentSeason = '';
  if (!date) return 'Unable to determine the time of year!';
  if( !date.toDateString()) return new Error();
  const month = date.getMonth();


  switch (month) {
    case 0:
    case 1:
    case 11:
      currentSeason = seasons[0];
      break;
    case 2:
    case 3:
    case 4:
      currentSeason = seasons[1];
      break;
    case 5:
    case 6:
    case 7:
      currentSeason = seasons[2];
      break;
    case 8:
    case 9:
    case 10:
      currentSeason = seasons[3];
      break;
    default: throw new Error;


  }

  return currentSeason;
};
