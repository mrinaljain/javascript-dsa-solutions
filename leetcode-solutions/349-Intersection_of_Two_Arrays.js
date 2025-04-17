/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let num1 = [1, 2, 2, 1];
let num2 = [2, 2];
let num3 = [4, 9, 5];
let num4 = [9, 4, 9, 8, 4];

var intersection = function (nums1, nums2) {
  let ans = [];
  let numOne = [...new Set(nums1)];
  let numTwo = [...new Set(nums2)];
//   console.log(numOne);
//   console.log(numTwo);

  if (numOne.length < numTwo.length) {
    for (let i = 0; i < numOne.length; i++) {
      if(numTwo.includes(numOne[i])){
         ans.push(numOne[i]);
      }
    }
  } else {
    for (let i = 0; i < numTwo.length; i++) {
      if (numOne.includes(numTwo[i])) {
          ans.push(numTwo[i]);
      }
    }
  }

   return ans;
};

console.log(intersection(num1, num2));
console.log(intersection(num3, num4));

// Intutiion
/*
pehle dono arry ko unique bana lo

phir loop laga ke ans mai push kr do (condition being item dono array mai honi chahiye)
*/

// 2. small array k elements ko big array me dhund dhund k answer mai push krte jaao

//? 3 Two pointers approach  T.C = O(m+n) S.C = O(1)
