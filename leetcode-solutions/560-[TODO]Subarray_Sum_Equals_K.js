/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const nums1 = [1, 1, 1];
const k1 = 2;

const nums2 = [1, 2, 3];
const k2 = 3;


//? 1. Brute Force   TC: O(N2)  SC: O(1)
/*
- find all sub array
- find sum of every sub array
- compare it with K and update answer if sum is equal to k
*/
var subarraySum = function(nums, k) {
    let subArrayWithSumK = 0;

    // outer loop to find subarray starting point
    for(let i =0 ; i< nums.length; i++){
      let subArraySum = 0;
      // inner loop to find sub array end point
      for (let j = i; j < nums.length; j++) {
         subArraySum+= nums[j];

         if(subArraySum == k){
            subArrayWithSumK++;
         }
      }
    }

    return subArrayWithSumK;
};

console.log(subarraySum(nums1,k1));
console.log(subarraySum(nums2,k2));

//? 2. better approach Hashing techniqe

//? 3 Optimal :  Two Pointer + Greedy + slidding window
/*
We will create a window using two pointers 
- by default we will keep moving the right pointer and calculate sum
   - if sum reaches exactly K then we can increase the answer count
   - if sum reaches above K then we will move left key and this will   reduce sum , because we are removing an item from window
   - now again check if sum is k then update answer 
   - if  sum is lesser then increase right counter 
- Finally both  right and left will reach end and we will have total number of sub array with sum K
*/
var subarraySumOptimal = function (nums, k) {

   let left = 0;
   let right = 0;
   let subArraySum = 0;
   let subArrayWithSumK = 0;
   while (right < nums.length) {
     subArraySum += nums[right];

     while (subArraySum > k && left <= right) {
       subArraySum -= nums[left];
       left++;
     }

     if (subArraySum === k) {
       subArrayWithSumK++;
     }

     right++;
   }
   //  while (left <= nums.length) {
   //    if (subArraySum === k) {
   //      subArrayWithSumK++;
   //    }
   //    if (subArraySum > k) {
   //      let elemetToBeDeducted = nums[left];
   //      subArraySum = subArraySum - elemetToBeDeducted;
   //      left++;
   //    }
   //  }

    return subArrayWithSumK;

};

console.log(subarraySumOptimal(nums1, k1));
console.log(subarraySumOptimal(nums2, k2));

// notes about greedy , two pointer
//  N3 N2 N all 3 techniques for solution
// for containing values + and -
// for only positives