const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.isReverse = direct === 'false' ? true : false
    this.message = ''
  }
  encrypt(str, key) {
   if (!str || !key) return new Error()

  }    
  decrypt(str, key) {
    if (!str || !key) return new Error()
  }
}

module.exports = VigenereCipheringMachine;
