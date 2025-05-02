/*
Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
*/

/**
 * @param {string} s
 * @return {string}
 */

const s1 = "(()())(())";
const s2 = "(()())(())(()(()))";
const s3 = "()()";

var removeOuterParentheses = function(s) {
  
   
   // if pair skip 2
   // if start
   let ans="";

   for (let i = 0; i < s.length; i++) {
      const currentElement = s[i];
      const nextElement = s[i+1];

      
   }
};


//?1 STACK approach