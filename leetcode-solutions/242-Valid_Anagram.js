/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

[Affirm, Expedia, Docusign, Yahoo, Cisco, Servicenow, Goldman Sachs, Amazon, Microsoft, Oracle, Morgan-stanley, Uber, Spotify, Zulily, Google, Paypal, Snapchat, Apple, Goldman-sachs, Yelp, Facebook, Bloomberg]

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const s1 = "anagram";
const t1 = "nagaram";
const s2 = "rat";
const t2 = "car";

//? 1.   TC: O(N+M)   SC = O(N+M)
var isAnagram = function (s, t) {
  // match frequency
  // create frequence map for both
  // match one from other

  // Edge case  if length is unequal
  let sL = s.length;
  let tL = t.length;
  if (sL !== tL) return false;

  let freqS = {};
  let freqT = {};

  for (let i = 0; i < s.length; i++) {
    freqS[s[i]] = (freqS[s[i]] ?? 0) + 1;
    freqT[t[i]] = (freqT[t[i]] ?? 0) + 1;
  }

  // now loop on arraypairs of each

  for (const key in freqS) {
    if (freqT[key] !== freqS[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram(s1, t1));
console.log(isAnagram(s2, t2));

//? 2. sort and compare : easy pessy
//? 3. takeyouforward


// TODO : Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
// Problem: unicode ko directly frequency maps mai nhi convert kr sakte kyuki unicode ek nhi multiple character se bane hote hai to s[i] krne jayenge to aadha adhura item aayega
// Example
// '💙'.length // 2 — not 1!
'💙'[0]     // Returns half of the emoji (invalid)
// Solution: Use Array.from(string) or spread operator [...string]
// These methods handle full Unicode characters correctly.
// once you have array then start same solution from creating frequency map