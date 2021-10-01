import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  
  const seasons = ['winter', 'spring', 'summer', 'autumn']
  if(date) {
    try {
      date.getTime();
    } catch (error) {
      throw new Error("Invalid date!");
    }
  }
  
  if (date) {

  if (date.getMonth() >= 11 || date.getMonth() <= 1) {
    return seasons[0]; 
  }
  else if (date.getMonth() >= 2 && date.getMonth() <= 4) { 
    return seasons[1]; 
  }
  else if (date.getMonth() >= 5 && date.getMonth() <= 7) { 
    return seasons[2]; 
  }
  else if (date.getMonth() >= 8 && date.getMonth() <= 10) { 
    return seasons[3]; 
  }

  }
  
  else return "Unable to determine the time of year!";

}
