/*
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.
[Amazon Apple Microsoft Google Linkedin Expedia Uber Facebook Bloomberg]

*/

/**
 * @param {string} s
 * @return {string}
 */

const s1 = "tree";

const s2 = "cccaaa";

//? 1. TC: O(NLogN) SC: O(N)
var frequencySort = function(s) {
    // make frequency map
    let freqMap = {};
   for (let i = 0; i < s.length; i++) {
      freqMap[s[i]] =    (freqMap[s[i]] ?? 0) +1;
   }
   // console.log(freqMap);
   
   // convert to array of key values
   let freqArry = Object.entries(freqMap);

   // loop on the key values to sort as per frequency

   freqArry.sort((a , b) => b[1] - a[1]);

   // now create the string based on the new array 
   let ans ="";
   for (let i = 0; i < freqArry.length; i++) {
      let char = freqArry[i][0];
      ans += char.repeat(freqArry[i][1]);
   }
   return ans;
};

console.log(frequencySort(s1));
console.log(frequencySort(s2));


//TODO: understand Time complexity calculatiion