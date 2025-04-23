/*
An alphabetical continuous string is a string consisting of consecutive letters in the alphabet. In other words, it is any substring of the string "abcdefghijklmnopqrstuvwxyz".

For example, "abc" is an alphabetical continuous string, while "acb" and "za" are not.
Given a string s consisting of lowercase letters only, return the length of the longest alphabetical continuous substring.
*/

/**
 * @param {string} s
 * @return {number}
 */

s1 = "abacaba";
s2 = "abcde";
var longestContinuousSubstring = function (s) {
  // two pointers agar aage vale bada hai to chalne do otherwise reset krdo (max update yahi hoga)
  let maxLength = 0;
  let length = 1;
  
  for (let i = 0; i < s.length - 1; i++) {
    let current = s.charCodeAt(i);
    let next = s.charCodeAt(i + 1);
    
    if (next === current+1) {
      length++;      
    } else {
      maxLength = Math.max(maxLength, length);
      length = 1;
    }
  }
   maxLength = Math.max(maxLength, length);

  return maxLength;
};

console.log(longestContinuousSubstring(s1));
console.log(longestContinuousSubstring(s2));


//? 1.  Optial approach TC: O(N)  SC: O(1)
/*
Alphabetical check krna hai so
run a loop and check if current elelemnt ka code  is one less then next ka code, to length badhate jaao 

agar nhi hai to  max length ko reset kr do
*/