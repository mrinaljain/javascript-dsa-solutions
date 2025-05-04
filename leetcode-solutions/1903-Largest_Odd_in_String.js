/*
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.
*/

/**
 * @param {string} num
 * @return {string}
 */

const num1 = "52";
const num2 = "4206";
const num3 = "35427";


//? 1. Optimal TC: O(N)  SC: O(1)
/*
loop in reverse
- as soon as you find a odd number stop there, because that is the ans
- return the string till that odd number
- if no odd found then return empty string
*/
var largestOddNumber = function (num) {
  let ans = "";
    for (let i = num.length-1; i >=0; i--) {
      const element = parseInt(num[i]);
      if(element % 2 !== 0){
         console.log("answer mill gya");
         
         ans = num.slice(0, i+1);
         return ans;
      }
      
    }
  return ans;
};

console.log(largestOddNumber(num1));
console.log(largestOddNumber(num2));
console.log(largestOddNumber(num3));


