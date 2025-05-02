/*
Given a character array s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by a single space.

Your code must solve the problem in-place, i.e. without allocating extra space.
*/

/**
 * @param {string[]} s
 * @return {string}
 */
const s1 = [
  "t",
  "h",
  "e",
  " ",
  "s",
  "k",
  "y",
  " ",
  "i",
  "s",
  " ",
  "b",
  "l",
  "u",
  "e",
];
const s2 = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
const s3 = [
  "a",
  " ",
  "g",
  "o",
  "o",
  "d",
  " ",
  "e",
  "x",
  "a",
  "m",
  "p",
  "l",
  "e",
];

//? 1. Two Pointers approach TC: O(N) SC O(1)
/*
- Use two pointer 1 for start and one for end
- keep moving end untill you find a space
- as soon as space found => reverse the string from start to end
- now update start and end to next index of space 
- continue the process untill reach last index
- handle exception of last string 
*/
function swipe(str, ind1, ind2) {
  while (ind1 < ind2) {
    [str[ind1], str[ind2]] = [str[ind2], str[ind1]];
    ind1++;
    ind2--;
  }
}
var reverseWords = function (s) {
  // reverse complete string

  let start = 0;
  let end = s.length - 1;
  swipe(s, start, end);
  console.log("Reverse 1", s);

  // then reverse each word using two pointer approach
  let pStart = 0;
  let pEnd = 0;

  for (let i = 0; i < s.length; i++) {
    let currentElement = s[i];
    if (currentElement === " ") {
      // swipe from pstart to pend
      swipe(s, pStart, pEnd - 1);
      console.log(s);
      pStart = i + 1;
      pEnd = i + 1;
    } else {
      pEnd++;
    }
  }
  swipe(s, pStart, s.length - 1);

  return s;
};

let ans1 = reverseWords(s1);
let ans2 = reverseWords(s2);
let ans3 = reverseWords(s3);

console.log(ans1);
console.log(ans2);
console.log(ans3);
