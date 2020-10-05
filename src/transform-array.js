const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!arr) return new Error('error');
  if (!Array.isArray(arr)) return new Error();
  if (!arr.includes('--discard-prev') && !arr.includes('--discard-prev')) return arr;
  let toChange = [...arr];

  toChange.forEach((item, i, array) => {
    if (item === '--discard-prev') {
      if( i === 0 ) {

      	array.splice(i, 1);
        return
      }
      array.splice(i - 1, 2)
      return
    }
    if (item === '--double-prev') {
      if( i === 0 ) {
      	array.splice(i, 1);
        return
      }
      array.splice(i, 1, array[i - 1])
      return
    }
	  if (item === '--discard-next') {
      if (i === array.length) {
    	  array.splice(i, 1);
    		return
 			}
      array.splice(i, 2)
    }
    if (item === '--double-next') {
      if (i === array.length) {
      	array.splice(i, 1)
      	return;
      }
      array.splice(i, 2, array[i + 1])
      return
    } 
  })
  console.log(toChange)
};
