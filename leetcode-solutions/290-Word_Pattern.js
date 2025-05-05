/*
[
  Bolt,
  Amazon,
  Microsoft,
  Facebook,
  Google,
  Adobe,
  Uber,
  Capital - one,
  Dropbox
]
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

const pattern1 = "abba";
const s1 = "dog cat cat dog";

const pattern2 = "abba";
const s2 = "dog cat cat fish";

const pattern3 = "aaaa";
const s3 = "dog cat cat dog";

const pattern4 = "aba";
const s4 = "dog cat cat";

const pattern5 = "abab";
const s5 = "dog cat cat dog";

const pattern6 = "abba";
const s6 = "dog dog dog dog";

/*
we need to match character to word mapping 

*/
var wordPatternOptimal = function (pattern, s) {
  // loop over string and create frequency map
  let strMap = {};
  let sArr = s.split(" ");
  let ans = [];
  for (let i = 0; i < pattern.length; i++) {
    if (strMap[pattern[i]]) {
      ans.push(strMap[pattern[i]]);
    } else {
      if (Object.values(strMap).includes( sArr[i])) {
         return false;
      }
      strMap[pattern[i]] = sArr[i];
      ans.push(sArr[i]);
    }
  }
  console.log(s);

  console.log(ans.join(" "));
  return s === ans.join(" ");
};

console.log(wordPatternOptimal(pattern1, s1));
console.log(wordPatternOptimal(pattern2, s2));
console.log(wordPatternOptimal(pattern3, s3));
console.log(wordPatternOptimal(pattern4, s4));
console.log(wordPatternOptimal(pattern5, s5));
console.log(wordPatternOptimal(pattern6, s6));
