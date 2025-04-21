/*Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.
*/

/**
 * @param {string} s
 * @return {number}
 */
const s1 = "abccccdd";
const s2 = "a";
var longestPalindrome = function (s) {
  let freqMap = {};

  // Count frequency of each character
  for (let i = 0; i < s.length; i++) {
    freqMap[s[i]] = (freqMap[s[i]] || 0) + 1;
  }

  let ans = 0;
  let freqArr = Object.values(freqMap);

  // Edge case: Only one type of character
  if (freqArr.length === 1) return freqArr[0];

  // Add even frequencies fully, and for odd ones, add max even part
  freqArr.forEach((value) => {
    if (value % 2 === 0) {
      ans += value;
    } else {
      ans += value - 1;
    }
  });

  // You can use 1 odd character in the center
  if (ans < s.length) ans += 1;

  return ans;
};

console.log(longestPalindrome(s1));
console.log(longestPalindrome(s2));

// 1 . Intution
/*
make a frequency map
now loop ov frequency mp
- agar frequency even hai to vo puri count ho jayegi palindrom bna legi
- agar frequency odd hai to usk even part use kr lenge  palindrom bnane mi

- exception mentioned in ans
*/