/*
Given a string s, find the length of the longest substring without duplicate characters.
* @param {string} s
* @return {number}
*/


let s1 = "abcabcbb";
let s2 = "pwwkew";
let s3 = "bbbbb";
let s4 = "aab";
let s5 = "dvdf";

var lengthOfLongestSubstring = function (s) {
  // run loop from start to end keeping a window , two pointers

  let left = 0;
  let right = 0;
  let maxLen = 0;
  let freqMap = {};

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    // if element not in map
    if (!freqMap[element]) {
      let currentLength = right - left;
      maxLen = Math.max(currentLength, maxLen);
      // add element to map
      freqMap[element] = true;
      right++;
    } else {
      // if element in map
      // reset the frequency
      left++;
    }
  }
};

lengthOfLongestSubstring(s1);
lengthOfLongestSubstring(s2);
lengthOfLongestSubstring(s3);
lengthOfLongestSubstring(s4);
lengthOfLongestSubstring(s5);

//? 1. Brute Force
/*
Generate all possible substrings & check for each substring if it's valid and keep updating maxLen accordingly.
*/