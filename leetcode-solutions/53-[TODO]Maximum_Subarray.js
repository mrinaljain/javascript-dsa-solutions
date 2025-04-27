/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2 = [1];
const nums3 = [5, 4, -1, 7, 8];




//? 1. Brute Force  TC: O(N3) SC : O(1)
/*
- Find Every Sub array start and End point
- iterate on sub array , also calculate sum 
-  update max sum every time
*/
var maxSubArrayBrute = function(nums) {
  // - Find Every Sub array start and End point
   let n = nums.length;
   let maxSum = 0;
   for (let i = 0; i < nums.length; i++) {

       for (let j = i; j < nums.length; j++) {
         let start = i;
         let end  = j;
         let sum = 0;
         for (let k = start; k <= end; k++) {
            sum+= nums[k];            
         }
         maxSum = Math.max(maxSum, sum);
       }
      
   }
   return maxSum;

}

console.log(maxSubArrayBrute(nums1));
console.log(maxSubArrayBrute(nums2));
console.log(maxSubArrayBrute(nums3));


//? 2. Better   TC: O(N2) SC : O(1)
/*
- Use Continous sum approach to avoid calculating sentire sum everytime.
*/
var maxSubArrayBetter = function (nums) {
  // - Find Every Sub array start and End point
  let n = nums.length;
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
   let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};

console.log(maxSubArrayBetter(nums1));
console.log(maxSubArrayBetter(nums2));
console.log(maxSubArrayBetter(nums3));

//? 3. Kadane's Algorithm  TC: O(N) SC : O(1)
/*
- loop on the entire array with 
- keep adding the sum
- agar sume 0 se kam to reset sum  Else  update maxsum
- otherwise carry on calculating sum
- return  max sum in end

*/
var maxSubArrayOptimal = function(nums) {
   let maxSum = nums[0];
   let sum = 0;
   for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if(sum < 0){
         sum = 0;
      }else{
          maxSum = Math.max(maxSum, sum);
      }
     
   }   
   return maxSum;
};



console.log(maxSubArrayOptimal(nums1));
console.log(maxSubArrayOptimal(nums2));
console.log(maxSubArrayOptimal(nums3));


// ! [TODO] 
/*
- find the subaray with max sum.
- Use divide and Concure method to solve
- handel the condition where max is negative in the end
*/  