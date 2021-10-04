import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {


  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(input, key) {

    if (!input) {
      throw new Error('Incorrect arguments!');
    }
    if (!key) { 
      throw new Error('Incorrect arguments!'); 
    }

    input = input.toUpperCase();
    key = key.repeat(Math.ceil(input.length/key.length)).toUpperCase();

    let firstChar = 65
    let alphabetLen = 26;

    let res = [];

      for (let i = 0; i < input.length; i++) {
        if (input[i].charCodeAt(0) < 65) {
          res.push(input[i]);
          input = input.replace(input[i], '');
          i--;

        } 
        else if (input[i].charCodeAt(0) > 90) {
          res.push(input[i]);
          input = input.replace(input[i], '');
          i--;

        }
        else {
          let letterId = input.charCodeAt(i) - firstChar;
          let shift = key.charCodeAt(i) - firstChar;
          res.push(String.fromCharCode(firstChar + (letterId + shift) % alphabetLen));
        }

      }

    if (this.direct) {
      return res.join('')
    }
    else {
      return res.reverse().join('');
    }
  }

  decrypt(input, key) {
    if (!input) {
      throw new Error('Incorrect arguments!');
    }
    if (!key) { 
      throw new Error('Incorrect arguments!'); 
    }

    input = input.toUpperCase();
    key = key.repeat(Math.ceil(input.length/key.length)).toUpperCase();

    let firstChar = 65
    let alphabetLen = 26;

    let res = [];

      for (let i = 0; i < input.length; i++) {
        if (input[i].charCodeAt(0) < 65) {
          
          res.push(input[i]);
          input = input.replace(input[i], '');
          i--;
        
        }
        else if (input[i].charCodeAt(0) > 90) {
          res.push(input[i]);
          input = input.replace(input[i], '');
          i--;
        
        } 
        else {
        
          let letterId = input.charCodeAt(i) - firstChar;
          let shift = key.charCodeAt(i) - firstChar;
          res.push(String.fromCharCode(firstChar + (letterId - shift + alphabetLen) % alphabetLen));
        
        }
      }

    if (this.direct) {
      return res.join('')
    }
    else {
      return res.reverse().join('');
    }


  }
}
