// 12 - Integer_to_Roman.js;
/**
 * @param {number} num
 * @return {string}
 */

let roman = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

const num1 = 3749;
const num2 = 58;
const num3 = 1994;

//? 1.  TC: O(1)  SC : O(1)
/*
Idea is to distribute the given input number into all available Roman letters, giving highest priorty to biggest roman and moving towards lowest.
create all possible mapings
- start iterating from biggest value in mapping
-  divide by the value in roman
- update string accordingly
*/
var intToRoman = function (num) {
  let ans = "";
  // divide by the max number
  let romans = Object.entries(roman).reverse();
  console.log(romans);

  let reminder = 0;
  for (let i = 0; i < romans.length; i++) {
    // loop from last
    reminder = num % romans[i][1];
    quotient = Math.floor(num / romans[i][1]);

    ans += romans[i][0].repeat(quotient);
    quotient = 0;
    num = reminder;
  }

  return ans;
};


console.log(intToRoman(num1));
console.log(intToRoman(num2));
console.log(intToRoman(num3));

//TODO also look for a recursive approach
