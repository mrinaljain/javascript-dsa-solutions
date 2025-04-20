/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let matrix1 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target1 = 3;
let matrix2 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target2 = 13;
var searchMatrix = function (matrix, target) {
  let r = matrix.length;
  let c = matrix[0].length;

  for (let row = 0; row < r; row++) {
    if (target >= matrix[row][0] && target <= matrix[row][c-1]) {
      for (let col = 0; col < c; col++) {
        if (matrix[row][col] === target) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(searchMatrix(matrix1, target1));
console.log(searchMatrix(matrix2, target2));

//? 1. Brute Force TC: O(N2)
/*
traverse entire matrix and find if exists
*/ 

//? 2. better approach TC : O(N)
/*
- loop through each ROW but enter only that coloumn where target exists 
- we can check that target exists in row or not by comparing it with first and last element of that row(given that each row is sorted in increasing order)
*/

//? 3.[TODO] Optimal Approach TC: O(log(m+n))


var searchMatrixOptimal = function (matrix, target) {
 let rows = matrix.length;
 let cols = matrix[0].length;

 let left = 0;
 let right = rows * cols - 1;


while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midRow = Math.floor(mid / cols);
        let midCol = mid % cols;
        let midVal = matrix[midRow][midCol];
         if (midVal === target) {
           return true;
         } else if (midVal < target) {
           left = mid + 1;
         } else {
           right = mid - 1;
         }
}

};