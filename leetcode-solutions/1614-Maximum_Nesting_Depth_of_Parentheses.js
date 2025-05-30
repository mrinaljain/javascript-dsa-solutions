/*
Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.
[ Bloomberg, Facebook ]
*/

/**
 * @param {string} s
 * @return {number}
 */

const s1 = "(1+(2*3)+((8)/4))+1";
const s2 = "(1)+((2))+(((3)))";
const s3 = "()(())((()()))";

//? 1. TC : O(N)  SC: O(1)
var maxDepth = function (s) {
  //loop through entire string
  // we will use stack logic here
  // for every opening bracket we will increase depth
  // for every clossing bracket we will decreese depth
  // at every increase we will also update max depth

  let currentDepth = 0;
  let maxDep = 0;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === "(") {
      currentDepth++;
      maxDep = Math.max(maxDep, currentDepth);
    }
    if (element === ")") {
      currentDepth--;
    }
  }

  return maxDep;
};

console.log(maxDepth(s1));
console.log(maxDepth(s2));
console.log(maxDepth(s3));
