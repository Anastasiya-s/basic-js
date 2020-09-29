const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'}) {
  let string = String(str);
  let add = '';
  if (String(addition)) {
    const toAdd = String(addition)
    add = additionRepeatTimes > 1 ? Array(additionRepeatTimes).fill(toAdd).join(additionSeparator) : toAdd;
    string += add;
  } 
  newString = repeatTimes > 1 ? Array(repeatTimes).fill(string).join(separator) : string;  
  return newString
};
  