import { NotImplementedError } from '../extensions/index.js';
'use strict'
/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */


export default function transform(arr) {

   if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

    let res = [];
    let temp = null;

    for(let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (element === '--discard-next') {
            temp = element;
            continue;
        }

        if (element === '--discard-prev') {
            res.pop();
            continue;
        }

        if (element === '--double-next') {
            temp = element;
            continue;
        }

        if (element === '--double-prev') {
            if (i > 0){
              res.push(arr[i-1]);
              continue;
            }
        }

        else if (temp == '--discard-next') {
            temp = null;
            continue;            
        }

        if (temp == '--double-next') {
            res.push(arr[i]);
            res.push(arr[i]);
            temp = null;
            continue;            
        }
        
        res.push(arr[i]);        
    }

    return res; 




   
}

