/*
Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
nums1 = [1, 1, 2, 2, 2, 3];
nums2 = [2,3,1,3,2];
nums3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
var frequencySort = function(nums) {
   // lets create a frequency map first
   let freqMap = {};
   nums.forEach(element => {
      freqMap[element] = (freqMap[element] || 0 ) + 1;
   });

   // now we need to sort the key values in increasing order of frequency
   let sortedArray = Object.entries(freqMap).sort((a, b) => {
      if (a[1] !== b[1]) {
        // Increasing by value
        return a[1] - b[1];
      } else {
        // Decreasing by key if values are equal
        return b[0] - a[0];
      }
   });
   
   // now we need to  loop over each pair and push  key to array (value times)
   let ans = [];
   console.log(sortedArray);
   
   sortedArray.forEach(([key, value]) => {
     // ans.push(key.repeat(value));
     for (let i = 1; i <= value; i++) {
       ans.push(parseInt(key));
     }
   });
   return ans;

};

console.log(frequencySort(nums1));
console.log(frequencySort(nums2));
console.log(frequencySort(nums3));
