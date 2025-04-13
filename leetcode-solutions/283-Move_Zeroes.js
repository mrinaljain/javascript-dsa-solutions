/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/
let nums = [0, 1, 0, 3, 12];


var moveZeroes = function (nums) {
  let n = nums.length;
  let l = 0;
  for (let r = 0; r < n; r++) {
    const element = nums[r];
    if (element == 0) {
    } else {
      // swipe(index l , index r)
      let temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      // increase l for next swipe
      l++;
    }
  }
  return nums;
};

console.log(moveZeroes(nums));


//? TRICK :  insted of moving zeros to right(end) , solve for moving nonZeros to left(start) which is same as asked.
//1. two pointers approach 
// Solution Explaination https://www.youtube.com/watch?v=aayNRwUN3Do



//2. splice approach
var moveZeroesUsingSplice = function (nums) {
  let n = nums.length;
  for (let i = n-1; i >=0; i--) {
    let element = nums[i];

    if (element === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

