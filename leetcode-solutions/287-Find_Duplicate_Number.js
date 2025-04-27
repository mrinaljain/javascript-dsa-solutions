/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.
[https://youtu.be/32Ll35mhWg0?si=Ber3bFcng5N8jzFS]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums1 = [1, 3, 4, 2, 2];
const nums2 = [3, 1, 3, 4, 2];
const nums3 = [3, 3, 3, 3, 3];

//? 1. Brute Force Approach [Frequency Hashmap Technique]
//? TC: O(N) SC : O(N)
/*

*/

var findDuplicateBruteForce = function (nums) {
  // make a hash map of frequency
  let frequencyHash = {};
  for (let i = 0; i < nums.length; i++) {
    frequencyHash[nums[i]] = (frequencyHash[nums[i]] ?? 0) + 1;
  }
  // find the frequence which is more then 1 and print
  let ans = Object.entries(frequencyHash).filter(([key, value]) => value > 1);
  return parseInt(ans[0][0]);
};

console.log(findDuplicateBruteForce(nums1));
console.log(findDuplicateBruteForce(nums2));
console.log(findDuplicateBruteForce(nums3));

//? 2. Better Approach [Sort + loop]
//? TC: O(NLog N) SC : O(1)
/*
- sort the array 
- loop to find 2 adjescent equal numbers and thats is our answer
*/

var findDuplicateBetter = function (nums) {
  // sort the array
  nums.sort();

  // loop to find 2 adjescent equal numbers and thats is our answer

  for (let i = 0; i < nums.length - 1; i++) {
    const element = nums[i];
    const nextElement = nums[i + 1];

    if (element === nextElement) {
      return element;
    }
  }
};

console.log(findDuplicateBetter(nums1));
console.log(findDuplicateBetter(nums2));
console.log(findDuplicateBetter(nums3));

//? 3. Optimal Approach [Rabbit Tortoise Method] TC: O(N) SC : O(1)
/*
 */

var findDuplicateOptimal = function (nums) {
 // pehele slow aur fast initilise karo 
 // slow single chalega , fast double chaleg [untie slow === fast]

 let slow = 0
 let fast = 0

do{
  slow = nums[slow];
  fast = nums[nums[fast]];
}while(slow !== fast)

slow = 0;

while(slow !== fast){
   slow = nums[slow];
   fast = nums[fast];
}

return slow;
};


console.log(findDuplicateOptimal(nums1));
console.log(findDuplicateOptimal(nums2));
console.log(findDuplicateOptimal(nums3));

// ?Follow up:
/*

1. How can we prove that at least one duplicate number must exist in nums?
2. Can you solve the problem in linear runtime complexity?
*/
