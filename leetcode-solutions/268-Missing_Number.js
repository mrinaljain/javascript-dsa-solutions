/*
https://leetcode.com/problems/missing-number/description/
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
nums1 = [3, 0, 1];
nums2 = [0, 1];
nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

var missingNumber = function (nums) {

   // calculate the sume of all digits of array
   // substract from sum of n natural numbers

   let n = nums.length;

   let sOFn = n * (n+1) / 2;
   let sumOfArray = 0;
   nums.forEach(element => {
      sumOfArray += element;
   });
   let ans = sOFn -sumOfArray;

   return ans;

};


console.log(missingNumber(nums1));
console.log(missingNumber(nums2));
console.log(missingNumber(nums3));

// Bruteforce: TC: O(N Log N + N)
/*
Brute force is to sort array  and then run loop to find the misssing value

*/

//Intution Optimised
/*
use logic of sum of natural numbers 
so we can easily find the mising natural number
1. calculate the sume of all digits of array
2. substract from sum of n natural numbers
3. reminder is answer
*/

// TODO : more types of solutions available like XOR technique etc on leetcode