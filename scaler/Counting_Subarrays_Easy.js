/*
Given an array A of N non-negative numbers and a non-negative number B,
you need to find the number of subarrays in A with a sum less than B.
We may assume that there is no overflow.
*/

const arr1 = [15, 8, 16];
const b1 = 242;
const solve = function (A, B) {
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let j = i; j < A.length; j++) {
      sum += Number(A[j]);
      if (sum < Number(B)) {
        ans++;
      }
    }
  }
  return ans;
};

console.log(solve(arr1,b1));
