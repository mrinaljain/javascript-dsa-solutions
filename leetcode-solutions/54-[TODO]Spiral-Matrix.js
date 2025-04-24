/*
Given an m x n matrix, return all elements of the matrix in spiral order.
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const matrix1 = [
  [1, 2, 3, 4, 5, 6],
  [18, 19, 20, 21, 22, 7],
  [17, 28, 29, 30, 23, 8],
  [16, 27, 26, 25, 24, 9],
  [15, 14, 13, 12, 11, 10],
];

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

var spiralOrder = function (matrix) {
  let result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  // write solution with comments like a story
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      console.log(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      console.log(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        console.log(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        console.log(matrix[i][left]);
      }
      left++;
    }
  }
};

spiralOrder(matrix1);
// https://www.youtube.com/watch?v=3Zv-s9UUrFM

//? 1.  TC : O(M*N)  SC : O(M*N)
/*
sabse pehle marking kr lo  top bottom left right 
- now start traversion circle 
- left to right  => update top 
- top to bottom  => update right 
- right to left => update bottom
- bottom to top => update left

- keep  2 exception in mind regarding single row and single column
*/