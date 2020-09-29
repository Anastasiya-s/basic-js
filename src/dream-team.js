const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let dreamTeamName = '';
  const gettingTeamName = array => array.sort().join('');
  const validate = str => typeof str === 'string'? true : false;    
  const chars = members
    .map(member => {
      return validate(member) ? 
      member.trim().slice(0, 1).toUpperCase()
      : ''
    })
    .filter(char => Boolean(char));
  
  dreamTeamName = gettingTeamName(chars);
  return dreamTeamName;
};
