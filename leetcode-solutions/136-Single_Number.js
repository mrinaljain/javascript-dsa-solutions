/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

let nums1 = [2, 2, 1];
let nums2 = [4, 1, 2, 1, 2];
let nums3 = [1];
var singleNumber = function(nums) {
   
   // create an object

   // then loop on object to find i frequency wala object using filter


   let hashMap = {}

   for (let i = 0; i < nums.length; i++) {
      hashMap[nums[i]] = (hashMap[nums[i]] || 0 ) +1 ;    
   }

   // console.table(hashMap);

  let ans =  Object.entries(hashMap).filter(([key, value])=>value === 1);
   
  return ans[0][0];
   
};

console.log(singleNumber(nums1));
console.log(singleNumber(nums2));
console.log(singleNumber(nums3));

//? BruteForce TC: O(n2)
/*
pick every element and then another loop to find if it exists in array or not
*/
//? 1. Better TC: O(N)  SC: O(N)
/*
use hashing to create a frequency map
then iterate through to find the item with freq === 1
*/

//? 2.Optimal:  XOR technique TC: O(N)  SC: O(1)
/*
do XOR of all the elements and the unique will be left alone
*/