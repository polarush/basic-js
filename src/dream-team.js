import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let result = '';
  let tempArr = [];
if(members) { 
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
		tempArr.push(members[i].replace(/\s/g, ""))
	  }
  }
  }
  for (let i = 0; i < tempArr.length; i++) {
    result += tempArr[i][0].toUpperCase()
  }
  
  return result.split('').sort().join('') || false;
}