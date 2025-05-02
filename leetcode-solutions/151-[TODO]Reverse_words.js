/*
Given an input string s, reverse the order of the words.
*/
/**
 * @param {string} s
 * @return {string}
 */
const s1 = "the sky is blue";
const s2 = "  hello world  ";
const s3 = "a good   example";


// TC & SC = O(N)
var reverseWords = function (s) {
  // remove extra space around
  let clearString = s.trim();
  // now reverse the array
  let stringArray = clearString.split(" ").reverse();
  console.log(stringArray);
  // remove extra space
  let finalArray = stringArray.filter((item) => item != "");
  let ans = finalArray.join(" ");
  return ans;
};

let ans1 = reverseWords(s1);
let ans2 = reverseWords(s2);
let ans3 = reverseWords(s3);

console.log(ans1);
console.log(ans2);
console.log(ans3);


// TODO : Need to try the solution in place withought any extra space O(1)