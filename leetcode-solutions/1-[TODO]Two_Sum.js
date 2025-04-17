/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums1 = [2, 7, 11, 15];
let target1 = 9;
let nums2 = [3, 2, 4];
let target2 = 6;
let nums3 = [3, 3];
let target3 = 6;
let nums4 = [3, 2, 3];
let target4 = 6;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(`Pairs ${i} ${j}`);

      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return -1;
};

//? 1. Brute Force TC : O(N2)
/*
We will check every pair possible and once sum equals to target we can return that pair and break loop
*/

// console.log(twoSum(nums1, target1));
// console.log(twoSum(nums2, target2));
// console.log(twoSum(nums3, target3));

//? 2. Find Remaining portion Approach
/*
https://www.youtube.com/watch?v=UXDSeD9mN-k
 */
var twoSumOptimised = function (nums, target) {

   let indexingHash = {};
   for (let i = 0; i < array.length; i++) {
       indexingHash[array[i]] = 1;
   }


  for (let i = 0; i < nums.length - 1; i++) {
    let item = nums[i];
    let itemToBeFound = target - item;

    //! below findindex can be easily replaced by a hash table to optimise time complexity
   //  let k = nums.findIndex(
   //    (element, index) => index !== i && element === itemToBeFound
   //  );
   //? Hashing technique to replace above 2 lines which are finding the existance of element

    if (Object.values(indexingHash).includes(itemToBeFound)  ) {
      return [i, k];
    }
  }
  return -1;
};

console.log(twoSumOptimised(nums1, target1));
console.log(twoSumOptimised(nums2, target2));
console.log(twoSumOptimised(nums3, target3));
console.log(twoSumOptimised(nums4, target4));


//? 3. Two Pointer [Greedy Approach]
// Figure out best TC and SC
