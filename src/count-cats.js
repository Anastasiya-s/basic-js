const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let catsCounter = 0;
  const catEars = '^^';
  for (i in arr) {
    arr[i].reduce((prev, next) => {if (next === catEars) catsCounter++}, catsCounter)
  } 
  return catsCounter;
};
