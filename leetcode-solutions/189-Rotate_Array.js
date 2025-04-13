/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
nums = [1,2,3,4,5,6,7], k = 3

*/
let nums1 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 3;

let nums2 = [1, 2, 3, 4, 5, 6, 7];
let k2 = 9;

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
var rotate = function (nums, k) {
  let length = nums.length;
  if (length <= 1 || k === 0 || k % length === 0) return;

  let start = 0;
  let end = length - 1;
  // full reverse in place
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
  k = k % length;

  // now 2 inplace reverses
  let s1 = 0;
  let e1 = k - 1;
  while (s1 < e1) {
    swap(nums, s1, e1);
    s1++;
    e1--;
  }
  let s2 = k;
  let e2 = length - 1;
  while (s2 < e2) {
    swap(nums, s2, e2);
    s2++;
    e2--;
  }
};

rotate(nums1, k1);
rotate(nums2, k2);


// 1. Brute force approach
/* create a temp array of k size 
move first k elements to it
now shift the existing array elements to starting
now add the temp aray to end of existing array
*/

// intution for optimal approach
/*  
Aarray rotate krna hai to simply 
reverse entire array
then reverse 2 sub array [0 - k] [k - end]
*/
// ! Remember to do swapping with destructuring to avoid memory limit error
//! also remember do not use direct Array.reverse , because it returns new array and we require in-place operation here
// https://www.youtube.com/watch?v=BHr381Guz3Y
