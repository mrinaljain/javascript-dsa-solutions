/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

*/
const strs1 = ["flower", "flow", "flight"];
const strs2 = ["dog", "racecar", "car"];
const strs3 = ["a"];

//? 1. Travers every character  TC: O(N * L)
/*
DO DRY ruN to understand working easily
since we need to check all the strings we will loop over every item and wvwry character
- Oter loop for length of first string
- inner loop for copmaring iTH charecter of string with iTH character of every word in array .

- if equal then add to answer
- if unequal then stop and return answer.

*/

var longestCommonPrefix = function (strs) {
  let N = strs.length;
  let L = strs[0].length;
  let ans = "";
  if (strs.length === 1 && strs[0].length === 0) {
    return ans;
  }
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return ans;
      }
    }
    ans += char;
  }
  return ans;
};

console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));
