/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.
*/
const s1 = "abcde";
const goal1 = "cdeab";

const s2 = "abcde";
const goal2 = "abced";
var rotateString = function (s, goal) {
  let length = s.length;
  // shift and compare
  for (let i = 0; i < length; i++) {
    let shiftedString = shift(s, i);
    if (shiftedString === goal) {
      return true;
    }
  }
  return false;
};

function shift(str, times) {
  for (let j = 1; j <= times; j++) {
    let strArr = str.split("");
    let temp = strArr[0];
    let arrLength = strArr.length;
    // shift 1
    for (let i = 0; i < arrLength - 1; i++) {
      strArr[i] = strArr[i + 1];
    }
    strArr[arrLength - 1] = temp;
    str = strArr.join("");
  }
  return str;
}

console.log(rotateString(s1, goal1));
console.log(rotateString(s2, goal2));


// 2.
// TC : O(N2) SC: O(N)
var rotateStringOptimal = function (s, goal) {
  let sArr = s.split("");
  console.log("sArr", sArr);
  // rotate one and compare
  for (let i = 0; i < sArr.length; i++) {
    // rotate first se nikalo , last mai add karo
    let val = sArr.shift();
    console.log("val", val);

    sArr.push(val);
    console.log(sArr.join(""));
    console.log("goal", goal);
    let current = sArr.join("");
    // compare with goal
    if (current === goal) {
      return true;
    }
  }
  return false;
};

console.log(rotateStringOptimal(s1, goal1));
console.log(rotateStringOptimal(s2, goal2));



//? 3 O(N) approach  
/*
Intuition
The key insight is that when you concatenate a string with itself (s + s), it contains all possible rotations of the original string.

For example, if s = "abcde", then s + s = "abcdeabcde" contains all rotations: "abcde", "bcdea", "cdeab", "deabc", "eabcd".
*/

// JavaScript
function rotateString(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    return (s + s).includes(goal);
}